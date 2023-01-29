import axios from "axios";
import { LoginParams, TokenParams } from "../utils/types";

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
}
