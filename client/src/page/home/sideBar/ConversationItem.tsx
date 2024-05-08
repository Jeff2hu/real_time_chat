import { getRandomEmoji } from "@Utils/emoji";
import useConversation from "@Zustand/useConversation";
import { Fragment } from "react/jsx-runtime";
import { User } from "type/user";

interface Props {
  user: User;
  isLastUser: boolean;
}

const ConversationItem = ({ user, isLastUser }: Props) => {
  const { setSelectedConversation, selectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === user._id;

  return (
    <Fragment>
      <div
        className={`flex gap-2 items-center rounded cursor-pointer p-1 hover:bg-sky-500 ${
          isSelected ? "bg-sky-700" : ""
        }`}
        onClick={() => setSelectedConversation(user)}
      >
        <div className="avatar online">
          <div className="w-12 rounded-full ">
            <img src={user.profilePic} />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-2 justify-between">
            <p className="font-bold text-gray-200">{user.userName}</p>
            <span className="text-xl">{getRandomEmoji()}</span>
          </div>
        </div>
      </div>
      {!isLastUser && <div className="divider my-0 py-0 h-1" />}
    </Fragment>
  );
};

export default ConversationItem;
