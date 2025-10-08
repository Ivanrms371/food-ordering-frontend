// store/authStore.ts
import { User, UserAddress } from "@interfaces/user.interface";
import { fetchMyAddresses } from "@services/userAddressService";
import { fetchMyProfile } from "@services/userService";
import { create } from "zustand";

interface AuthState {
  accessToken: string | null;
  user: User | null;
  userAddresses: UserAddress[];

  // loading states
  isLoading: boolean;
  isLoadingProfile: boolean;
  isLoadingAddresses: boolean;

  // general state
  isAuthenticated: boolean;

  // actions
  loadMyProfile: () => Promise<void>;
  loadMyAddresses: () => Promise<void>;

  setAccessToken: (token: string | null) => void;
  setUser: (user: User | null) => void;
  setIsAuthenticated: (auth: boolean) => void;
  setIsLoading: (loading: boolean) => void;
  setAddresses: (addresses: UserAddress[]) => void;
  clearAuth: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  accessToken: null,
  user: null,
  userAddresses: [],

  isLoading: true,
  isLoadingProfile: true,
  isLoadingAddresses: true,

  isAuthenticated: false,

  // load profile
  loadMyProfile: async () => {
    set({ isLoadingProfile: true });
    try {
      const data = await fetchMyProfile();
      set({ user: data, isAuthenticated: true });
    } catch (err) {
      console.log("Error fetching profile: ", err);
      set({ isAuthenticated: false });
    } finally {
      set({ isLoadingProfile: false });
    }
  },
  // load addresses
  loadMyAddresses: async () => {
    set({ isLoadingAddresses: true });
    try {
      const data = await fetchMyAddresses();
      set({ userAddresses: data });
    } catch (err) {
      console.log(err);
    } finally {
      set({ isLoadingAddresses: false });
    }
  },

  setAccessToken: (token) => set({ accessToken: token }),
  setUser: (user) => set({ user }),
  setAddresses: (addresses) => set({ userAddresses: addresses }),
  setIsAuthenticated: (auth) => set({ isAuthenticated: auth }),
  setIsLoading: (loading) => set({ isLoading: loading }),

  clearAuth: () =>
    set({
      accessToken: null,
      user: null,
      userAddresses: [],
      isAuthenticated: false,
    }),
}));

export { useAuthStore };
