import { Fragment } from "react/jsx-runtime";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import NoChatSelected from "./NoChatSelected";

const Chat = () => {
  const selectedUser = false;

  return (
    <div className="md:min-w-[450px] flex flex-col">
      {selectedUser ? (
        <Fragment>
          <div className="px-4 py-3 mb-2 bg-indigo-700">
            <span className="text-white-300 font-bold text-lg">Jeff Zhu</span>
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
