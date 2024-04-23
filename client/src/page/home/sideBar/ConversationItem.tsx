const ConversationItem = () => {
  return (
    <div className="flex gap-2 items-center rounded hover:bg-sky-500 cursor-pointer p-2 py-1">
      <div className="avatar online">
        <div className="w-12 rounded-full ">
          <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <div className="flex flex-col flex-1">
        <div className="flex gap-2 justify-between">
          <p className="font-bold text-gray-200">Jeff Zhu</p>
          <span className="text-xl">🎃</span>
        </div>
      </div>
    </div>
  );
};

export default ConversationItem;
