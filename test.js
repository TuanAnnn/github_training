const numbers =;

const sumOfEvens = numbers
  .filter(num => num % 2 === 0)
  .reduce((acc, curr) => acc + curr, 0);

const subtractAll = numbers.reduce((acc, curr) => acc - curr);

console.log("Tổng các số chẵn là:", sumOfEvens); // Kết quả: 30
console.log("Hiệu của các số là:", subtractAll); // Kết quả: -19 (10 - 3 - 5 - 8 - 2 - 7 - 4)
