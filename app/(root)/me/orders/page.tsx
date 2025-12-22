import { OrdersList } from "./ui/OrdersList";

export default function OrdersPage() {
  return (
    <div className="p-4 space-y-6">
      <h1 className="text-4xl text-gray-800 pb-6 font-mono font-bold">
        My Orders
      </h1>

      <OrdersList />
    </div>
  );
}
