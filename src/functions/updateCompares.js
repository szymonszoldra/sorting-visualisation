const updateCompares = (comparesRef) => {
  const compares = parseInt(comparesRef.current.textContent);
  document.querySelector('.compares').textContent = compares + 1;
}

export default updateCompares;