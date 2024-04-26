import { create } from "zustand";

interface AuthId {
  id: string;
  saveId: (id: string) => void;
}

export const useAuth = create<AuthId>()((set) => ({
  id: "",
  saveId: (id: string) => set({ id }),
}));
