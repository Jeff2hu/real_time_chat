import { InputHTMLAttributes, memo } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const InputField = ({ label, ...otherProps }: Props) => {
  return (
    <div className="my-3">
      <label className="label">
        <span className="text-base label-text">{label}</span>
      </label>
      <input
        className="w-full h-10 p-4 rounded-md input input-bordered"
        {...otherProps}
      />
    </div>
  );
};

const MemoizedInputField = memo(InputField);

export default MemoizedInputField;
