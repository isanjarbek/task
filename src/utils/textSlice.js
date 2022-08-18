export const textSlice = (string, length) => {
  if (string.length > length) {
    let arrTmp = string.split("");
    let deleted = string.slice(length).length;
    arrTmp.splice(length, deleted);
    return arrTmp.join("") + "...";
  }
  return string;
};
