import { ProfileResponse } from "../utils/types";
import HttpRequest from "./httpRequests";

export const getProfileInfo = async (
  token: string
): Promise<ProfileResponse> => {
  const response = await HttpRequest.getProfileInfo(token);

  return response.data.data;
};
