const updateCompares = (comparesRef) => {
  const compares = Number(comparesRef.current.textContent);
  document.querySelector('.compares').textContent = compares + 1;
};

export default updateCompares;
