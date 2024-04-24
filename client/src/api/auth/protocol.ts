export default class SignUpProtocol {
  public static readonly basic = "/auth";

  public static readonly signUp = `${this.basic}/signUp`;
  public static readonly login = `${this.basic}/login`;
  public static readonly logout = `${this.basic}/logout`;
}
