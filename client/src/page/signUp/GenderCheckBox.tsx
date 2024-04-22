import { memo } from "react";
import CheckBoxField from "../../component/CheckBoxField";

interface Props {
  genderSelected: number;
  genderSelectedHandler: (index: number) => void;
}

const GenderCheckBox = ({ genderSelected, genderSelectedHandler }: Props) => {
  const fields = [{ label: "Male" }, { label: "Female" }];
  return (
    <div className="flex gap-5">
      {fields.map((field, index) => (
        <CheckBoxField
          key={`${field.label}_${index}`}
          label={field.label}
          checked={genderSelected == index + 1}
          onChange={() => genderSelectedHandler(index + 1)}
        />
      ))}
    </div>
  );
};

const MemoizedGender = memo(GenderCheckBox);

export default MemoizedGender;
