import { memo } from "react";

const Loading = () => {
  return <span className="loading loading-spinner mx-auto"></span>;
};

const MemorizedLoading = memo(Loading);

export default MemorizedLoading;
