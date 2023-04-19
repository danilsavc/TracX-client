export const exchange = () => {
  return fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=EUR&json")
    .then((response) => response.json())
    .then((data) => data[0].rate);
};
