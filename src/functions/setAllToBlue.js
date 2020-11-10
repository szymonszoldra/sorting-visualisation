const setAllToBlue = (barsRef) => {
  const currentBars = [...barsRef.current.children];
  currentBars.forEach((bar) => (bar.style.backgroundColor = 'royalblue'));
}

export default setAllToBlue;