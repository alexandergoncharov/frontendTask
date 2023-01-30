import {
  AuthorResponse,
  HttpResponse,
  PromiseCancelable,
  QuoteResponse,
} from "../utils/types";
import HttpRequest from "./httpRequests";

export const getAuthor = (
  token: string
): PromiseCancelable<HttpResponse<AuthorResponse>> => {
  return HttpRequest.getAuthor<AuthorResponse>(token);
};

export const getQuote = (
  token: string,
  authorPromise: Promise<HttpResponse<AuthorResponse>>
): PromiseCancelable<HttpResponse<QuoteResponse>> => {
  return HttpRequest.getQuote(token, authorPromise);
};
