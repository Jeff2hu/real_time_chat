import { usePostLogin } from "@Api/auth/hook";
import InputField from "@Component/InputField";
import { stringSchema } from "@Utils/schema";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { ApiResponse } from "type/apiResponse";
import { LoginRequest, LoginResponse } from "type/auth";
import * as Yup from "yup";
import { useAuth } from "zustand/token";

const initialValues = {
  userName: "",
  password: "",
};

const validationSchema = Yup.object({
  userName: stringSchema("UserName is Required"),
  password: stringSchema("Password is Required").min(6),
});

const fields = [
  { name: "userName", label: "UserName" },
  {
    name: "password",
    label: "Password",
    type: "password",
  },
];

const Login = () => {
  const navigate = useNavigate();
  const { saveId } = useAuth();
  const { mutate } = usePostLogin(sucessCb);

  function sucessCb(res: ApiResponse<LoginResponse>) {
    navigate("/");
    saveId(res.data._id);
  }

  const onSubmit = (values: LoginRequest) => {
    mutate(values);
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
          Login
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
          <Link
            to="/signUp"
            className="text-sm mt-2 inline-block hover:text-blue-500 hover:underline"
          >
            Don't have an account?
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

export default Login;
