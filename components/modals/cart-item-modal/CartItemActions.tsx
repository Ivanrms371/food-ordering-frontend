import { ElementAnimated } from "@/components/animated/ElementAnimated";
import { useCartStore } from "@/store/cart.store";
import { formatCurrency } from "@/utils/currency";

interface Props {
  onClose: () => void;
  addItemToCart: () => void;
  updateItemInCart: () => void;
}

export const CartItemActions = ({
  onClose,
  addItemToCart,
  updateItemInCart,
}: Props) => {
  const { calculateSubtotalItem, cartItem } = useCartStore();
  return (
    <ElementAnimated
      initial={{ opacity: 0, scaleX: 0.9 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ amount: 0.5, once: true }}
      transition={{ duration: 0.3, delay: 0.2 }}
      className="flex gap-6 md:mt-4 mt-8  bg-white w-full justify-end"
    >
      <button
        type="button"
        className="button-primary w-full mt-4"
        onClick={() => {
          if (cartItem?.cartItemId) {
            updateItemInCart();
            return;
          }
          addItemToCart();
        }}
      >
        {cartItem?.cartItemId ? "Edit" : "Add"} (
        {formatCurrency(calculateSubtotalItem(cartItem))})
      </button>
    </ElementAnimated>
  );
};
