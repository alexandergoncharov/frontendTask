import { LoginParams } from "../utils/types";
import HttpRequest from "./httpRequests";

export const getLoginToken = async (loginParams: LoginParams) => {
  const response = await HttpRequest.loginUser(loginParams);

  return response.data.data.token;
};
