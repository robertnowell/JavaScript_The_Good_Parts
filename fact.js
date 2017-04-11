function factorialize(num) {
  var res = 1;
  for (var i = 1; i <= num; i++) {
  	res *= i;
  }
  return res;
}

console.log(factorialize(5));