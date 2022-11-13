const add = function(x,y) {
return x+y;
}

const subtract = function(x,y) {
return x-y
	
};

const sum = function (array) {
  let sum = 0;
  array.forEach(element => {
    sum += element;
  });
  return sum;
}

const multiply = function(array) {
  let sum = 1;
  array.forEach(element => {
    sum *= element;
  });
  return sum;
};

const power = function(x,y) {
  let result = 1;
for (let index = 0; index < y; index++) {
  result *= x
}
return result;
};

const factorial = function(n) {
	if(n == 0 || n == 1){
    return 1;
}
return n * factorial(n-1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};



