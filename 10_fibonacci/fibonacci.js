const fibonacci = function(member) {
    if (member < 1) return "OOPS";
    let numMember = Number(member);

    let fib = [];
    let lastNum = 1;
    let secondLastNum = 0;
for (let i = 1; i <= numMember; i++) {
   if (i > 2){
   lastNum = fib[i-2];
   secondLastNum = fib[i-3];
   }
 fib.push(lastNum+secondLastNum);
}
return fib[member-1];
};

// Do not edit below this line
module.exports = fibonacci;
