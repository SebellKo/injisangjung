const convertOrderNum = (order: number) => {
  if (order < 10) return `00${order}`;
  if (order < 100 && order >= 10) return `0${order}`;
  return order;
};

export default convertOrderNum;
