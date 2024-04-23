import { memo } from "react";
import { BiLogOut } from "react-icons/bi";

const LogOutBtn = () => {
  return (
    <div className="mt-auto">
      <button className="cursor-pointer">
        <BiLogOut className="w-6 h-6 text-white" />
      </button>
    </div>
  );
};

const MemoizedLogOutBtn = memo(LogOutBtn);

export default MemoizedLogOutBtn;
