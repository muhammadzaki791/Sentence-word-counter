import inquirer from "inquirer";
import chalk from "chalk";
const ansewrOfuser = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: chalk.italic.bold.yellowBright("Enter Your sentence to conunt the number of words : ")
    }
]);
let numofwords = ansewrOfuser.Sentence.trim().split(" ");
// This will print a words of a sentence in a array.
// console.log(numofwords);
// This will print the number of words in a sentence.
console.log(chalk.italic.bold.bgBlack.yellow(`The number of words your sentence contain is: ${numofwords.length}.`));
