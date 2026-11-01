const numbers =;

const sumOfEvens = numbers
  .filter(num => num % 2 === 0)
  .reduce((acc, curr) => acc + curr, 0);

console.log("Tổng các số chẵn là:", sumOfEvens); // Kết quả: 30
