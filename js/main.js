let count = 0;
const addition = document.getElementById('addition');
const subtraction = document.getElementById('subtraction');
let total = document.getElementById('total').innerHTML;

const add = () => {
  if(count >= 0 || count <= 0) {
    count++;
    console.log(count);
  }
};

const subtract = () => {
  if(count >= 0 || count <= 0) {
    count--;
    console.log(count);
  }
};

addition.addEventListener("click", add);
subtraction.addEventListener("click", subtract);

total = count;
