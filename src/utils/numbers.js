export const separateNumberThousands = (num) => {
  const number = Math.floor(num);
  const res = number
    ? number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
    : 0;
  return res;
};
