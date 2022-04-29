var numbers = [1, 2, 3, 4, 5];

var total = numbers.reduce(function (total, next) {
  return total + next;
});
console.log(total);
