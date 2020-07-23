import setColor from '../functions/setColor';
import sleep from '../functions/sleep';
import setAllToBlue from '../functions/setAllToBlue';
import reload from '../functions/reload';

const coctailSort = async (howMany, arr, setArr) => {
  let bottom = 0;
  let top = howMany - 1;
  let hasChanged = true;

  while (hasChanged) {
    const delay = parseInt(document.querySelector('#speed').value);
    await sleep(delay);

    let newArr = arr;
    hasChanged = false;

    for (let i = bottom; i < top; i++) {

      const currentBars = [...document.querySelectorAll('.singleBar')];
      setAllToBlue();

      setColor(currentBars[i], currentBars[i + 1], 'yellow');
      const delay = parseInt(document.querySelector('#speed').value);
      await sleep(delay);

      if (newArr[i] > newArr[i + 1]) {
        setColor(currentBars[i], currentBars[i + 1], 'green');
        const delay = parseInt(document.querySelector('#speed').value);
        await sleep(delay);
        const temp = newArr[i];
        newArr[i] = newArr[i + 1];
        newArr[i + 1] = temp;
        hasChanged = true;

      } else {
        setColor(currentBars[i], currentBars[i + 1], 'red');
        const delay = parseInt(document.querySelector('#speed').value);
        await sleep(delay);
      }
      setArr([...newArr]);
      await sleep(delay);
    }
    newArr = arr;
    top--;
    for (let i = top; i > bottom; i--) {
      const currentBars = [...document.querySelectorAll('.singleBar')];
      setAllToBlue();

      setColor(currentBars[i], currentBars[i - 1], 'yellow');
      const delay = parseInt(document.querySelector('#speed').value);
      await sleep(delay);


      if (newArr[i] < newArr[i - 1]) {

        setColor(currentBars[i], currentBars[i - 1], 'green');
        const delay = parseInt(document.querySelector('#speed').value);
        await sleep(delay);
        const temp = newArr[i];
        newArr[i] = newArr[i - 1];
        newArr[i - 1] = temp;
        hasChanged = true;

      } else {
        setColor(currentBars[i], currentBars[i - 1], 'red');
        const delay = parseInt(document.querySelector('#speed').value);
        await sleep(delay);
      }
      setArr([...newArr]);
      await sleep(delay);
    }
    newArr = arr;
    bottom++;
  }
  setAllToBlue();
  reload();
}

export default coctailSort;