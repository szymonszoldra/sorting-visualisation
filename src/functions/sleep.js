//something like sleep() function in other languages
const sleep = async () => {
  const delay = parseInt(document.querySelector('#speed').value);
  return await new Promise((resolve) => setTimeout(resolve, delay));
};

export default sleep;