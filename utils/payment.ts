import { PaymentStatus } from "@/interfaces/order.interface";

interface PaymentStatusProps {
  paymentStatus?: PaymentStatus;
  orderState?: string;
  externalReference?: string | null;
}

export const getUrlPaymentStatus = ({
  paymentStatus,
  orderState,
  externalReference,
}: PaymentStatusProps) => {
  console.log(paymentStatus);
  if (orderState === "cancelled") {
    return `/cancelled${
      externalReference ? `?external_reference=${externalReference}` : ""
    }`;
  }
  switch (paymentStatus) {
    case "approved":
      return `/success${
        externalReference ? `?external_reference=${externalReference}` : ""
      }`;
    case "pending":
      return `/pending${
        externalReference ? `?external_reference=${externalReference}` : ""
      }`;
    case "rejected":
      return `/failure${
        externalReference ? `?external_reference=${externalReference}` : ""
      }`;
    default:
      return "/";
  }
};
