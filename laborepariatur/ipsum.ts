useEffect(() => {
  const scaleElement = document.getElementById('scale');
  scaleElement.innerHTML = `Scale: ${scale.value} (${scale.min} - ${scale.max})`;
}, [scale]);
