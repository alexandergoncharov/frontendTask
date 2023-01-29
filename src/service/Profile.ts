import HttpRequest from "./httpRequests";

export const getProfileInfo = async (token: string) => {
  const response = await HttpRequest.getProfileInfo(token);

  return response.data.data;
};
