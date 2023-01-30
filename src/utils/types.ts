export interface LoginParams {
  email: string;
  password: string;
}

export interface TokenParams {
  token: string;
}

export interface QuoteParams extends TokenParams {
  authorId: number;
}

export interface AuthorResponse {
  authorId: number;
  name: string;
}

export interface QuoteResponse {
  authorId: number;
  quoteId: number;
  quote: string;
}

export interface ProfileResponse {
  fullname: string;
  email: string;
}

export interface HttpResponse<T> {
  status: number;
  data: T;
}
export interface HttResponseData<T> {
  success: boolean;
  data: T;
}

export interface PromiseCancelable<T> extends Promise<T> {
  cancel: () => void;
}
