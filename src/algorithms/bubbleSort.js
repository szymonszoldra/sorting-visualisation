import setColor from '../functions/setColor';
import sleep from '../functions/sleep';

const bubbleSort = async (howMany, arr, setArr) => {
  let counter = 1;
  for (let i = 0; i < howMany; i++) {
    counter = 0;
    for (let j = 0; j < howMany - 1 - i; j++) {
      const newArr = arr;

      const delay = parseInt(document.querySelector('#speed').value);
      await sleep(delay);

      const currentBars = [...document.querySelectorAll('.singleBar')];
      currentBars.forEach(
        (bar) => (bar.style.backgroundColor = 'royalblue')
      );

      setColor(currentBars[j], currentBars[j + 1], 'yellow');

      await sleep(delay);

      if (newArr[j] > newArr[j + 1]) {
        setColor(currentBars[j], currentBars[j + 1], 'green');
        await sleep(delay);

        const temp = newArr[j];
        newArr[j] = newArr[j + 1];
        newArr[j + 1] = temp;
        counter++;
      } else {
        setColor(currentBars[j], currentBars[j + 1], 'red');
      }
      console.log(counter);
      setArr([...newArr]);
    }
    if (!counter) {
      break;
    }
  }
  const currentBars = [...document.querySelectorAll('.singleBar')];
  currentBars.forEach((bar) => (bar.style.backgroundColor = 'royalblue'));
};

export default bubbleSort