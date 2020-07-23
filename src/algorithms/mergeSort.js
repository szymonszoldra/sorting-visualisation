const mergeSortContainer = (arr, setArr) => {
  const newArr = arr;

  const merge = (left, right) => {
    const result = [];

    while (left.length && right.length) {
      if (left[0] < right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
    return result.concat([...left]).concat([...right]);
  }

  const mergeSort = (newArr) => {
    if (newArr.length <= 1) {
      return newArr
    }
    const length = newArr.length;
    const middle = Math.floor(length / 2);
    const left = newArr.slice(0, middle);
    const right = newArr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
  }

  setArr(mergeSort(newArr));
}

export default mergeSortContainer;