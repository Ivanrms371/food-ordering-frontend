import { CartItem } from "@components/cart/CartItem";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCartStore } from "@store/cart.store";
import { formatCurrency } from "@utils/currency";

export const OrderSummary = () => {
  const router = useRouter();
  const { cart, getCartTotal, isEmpty } = useCartStore();

  useEffect(() => {
    if (isEmpty()) {
      router.push("/");
    }
  }, [cart]);

  return (
    <div>
      <div className="sticky top-10 bg-gray-50 rounded-3xl p-8 shadow-md min-h-[300px]">
        <div className="flex flex-col gap-4">
          <h2 className="text-gray-800 text-2xl font-medium">Order summary</h2>
          {cart.map((item, index) => (
            <CartItem key={index} index={index} item={item} />
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="discount-code">Discount code</label>
          <div className="flex gap-2">
            <input type="text" id="discount-code" className="input-form" />
            <button className="button-secondary rounded-md">Apply</button>
          </div>

          <div className="flex flex-col gap-6 mt-10">
            <div className="flex justify-between ">
              <div className="text-gray-600">Subtotal</div>
              <div className="text-gray-900">
                {formatCurrency(getCartTotal())}
              </div>
            </div>
            <div className="flex justify-between ">
              <div className="flex gap-2 items-center text-gray-600">
                Discount{" "}
                <span className="uppercase font-medium text-xs px-2 py-0.5 bg-gray-200 text-gray-600 rounded-full">
                  NEWYEAR
                </span>
              </div>
              <div className="text-gray-900">- {formatCurrency(40)}</div>
            </div>
            <div className="flex justify-between ">
              <div className="text-gray-600">Shipping</div>
              <div className="text-gray-900">{formatCurrency(80)}</div>
            </div>
          </div>
          <div className="flex justify-between border-t mt-8 pt-8 border-gray-300">
            <div className="text-gray-900 font-medium text-lg">Total</div>
            <div className="text-gray-900 font-medium text-lg">
              {formatCurrency(getCartTotal() - 40 + 80)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
