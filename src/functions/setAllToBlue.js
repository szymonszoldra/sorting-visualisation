const setAllToBlue = () => {
  const currentBars = [...document.querySelectorAll('.singleBar')];
  currentBars.forEach((bar) => (bar.style.backgroundColor = 'royalblue'));
}

export default setAllToBlue;