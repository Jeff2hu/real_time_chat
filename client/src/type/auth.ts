export type SignUpRequest = {
  fullName: string;
  userName: string;
  password: string;
  confirmPassword: string;
  gender: "male" | "female";
};

export type LoginRequest = {
  userName: string;
  password: string;
};

export type LoginResponse = Record<
  "_id" | "fullName" | "userName" | "profilePic",
  string
>;
