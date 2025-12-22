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
import { useCheckoutStore } from "@/store/checkout.store";
import { useEffect, useState } from "react";
import { discountService } from "@/services/discounts/discountsService";

export const OrderSummary = () => {
  const router = useRouter();
  const [discountCode, setDiscountCode] = useState("");
  const [error, setError] = useState<string | null>("");
  const { items, getCartTotal, isEmpty, setCartItem } = useCartStore();
  const { setDiscount, discount, calculateTotal } = useCheckoutStore();
  const { openModal } = useModalStore();

  useEffect(() => {
    if (isEmpty()) {
      router.push("/");
    }
  }, [items]);

  const onEdit = (item: CartItemType) => {
    openModal("OrderItemModal");
    setCartItem(item);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (discountCode.trim() === "") {
      setError("Please enter a discount code");
      return;
    }

    setError(null);

    const discount = await discountService.getDiscountByCode(
      discountCode,
      getCartTotal()
    );

    if (discount.success) {
      setDiscount({
        code: discount.code,
        value: discount.value,
        type: discount.type,
      });
    } else {
      setError("Please enter a valid code");
    }
  };

  return (
    <div>
      <div className="sticky top-10 bg-gray-50 rounded-3xl p-8 shadow-md min-h-[300px]">
        <div className="flex flex-col gap-4">
          <h2 className="text-gray-800 text-2xl font-medium">Order summary</h2>
          {items.map((item, index) => (
            <CartItem key={index} index={index} item={item} onEdit={onEdit} />
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="discount-code">Discount code</label>
          <form className="flex gap-2 w-full" onSubmit={onSubmit}>
            <input
              type="text"
              id="discount-code"
              className="input-form"
              onInput={(e) =>
                setDiscountCode(e.currentTarget.value.toUpperCase())
              }
              value={discountCode}
            />
            <button type="submit" className="button-secondary rounded-md py-2">
              Apply
            </button>
          </form>
          {error && <p className="text-red-500 text-sm">{error}</p>}

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
