import Message from "./Message";

const Messages = () => {
  return (
    <div className="flex-1 px-4 overflow-y-auto">
      {Array.from({ length: 20 }).map((_, i) => (
        <Message key={i} />
      ))}
    </div>
  );
};

export default Messages;
