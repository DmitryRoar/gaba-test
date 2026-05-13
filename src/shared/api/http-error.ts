export class HttpError extends Error {
  readonly status: number;
  readonly url: string;
  readonly body: unknown;

  constructor(message: string, init: { status: number; url: string; body?: unknown }) {
    super(message);
    this.name = 'HttpError';
    this.status = init.status;
    this.url = init.url;
    this.body = init.body;
  }

  get isClientError(): boolean {
    return this.status >= 400 && this.status < 500;
  }

  get isServerError(): boolean {
    return this.status >= 500;
  }
}
