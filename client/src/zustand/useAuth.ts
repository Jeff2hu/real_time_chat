import { AuthResponse } from "type/auth";
import { create } from "zustand";

type AuthInfo = Omit<AuthResponse, "_id" | "jwt">;

interface Auth {
  auth: AuthInfo | null;
  setAuth: (auth: AuthInfo) => void;
}

export const useAuth = create<Auth>((set) => ({
  auth: null,
  setAuth: (auth: AuthInfo) => set({ auth }),
}));
