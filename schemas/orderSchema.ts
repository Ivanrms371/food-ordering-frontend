import { z } from "zod";

const PaymentMethodEnum = z.enum(["card", "cash", "online"]);
const DeliveryMethodEnum = z.enum(["delivery", "pickup"]);
const OrderStateEnum = z.enum([
  "pending",
  "accepted",
  "in_progress",
  "delivering",
  "delivered",
  "cancelled",
]);

export type OrderState = z.infer<typeof OrderStateEnum>;

const PaymentStatusEnum = z.enum([
  "pending",
  "approved",
  "cancelled",
  "rejected",
]);

const PaymentSchema = z.object({
  status: PaymentStatusEnum,
  statusDetail: z.string().nullable(),
});

const OrderItemSchema = z.object({
  id: z.string(),
  name: z.string(),
  quantity: z.number(),
  priceUnit: z.number(),
  subtotal: z.number(),
  customizationTotal: z.number().optional(),
  discountApplied: z.number().optional(),
});

const OrderSchema = z.object({
  id: z.string(),
  orderCode: z.string(),
  userId: z.string(),
  discountCodeId: z.string().nullable(),

  preferenceId: z.string().nullable(),
  isPaid: z.boolean(),
  paymentMethod: PaymentMethodEnum,
  payment: z.array(PaymentSchema),

  deliveryMethod: DeliveryMethodEnum,
  addressStreet1: z.string().nullable(),
  addressStreet2: z.string().nullable(),
  addressApartment: z.string().nullable(),
  addressDeliveryInstructions: z.string().nullable(),

  state: OrderStateEnum,

  total: z.number(),
  subtotal: z.number(),
  discountApplied: z.number(),

  orderItems: z.array(OrderItemSchema).optional(),

  createdAt: z.string(),
  updatedAt: z.string(),
  deletedAt: z.string().nullable(),
});

export type Order = z.infer<typeof OrderSchema>;

export const MyOrdersResponseSchema = z.array(OrderSchema);
