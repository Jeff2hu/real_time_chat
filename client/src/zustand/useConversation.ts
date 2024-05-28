import { User } from "type/user";
import { create } from "zustand";

type Conversation = {
  messages: string[];
  setMessages: (messages: string[]) => void;
  selectedConversation: User | null;
  setSelectedConversation: (selectedConversation: User | null) => void;
};

const useConversation = create<Conversation>((set) => ({
  messages: [],
  setMessages: (messages) => set({ messages }),
  selectedConversation: null,
  setSelectedConversation: (selectedConversation) =>
    set({ selectedConversation }),
}));

export default useConversation;
