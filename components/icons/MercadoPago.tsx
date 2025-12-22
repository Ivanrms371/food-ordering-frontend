import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type Props = HTMLAttributes<HTMLImageElement>;

export const MercadoPago = (props: Props) => {
  return (
    <img
      src="/assets/mercadopago2.png"
      alt="Mercado Pago"
      className={twMerge("w-5 h-auto object-contain", props.className)}
      {...props}
    />
  );
};
