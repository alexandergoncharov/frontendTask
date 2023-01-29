import axios from "axios";

const BASE_PATH = process.env.BASE_PATH || "http://localhost:8000";

export default class HttpRequest {
  static async getInfo() {
    const response = await axios.get(BASE_PATH + "/info");

    return response.data.data.info;
  }
}
