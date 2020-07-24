const updateCompares = () => {
  const compares = parseInt(document.querySelector('.compares').textContent);
  document.querySelector('.compares').textContent = compares + 1;
}

export default updateCompares;