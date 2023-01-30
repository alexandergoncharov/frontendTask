import HttpRequest from "./httpRequests";

export const getAboutInfo = async (): Promise<string> => {
  const result = await HttpRequest.getInfo();

  return result;
};
