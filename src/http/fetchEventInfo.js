import { $host } from "./index";

export const fetchEventInfo = async (id) => {
  const data = await $host.get(`/api/event/event-info/${id}`);
  return data;
};
