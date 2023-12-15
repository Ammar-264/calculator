import inquirer from "inquirer";

function calculatorOutput(num1: number, num2: number, operation: string) {
  if (operation === "add") {
    return   `${num1} + ${num2} = ${num1 + num2} `;

  } else if (operation === "sub") {
    return `${num1} - ${num2} = ${num1 - num2} `;

  } else if (operation === "mul") {
    return `${num1} x ${num2} = ${num1 * num2} `;

  } else if (operation === "div") {
    return `${num1} / ${num2} = ${num1 / num2} `;

  }
}

let runCalculator = 1 

for (let i=0+runCalculator ; i<=runCalculator; i++){
    let calculationInputs = await inquirer.prompt([
        {
          type: "number",
          name: "firstNumber",
          message: "Enter First Number :",
        },
        {
          type: "number",
          name: "secondNumber",
          message: "Enter Second Number :",
        },
      
        {
          type: "list",
          name: "operation",
          message: "Which operation do you want to perform ?",
          choices: [
            { name: "Addition (+)", value: "add" },
            { name: "Subtraction (-)", value: "sub" },
            { name: "Multiplication (x)", value: "mul" },
            { name: "Division (/)", value: "div" },
          ],
        },
      ]);
      
      
      let output = calculatorOutput(calculationInputs.firstNumber , calculationInputs.secondNumber , calculationInputs.operation)
      
      console.log(output);

      let useClculatorAgain = await inquirer.prompt({
        type:'input',
        name:'againOperation',
        message:'Do you want to perform another calculation ? (yes/no)'
      })

      if(useClculatorAgain.againOperation.toLowerCase() === 'yes' || useClculatorAgain.againOperation.toLowerCase() === 'y'){
        runCalculator++
      }

}


