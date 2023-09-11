#!/usr/bin/env node

"use strict";

import boxen from 'boxen';
import chalk from 'chalk';
import inquirer from 'inquirer';
import open from 'open';

const prompt = inquirer.createPromptModule();

// Card Data 
const data = {
    intro: chalk.dim("Hello World !!!"),
    name: chalk.bold.green("Anas Qazi"),
    profession: chalk.white("Software Developer"),
    web: chalk.gray("https://") + chalk.magenta("ianasqazi") + chalk.gray(".ca"),
    github: chalk.gray("https://github.com/") + chalk.red("ianasqazi"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("anasqazi"),
    npx: chalk.green("npx") + " " + chalk.white("ianasqazi"),
};

const dataLabels = {
    profession: chalk.white.bold(" Profession:"),  
    web: chalk.magenta.bold("        Web:"),
    github: chalk.redBright.bold("     GitHub:"),
    linkedin: chalk.hex("#0072b1").bold("   LinkedIn:"),
    card: chalk.white.bold("       Card:")
};

// Card Section 
const me = boxen(
    [
        ``,
        `${data.intro}`,
        ``,
        `My name is ${data.name}`,
        ``,
        `I am a Full Stack ${data.profession}.`, // Profession 
        ``,
        `${dataLabels.web}  ${data.web}`,
        `${dataLabels.github}  ${data.github}`, // Github
        `${dataLabels.linkedin}  ${data.linkedin}`, // LinkedIn
        ``,
        ``,
        `${dataLabels.card}  ${data.npx}`,
        ``,
        ``,
        `${chalk.italic("One man’s constant is another man’s variable.")}`,
        `${chalk.italic("- Alan J. Perlis")}`
    ].join("\n"),
    {
        title: "Get in Touch with ME",
        margin: 1,
        float: 'center',
        titleAlignment: "center",
        borderStyle: "double",
        borderColor: "#ffb626",
        padding: 1,
    }
);

console.log(me);

// TIP Section 
const tip = [
    `Tip: Try ${chalk.redBright.bold(
        "cmd/ctrl + click"
    )} on the links above`,
    '',
].join("\n");

console.log(tip);

// Question 
const questions = [
    {
        type: "list",
        name: "action",
        message: "What you want to do?",
        choices: [
            {
                name: `Send me an ${chalk.green.bold("email")}?`,
                value: () => {
                    open("mailto:ianasqazi@gmail.com");
                    console.log("\nDone, I will revert back to you soon. Thank you\n");
                }
            },
            {
                name: "Just quit.",
                value: () => {
                    console.log("Okay, bye. Thank you :)\n");
                }
            }
        ]
    }
];

// Ask Question in the End
prompt(questions).then(answer => answer.action());