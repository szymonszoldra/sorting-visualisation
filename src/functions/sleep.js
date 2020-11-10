//something like sleep() function in other languages
const sleep = async ({current}) => {
  const delay = parseInt(current.value);
  return await new Promise((resolve) => setTimeout(resolve, delay));
};

export default sleep;