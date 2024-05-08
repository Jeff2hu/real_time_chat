import { useQuery } from "@tanstack/react-query";
import { getUser } from "./api";
import UserProtocol from "./protocol";

export const useGetUser = () => {
  return useQuery({
    queryKey: [UserProtocol.basic],
    queryFn: getUser,
  });
};
