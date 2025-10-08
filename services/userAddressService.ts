import { UserAddressFormData } from "@interfaces/user.interface";
import { api, ErrorHandler } from "@lib/axios";
import { useAuthStore } from "@store/auth.store";

export const fetchMyAddresses = async () => {
  try {
    const res = await api.get("/users/me/addresses");
    return res.data;
  } catch (error) {}
};

export const addNewAddress = async (formData: UserAddressFormData) => {
  try {
    const { userAddresses, setAddresses } = useAuthStore.getState();
    const { data } = await api.post("/users/me/addresses", formData);
    if (!data.error) {
      const updatedAddresses = [...userAddresses, data];
      setAddresses(updatedAddresses);
      // return { error: null };
    }
    // return { error: data.error };
  } catch (error) {
    // return ErrorHandler(error);
  }
};

export const updateAddress = async (id: string, data: {}) => {};

export const deleteAddress = async (addressId: string) => {
  try {
    const { userAddresses, setAddresses } = useAuthStore.getState();
    const { data } = await api.delete(`/users/me/addresses/${addressId}`);
    if (!data.error) {
      const updatedAddresses = userAddresses.filter(
        ({ id }) => id !== addressId
      );
      setAddresses(updatedAddresses);
      return { error: null };
    }
  } catch (error) {
    return { error: "Failed to delete address" };
  }
};

export const setDefaultAddress = async (id: string) => {};

export const fetchAddressById = async (id: string) => {};
