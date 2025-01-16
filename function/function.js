export const sp = (number) => {
  const seperatedNumber = number
    ?.toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return seperatedNumber;
};
