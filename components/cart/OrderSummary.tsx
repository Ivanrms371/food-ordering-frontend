import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/store/cart.store";
import { formatCurrency } from "@/utils/currency";
import { useCartUIStore } from "@/store/cart-ui.store";
import { TextBlockAnimated } from "@/components/animated/TextBlockAnimated";
import { ElementAnimated } from "@/components/animated/ElementAnimated";
import { AnimatePresence } from "framer-motion";

export const OrderSummary = () => {
  const router = useRouter();

  const { getCartTotal, isEmpty } = useCartStore();
  const { closeCart } = useCartUIStore();

  return (
    <AnimatePresence>
      {!isEmpty() && (
        <div className="flex flex-col border-t p-5 border-gray-200 bg-white sticky bottom-0">
          <div className="flex justify-between items-center">
            <TextBlockAnimated
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <p className="text-xl font-semibold text-gray-800">Total</p>
            </TextBlockAnimated>
            <TextBlockAnimated
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <p className="text-xl font-mono font-medium text-gray-800">
                {formatCurrency(getCartTotal())}
              </p>
            </TextBlockAnimated>
          </div>
          <TextBlockAnimated
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <p className=" text-gray-500 mt-2">
              Free shipping & taxes included
            </p>
          </TextBlockAnimated>

          <div className="mt-4 w-full flex flex-col gap-4">
            <ElementAnimated
              initial={{ opacity: 0, scaleX: 0.9 }}
              animate={{ opacity: 1, scaleX: 1 }}
              exit={{ opacity: 0, scaleX: 0.9 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <button
                type="button"
                className="button-primary text-center w-full block"
                onClick={() => {
                  closeCart();
                  router.push("/checkout");
                }}
              >
                Checkout
              </button>
            </ElementAnimated>

            <TextBlockAnimated
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <p className="text-center text-gray-500">
                or{" "}
                <button
                  type="button"
                  onClick={closeCart}
                  className="text-gray-800 font-medium cursor-pointer"
                >
                  Continue Shopping
                </button>
              </p>
            </TextBlockAnimated>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
