function debounce(cb, delay = 1000) {
  let timeout;
  
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}

const handleInputChange = (a) => {
  console.log(a);
};

const debounceData = debounce(handleInputChange, 1000);

setTimeout(() => {
  debounceData('first call');
}, 200);

setTimeout(() => {
  debounceData('second call');
}, 900);

setTimeout(() => {
  debounceData('third call');
}, 1100);
