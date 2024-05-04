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

export type AuthResponseKey =
  | "_id"
  | "fullName"
  | "userName"
  | "profilePic"
  | "jwt";

export type AuthResponse = Record<AuthResponseKey, string>;
