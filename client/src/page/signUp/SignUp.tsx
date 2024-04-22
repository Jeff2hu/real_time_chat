import { useFormik } from "formik";
import { useCallback, useState } from "react";
import * as Yup from "yup";
import InputField from "../../component/InputField";
import { stringSchema } from "../../utils/schema";
import GenderCheckBox from "./GenderCheckBox";

const initialValues = {
  fullName: "",
  userName: "",
  password: "",
  confirmPassword: "",
};

const validationSchema = Yup.object({
  fullName: stringSchema("FullName is Required"),
  userName: stringSchema("UserName is Required"),
  password: stringSchema("Password is Required"),
  confirmPassword: stringSchema("ConfirmPassword is Required"),
});

const fields = [
  { name: "fullName", label: "FullName" },
  { name: "userName", label: "UserName" },
  {
    name: "password",
    label: "Password",
    type: "password",
  },
  {
    name: "confirmPassword",
    label: "ConfirmPassword",
    type: "password",
  },
];

const SignUp = () => {
  const [genderSelected, setGenderSelected] = useState<number>(1);

  const genderSelectedHandler = useCallback((index: number) => {
    setGenderSelected(index);
  }, []);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log(values, genderSelected);
    },
  });

  return (
    <div className="flex flex-col items-center justify-center mx-auto min-w-96">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300 ">
          Login
          <span className="text-blue-500 ml-2">Chat App</span>
        </h1>

        <form onSubmit={formik.handleSubmit}>
          {fields.map((field) => (
            <InputField
              key={field.name}
              name={field.name}
              label={field.label}
              value={formik.values[field.name as keyof typeof formik.values]}
              onChange={formik.handleChange}
              type={field.type || "text"}
              placeholder={`Enter your ${field.label}`}
            />
          ))}
          <GenderCheckBox
            genderSelected={genderSelected}
            genderSelectedHandler={genderSelectedHandler}
          />
          <a className="text-sm mt-2 inline-block hover:text-blue-500 hover:underline">
            Don't have an account?
          </a>
          <button
            type="submit"
            className="w-full p-2 mt-4 font-semibold text-white bg-blue-500 rounded-md"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
