let str = "Hello123";
let regex = /\d/; // \d means any digit
console.log(regex.test(str)); // Output: true

 // Calculator using switch-case in JavaScript
 function calculator(num1, num2, operator) {
  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    default:
      return "Invalid operator! Please use +, -, *, /, or %.";
  }

  return `The result of ${num1} ${operator} ${num2} is: ${result}`;
}

// Example usage


let output = calculator(number1, number2, operator);
console.log(output);