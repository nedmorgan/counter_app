let count = 0;
const addition = document.getElementById('addition');
const subtraction = document.getElementById('subtraction');

const add = () => {
  if(count >= 0 || count <= 0) {
    count++;
    console.log(count);
    document.querySelector('p').innerHTML = count;
  }
};

const subtract = () => {
  if(count >= 0 || count <= 0) {
    count--;
    console.log(count);
    document.querySelector('p').innerHTML = count;
  }
};

addition.addEventListener("click", add);
subtraction.addEventListener("click", subtract);
