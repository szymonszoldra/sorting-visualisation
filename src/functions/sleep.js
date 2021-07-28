// something like sleep() function in other languages
const sleep = async ({ current }) => {
  const delay = Number(current.value);
  return new Promise((resolve) => setTimeout(resolve, delay));
};

export default sleep;
