const generateArray = (howMany: number): Array<number> => {
  const arr = [];

  for (let i = 0; i < howMany; i++) {
    arr.push(Math.floor(Math.random() * 1100) + 100);
  }
  return arr;
};

export default generateArray;
