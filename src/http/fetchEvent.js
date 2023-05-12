import { $host } from "./index";

export const fetchEvent = async (id) => {
  const data = await $host.get(`/api/event/${id}`);
  return data;
};
