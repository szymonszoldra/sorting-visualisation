//something like sleep() function in other languages
const sleep = async (delay) => {
  return await new Promise((resolve) => setTimeout(resolve, delay));
};

export default sleep;