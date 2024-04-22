import { memo } from "react";

const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered rounded-full"
      />
    </form>
  );
};

const MemoizedSearchInput = memo(SearchInput);

export default MemoizedSearchInput;
