import { memo } from "react";
import { BiLogOut } from "react-icons/bi";
import { useJwt } from "../../../zustand/useJwt";

const LogOutBtn = () => {
  const { setJwt } = useJwt();

  const logOutHandler = () => {
    setJwt("");
  };

  return (
    <div className="mt-4">
      <button className="cursor-pointer" onClick={logOutHandler}>
        <BiLogOut className="w-6 h-6 text-white" />
      </button>
    </div>
  );
};

const MemoizedLogOutBtn = memo(LogOutBtn);

export default MemoizedLogOutBtn;
