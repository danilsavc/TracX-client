export const exchange = async () => {
  return await fetch(
    "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=EUR&json"
  )
    .then((response) => response.json())
    .then((data) => data[0].rate);
};
