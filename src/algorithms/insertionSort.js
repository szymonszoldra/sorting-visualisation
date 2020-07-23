import sleep from '../functions/sleep';

const insertionSort = async (howMany, arr, setArr) => {

  for (let i = 0; i < howMany; i++) {
    const newArr = arr;

    const delay = parseInt(document.querySelector('#speed').value);
    await sleep(delay);

    const currentBars = [...document.querySelectorAll('.singleBar')];
    currentBars.forEach(
      (bar) => (bar.style.backgroundColor = 'royalblue')
    );

    currentBars[i].style.backgroundColor = 'yellow';

    if (newArr[i] < newArr[0]) {

      newArr.unshift(newArr.splice(i, 1)[0]);

    } else {
      for (let j = 1; j < i; j++) {
        const delay = parseInt(document.querySelector('#speed').value);
        await sleep(delay);

        if (newArr[i] > newArr[j - 1] && newArr[i] <= newArr[j]) {

          newArr.splice(j, 0, newArr.splice(i, 1)[0]);
        }
      }
    }
    setArr([...newArr]);
  }

  const currentBars = [...document.querySelectorAll('.singleBar')];
  currentBars.forEach(
    (bar) => (bar.style.backgroundColor = 'royalblue')
  );
}

export default insertionSort;