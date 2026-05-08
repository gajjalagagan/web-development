

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

  return `The result of ${num1} ${operator} ${num2} = ${result}`;
}

// Example usage


let output = calculator(num1, num2, operator);
console.log(output);