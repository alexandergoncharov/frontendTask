import axios from "axios";
import { LoginParams } from "../utils/types";

const BASE_PATH = process.env.BASE_PATH || "http://localhost:8000";

export default class HttpRequest {
  static async getInfo() {
    const response = await axios.get(BASE_PATH + "/info");

    return response.data.data.info;
  }

  static async loginUser(loginParams: LoginParams) {
    return await axios.post(BASE_PATH + "/login", loginParams);
  }
}
