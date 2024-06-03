export class NotFound extends Error {

  public statusCode: number;

  public title: string;

  constructor(msg: string) {
    super(msg);
    this.statusCode = 404;
    this.title = 'Not Found!';
  }
}
