import { $authHost } from "./index";

export const fetchUpdateEvent = async (id, params) => {
  const data = await $authHost.patch(`/api/event/${id}`, params);
  return data;
};
