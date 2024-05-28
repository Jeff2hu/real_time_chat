import useConversation from "@Zustand/useConversation";
import { useEffect } from "react";
import { Fragment } from "react/jsx-runtime";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import NoChatSelected from "./NoChatSelected";

const Chat = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="md:min-w-[450px] flex flex-col">
      {selectedConversation ? (
        <Fragment>
          <div className="px-4 py-3 mb-2 bg-indigo-700">
            <span className="text-white-300 font-bold text-lg">
              {selectedConversation.userName}
            </span>
          </div>

          <Messages />
          <MessageInput />
        </Fragment>
      ) : (
        <NoChatSelected />
      )}
    </div>
  );
};

export default Chat;
