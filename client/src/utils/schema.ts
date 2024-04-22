import * as Yup from "yup";

export function stringSchema(text = "Required") {
  return Yup.string().required(text);
}
