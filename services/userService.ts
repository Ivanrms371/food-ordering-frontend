import { api } from "@/lib/axios";

export const fetchMyProfile = async () => {
  try {
    const res = await api.get("/users/me");
    return res.data;
  } catch (error) {
    return null;
  }
};
