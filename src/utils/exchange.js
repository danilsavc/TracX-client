import axios from "axios";

export const exchange = async () => {
  const response = await axios.get(
    "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=EUR&json"
  );
  return response.data[0].rate;
};
