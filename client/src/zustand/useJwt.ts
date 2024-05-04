import { create } from "zustand";

interface Jwt {
  jwt: string;
  setJwt: (jwt: string) => void;
}

export const useJwt = create<Jwt>()((set) => ({
  jwt: "",
  setJwt: (jwt: string) => set({ jwt }),
}));
