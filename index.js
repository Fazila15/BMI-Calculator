#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
console.log(chalk.bgCyan('BMI Calculator'));
const choose = await inquirer.prompt([
    {
        type: "list",
        message: "Select your unit system",
        name: "unit",
        choices: ["In Inches/Pound", "In Meters/Kilogram"],
    },
]);
if (choose.unit === "In Inches/Pound") {
    const imperial = await inquirer.prompt([
        {
            type: "number",
            message: chalk.cyan.italic `Enter your height in Inches`,
            name: "height",
        },
        {
            type: "number",
            message: chalk.cyan.italic `Enter your weight in pounds`,
            name: "weight",
        },
    ]);
    const BMI = (imperial.weight / (imperial.height * imperial.height)).toFixed(2);
    const rainbow = chalkAnimation.rainbow(`Result: ${BMI}`);
    setTimeout(() => {
        rainbow.stop();
    }, 1000);
    setTimeout(() => {
        rainbow.start();
    }, 2000);
    ;
}
else {
    const metric = await inquirer.prompt([
        {
            type: "number",
            message: "Enter your height in meters",
            name: "height",
        },
        {
            type: "number",
            message: "Enter your weight in kilograms",
            name: "weight",
        },
    ]);
    const bmi_metric = (metric.weight / (metric.height * metric.height)).toFixed(2);
    const rainbow = chalkAnimation.rainbow(`Result: ${bmi_metric}`);
    setTimeout(() => {
        rainbow.stop();
    }, 1000);
    setTimeout(() => {
        rainbow.start();
    }, 2000);
    ;
}
;
