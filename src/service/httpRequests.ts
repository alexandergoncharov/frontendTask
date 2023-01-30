import axios, { AxiosResponse } from "axios";
import {
  AuthorResponse,
  HttpResponse,
  HttResponseData,
  LoginParams,
  PromiseCancelable,
  QuoteParams,
  QuoteResponse,
  TokenParams,
} from "../utils/types";

const BASE_PATH = process.env.BASE_PATH || "http://localhost:8000";

export default class HttpRequest {
  static async getInfo() {
    const response = await axios.get(BASE_PATH + "/info");

    return response.data.data.info;
  }

  static async loginUser(loginParams: LoginParams) {
    return await axios.post(BASE_PATH + "/login", loginParams);
  }

  static async logoutUser(token: string) {
    const url: string = BASE_PATH + "/logout";
    const params: TokenParams = { token };
    const paramsUrl: string = axios.getUri({ url, params });

    await axios.delete(paramsUrl);
  }

  static async getProfileInfo(token: string) {
    const url: string = BASE_PATH + "/profile";
    const params: TokenParams = { token };
    const paramsUrl: string = axios.getUri({ url, params });

    return await axios.get(paramsUrl);
  }

  static getAuthor<Response>(
    token: string
  ): PromiseCancelable<HttpResponse<AuthorResponse>> {
    const controller = new AbortController();
    const url: string = BASE_PATH + "/author";
    const params: TokenParams = { token };
    const paramsUrl: string = axios.getUri({ url, params });

    const request = axios
      .get<Response, AxiosResponse<HttResponseData<Response>>>(paramsUrl, {
        signal: controller.signal,
      })
      .then((response) => {
        return response.data.data;
      }) as PromiseCancelable<HttpResponse<AuthorResponse>>;

    request.cancel = () => controller.abort();

    return request;
  }

  static getQuote(
    token: string,
    authorPromise: Promise<HttpResponse<AuthorResponse>>
  ): PromiseCancelable<HttpResponse<QuoteResponse>> {
    const controller = new AbortController();

    const request = authorPromise.then((authorResponse) => {
      if (authorResponse) {
        const { authorId } = authorResponse as unknown as AuthorResponse;
        const url: string = BASE_PATH + "/quote";
        const params: QuoteParams = { token, authorId };
        const paramsUrl: string = axios.getUri({ url, params });

        return axios
          .get<Response, AxiosResponse<HttResponseData<Response>>>(paramsUrl, {
            signal: controller.signal,
          })
          .then((quoteResponse) => {
            return quoteResponse.data.data;
          });
      }
    }) as PromiseCancelable<HttpResponse<QuoteResponse>>;

    request.cancel = () => controller.abort();

    return request;
  }
}
