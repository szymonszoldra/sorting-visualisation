import setColor from '../functions/setColor';
import sleep from '../functions/sleep';
import setAllToBlue from '../functions/setAllToBlue';
import reload from '../functions/reload';


const bubbleSort = async (howMany, arr, setArr) => {
  let counter = 1;
  for (let i = 0; i < howMany; i++) {
    counter = 0;
    for (let j = 0; j < howMany - 1 - i; j++) {
      const newArr = arr;

      const delay = parseInt(document.querySelector('#speed').value);
      await sleep(delay);

      const currentBars = [...document.querySelectorAll('.singleBar')];
      setAllToBlue();

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
      setArr([...newArr]);
    }
    if (!counter) {
      break;
    }
  }
  setAllToBlue();
  reload();
};

export default bubbleSort