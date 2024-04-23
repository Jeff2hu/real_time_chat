import Conversations from "./Conversations";
import LogOutBtn from "./LogOutBtn";
import SearchInput from "./SearchInput";

const SideBar = () => {
  return (
    <div className="flex flex-col p-4 border-r border-slate-400">
      <SearchInput />
      <div className="divider px-3" />
      <Conversations />
      <LogOutBtn />
    </div>
  );
};

export default SideBar;
