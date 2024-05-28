export default class MessageProtocol {
  public static readonly message = "/message";

  public static send(id: string) {
    return `${this.message}/send/${id}`;
  }
}
