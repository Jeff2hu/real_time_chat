import { memo } from "react";
import { BsSend } from "react-icons/bs";

const MessageInput = () => {
  return (
    <div className="px-4 my-3">
      <div className="w-full relative">
        <input
          type="text"
          placeholder="Type a message..."
          className="input input-bordered w-full rounded-lg text-sm p-2.5 bg-gray-700 text-white"
        />
        <button className="absolute inset-y-0 end-0 flex items-center pe-3">
          <BsSend className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  );
};

const MemoizedMessageInput = memo(MessageInput);

export default MemoizedMessageInput;
