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
