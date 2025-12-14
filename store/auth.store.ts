import { User, UserAddress } from "@/interfaces/user.interface";
import { fetchMyAddresses } from "@/services/userAddressService";
import { fetchMyProfile } from "@/services/userService";
import { create } from "zustand";

interface AuthState {
  accessToken: string | null;
  user: User | null;
  userAddresses: UserAddress[];

  loadingPromise: Promise<void>;
  resolveLoading: () => void;

  isLoading: boolean;
  isLoadingProfile: boolean;
  isLoadingAddresses: boolean;

  isAuthenticated: boolean;

  loadMyProfile: () => Promise<void>;
  loadMyAddresses: () => Promise<void>;

  setSession: (token: string | null) => void;
  setUser: (user: User | null) => void;
  setIsLoading: (loading: boolean) => void;
  setAddresses: (addresses: UserAddress[]) => void;
  clearAuth: () => void;
}

const useAuthStore = create<AuthState>((set, get) => {
  let resolveLoading!: () => void;

  return {
    accessToken: null,
    user: null,
    userAddresses: [],

    isLoading: true,
    isLoadingProfile: true,
    isLoadingAddresses: true,
    isAuthenticated: false,

    loadingPromise: new Promise<void>((resolve) => {
      resolveLoading = resolve;
    }),
    resolveLoading,

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

    setSession: (token) => {
      set({ accessToken: token, isAuthenticated: !!token });

      get().resolveLoading();
    },

    setUser: (user) => set({ user }),
    setAddresses: (addresses) => set({ userAddresses: addresses }),
    setIsLoading: (loading) => set({ isLoading: loading }),

    clearAuth: () => {
      set({
        accessToken: null,
        user: null,
        userAddresses: [],
        isAuthenticated: false,
      });

      let newResolve!: () => void;
      set({
        loadingPromise: new Promise<void>((resolve) => {
          newResolve = resolve;
        }),
        resolveLoading: newResolve,
      });
    },
  };
});

export { useAuthStore };
