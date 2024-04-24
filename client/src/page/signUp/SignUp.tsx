import { usePostSignUp } from "@Api/auth/hook";
import { useFormik } from "formik";
import { useCallback, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { SignUpRequest } from "type/auth";
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
  password: stringSchema("Password is Required").min(6),
  confirmPassword: stringSchema("ConfirmPassword is Required").min(6),
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
  const navigate = useNavigate();
  const { mutate } = usePostSignUp(successCb);
  const [genderSelected, setGenderSelected] = useState<number>(1);

  function successCb() {
    navigate("/login");
  }

  const genderSelectedHandler = useCallback((index: number) => {
    setGenderSelected(index);
  }, []);

  const onSubmit = (values: Omit<SignUpRequest, "gender">) => {
    if (values.password !== values.confirmPassword) {
      toast.error("Password and ConfirmPassword must be the same");
      return;
    }

    mutate({
      fullName: values.fullName,
      userName: values.userName,
      password: values.password,
      confirmPassword: values.confirmPassword,
      gender: genderSelected === 1 ? "male" : "female",
    });
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div className="flex flex-col items-center justify-center mx-auto min-w-96">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300 ">
          SignUp
          <span className="text-blue-500 ml-2">Chat App</span>
        </h1>

        <form onSubmit={formik.handleSubmit}>
          {fields.map((field) => (
            <InputField
              key={field.name}
              name={field.name}
              label={field.label}
              error={formik.errors[field.name as keyof typeof formik.errors]}
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
          <Link
            to="/login"
            className="text-sm mt-2 inline-block hover:text-blue-500 hover:underline"
          >
            Already have an account?
          </Link>
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
