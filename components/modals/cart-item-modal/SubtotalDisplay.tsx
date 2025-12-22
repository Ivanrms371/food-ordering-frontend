import { useCartStore } from "@/store/cart.store";
import { formatCurrency } from "@/utils/currency";
import { TextBlockAnimated } from "@/components/animated/TextBlockAnimated";

export const SubtotalDisplay = () => {
  const { calculateSubtotalItem, currentItem } = useCartStore();

  return (
    <TextBlockAnimated
      initial={{ opacity: 0, x: 10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ amount: 0.5, once: true }}
      transition={{ duration: 0.3, delay: 0.3 }}
    >
      <p className="text-lg font-semibold text-gray-600 text-nowrap">
        Subtotal:{" "}
        <span className="font-semibold">
          {formatCurrency(calculateSubtotalItem(currentItem))}
        </span>
      </p>
    </TextBlockAnimated>
  );
};
