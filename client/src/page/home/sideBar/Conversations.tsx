import ConversationItem from "./ConversationItem";

const Conversations = () => {
  return (
    <div className="flex flex-col py-2 overflow-y-auto">
      {Array.from({ length: 3 }).map((_, i) => (
        <ConversationItem key={i} />
      ))}
    </div>
  );
};

export default Conversations;
