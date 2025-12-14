import { CartItem } from "@/components/cart/CartItem";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/store/cart.store";
import {
  calculateDiscount,
  calculateDiscountValue,
  formatCurrency,
} from "@/utils/currency";
import { CartItem as CartItemType } from "@/interfaces/order-item.interface";
import { useCartUIStore } from "@/store/cart-ui.store";
import { useModalStore } from "@/store/modal.store";
import {
  discountsService,
  DiscountsService,
} from "@/services/discounts/discountsService";
import { useCheckoutStore } from "@/store/checkout.store";
import { useEffect, useState } from "react";

export const OrderSummary = () => {
  const router = useRouter();
  const [discountCode, setDiscountCode] = useState("");
  const { cart, getCartTotal, isEmpty, setCartItem } = useCartStore();
  const { setDiscount, discount, calculateTotal } = useCheckoutStore();
  const { openModal } = useModalStore();

  useEffect(() => {
    if (isEmpty()) {
      router.push("/");
    }
  }, [cart]);

  const onEdit = (item: CartItemType) => {
    openModal("OrderItemModal");
    setCartItem(item);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const discount = await discountsService.getDiscountByCode(
      discountCode,
      getCartTotal()
    );

    setDiscount({
      code: discount.code,
      value: discount.value,
      type: discount.type,
    });
  };

  console.log(discount);
  return (
    <div>
      <div className="sticky top-10 bg-gray-50 rounded-3xl p-8 shadow-md min-h-[300px]">
        <div className="flex flex-col gap-4">
          <h2 className="text-gray-800 text-2xl font-medium">Order summary</h2>
          {cart.map((item, index) => (
            <CartItem key={index} index={index} item={item} onEdit={onEdit} />
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="discount-code">Discount code</label>
          <form className="flex gap-2" onSubmit={onSubmit}>
            <input
              type="text"
              id="discount-code"
              className="input-form"
              onInput={(e) =>
                setDiscountCode(e.currentTarget.value.toUpperCase())
              }
              value={discountCode}
            />
            <button type="submit" className="button-secondary rounded-md">
              Apply
            </button>
          </form>

          <div className="flex flex-col gap-4 mt-6">
            <div className="flex justify-between ">
              <div className="text-gray-600">Subtotal</div>
              <div className="text-gray-900">
                {formatCurrency(getCartTotal())}
              </div>
            </div>
            {discount.value > 0 && (
              <div className="flex justify-between ">
                <div className="flex gap-1 items-center text-gray-600">
                  Discount
                  {discount.type === "percentage" && (
                    <span className="text-xs text-gray-500">
                      ({discount.value}%)
                    </span>
                  )}
                  <span className="uppercase font-medium text-xs px-2 py-0.5 bg-gray-200 text-gray-600 rounded-full">
                    {discount.code}
                  </span>
                </div>
                <div className="text-gray-900">
                  -{" "}
                  {formatCurrency(
                    calculateDiscountValue(
                      getCartTotal(),
                      discount.value,
                      discount.type
                    )
                  )}
                </div>
              </div>
            )}
          </div>
          <div className="flex justify-between border-t mt-4 pt-8 border-gray-300">
            <div className="text-gray-900 font-medium text-lg">Total</div>
            <div className="text-gray-900 font-medium text-lg">
              {formatCurrency(calculateTotal(getCartTotal()))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
