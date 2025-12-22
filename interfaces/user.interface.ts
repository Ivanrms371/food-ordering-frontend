export interface User {
  id: string;
  fullName: string;
  email: string;
  emailVerifiedAt: Date | null;
  phone: string | null;
  phoneVerifiedAt: string | null;
  avatar: string | null;
  role: "customer" | "admin";
  updatedAt: Date;
  createdAt: Date;
}

export interface UserAddress {
  id: string;
  label: string;
  street1: string;
  street2?: string;
  apartment?: string;
  deliveryInstructions?: string | null;
}

export interface UserAddressFormData {
  id?: string;
  label: string;
  street: string;
  apartment?: string | null;
  city: string;
  instructions?: string | null;
}
