"use client";

import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { OrdersService } from "@/services/ordersService";
import { OrderCard } from "./OrderCard";
import { Order } from "@/schemas/orderSchema";

export const OrdersList = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["orders"],
    queryFn: () => OrdersService.getMyOrders(),
  });

  useEffect(() => {}, []);
  return (
    <div>
      <ul className="space-y-4">
        {!data || data?.length === 0 ? (
          <li className="py-4">No orders found</li>
        ) : (
          <>
            {data?.map((order) => (
              <OrderCard key={order.id} order={order} />
            ))}
          </>
        )}
      </ul>
    </div>
  );
};
