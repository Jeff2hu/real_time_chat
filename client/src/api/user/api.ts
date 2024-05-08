import AXIOS from "@Utils/axios";
import { AxiosResponse } from "axios";
import { ApiResponse } from "type/apiResponse";
import { User } from "type/user";
import UserProtocol from "./protocol";

export const getUser = async () => {
  try {
    const res: AxiosResponse<ApiResponse<User[]>> = await AXIOS.get(
      UserProtocol.basic
    );
    return res.data.data;
  } catch (err) {
    throw new Error("getUser");
  }
};
