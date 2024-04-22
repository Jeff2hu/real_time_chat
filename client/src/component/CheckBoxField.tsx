import { InputHTMLAttributes, memo } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const CheckBoxField = ({ label, ...otherProps }: Props) => {
  return (
    <div className="form-control">
      <label className="label gap-2 cursor-pointer">
        <span className="label-text">{label}</span>
        <input
          type="checkbox"
          className="checkbox checkbox-primary border-slate-900"
          {...otherProps}
        />
      </label>
    </div>
  );
};

const MemoizedCheckBoxField = memo(CheckBoxField);

export default MemoizedCheckBoxField;
