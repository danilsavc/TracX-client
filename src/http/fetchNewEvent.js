import { $authHost } from "./index";

export const fetchNewEvent = async (params) => {
  const data = await $authHost.post(`/api/event`, params);
  return data;
};
