export const getFormatNameById = (formats, formatId) => {
  const format = formats.find((format) => format.id === formatId);
  return format ? format.name : "";
};
