import { useGetUser } from "@Api/user/hook";
import Loading from "@Component/Loading";
import ConversationItem from "./ConversationItem";

const Conversations = () => {
  const { data, isLoading } = useGetUser();

  return (
    <div className="flex flex-col py-2 p-2 overflow-y-auto gap-2">
      {isLoading || !data ? (
        <Loading />
      ) : (
        data.map((user, index) => (
          <ConversationItem
            key={user._id}
            user={user}
            isLastUser={data.length - 1 === index}
          />
        ))
      )}
    </div>
  );
};

export default Conversations;
