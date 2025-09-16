#!/usr/bin/env node

"use strict";

import boxen from "boxen";
import chalk from "chalk";
import inquirer from "inquirer";
import open from "open";
import ora from "ora";
import clipboardy from "clipboardy";

const prompt = inquirer.createPromptModule();

// Random Quotes
const quotes = [
  "Keep it simple. – Albert Einstein",
  "Code is like humor. When you have to explain it, it’s bad. – Cory House",
  "Talk is cheap. Show me the code. – Linus Torvalds",
  "One man’s constant is another man’s variable. – Alan J. Perlis",
];

// Avatar
const avatar = chalk.cyan(`
     (•_•)
     <)   )╯
     /   \\
`);

// Card Data 
const data = {
  intro: chalk.dim("Hello World !!!"),
  name: chalk.bold.green("Anas Qazi"),
  profession: chalk.white("Software Engineer"),
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

// Copy NPX command to clipboard
clipboardy.writeSync("npx ianasqazi");

// Card Section 

// Random colors for quotes
const quote = quotes[Math.floor(Math.random() * quotes.length)];
const colors = [chalk.cyan, chalk.magenta, chalk.greenBright, chalk.yellow];
const colorize = colors[Math.floor(Math.random() * colors.length)];

const me = boxen(
  [
    // avatar, // optional ASCII art or emoji avatar
    ``,
    `${chalk.bgMagenta.black("INTRO ")} ${data.intro}`,
    ``,
    `  My name is ${chalk.bold.green(data.name)}`,
    ``,
    `  I am a Full Stack ${chalk.bold.blue(data.profession)}`,
    ``,
    `${dataLabels.web}     ${data.web}`,
    `${dataLabels.github}  ${data.github}`,
    `${dataLabels.linkedin} ${data.linkedin}`,
    ``,
    ``,
    `${dataLabels.card}  ${data.npx} ${chalk.dim("(Copied to clipboard)")}`,
    ``,
    ``,
    colorize.italic(`"${quote}"`)
  ].join("\n"),
  {
    title: chalk.bold.green("Get in Touch with ME"),
    margin: 1,
    float: 'center',
    titleAlignment: "center",
    borderStyle: "double",
    borderColor: "red",
    padding: 1,
  }
);

console.log(me);

// Question 
const questions = [
  {
    type: "list",
    name: "action",
    message: "What do you want to do?",
    choices: [
      {
        name: `Send me an ${chalk.green.bold("email")}?`,
        value: async () => {
          const spinner = ora("Opening email...").start();
          await open("mailto:ianasqazi@gmail.com");
          spinner.succeed("Email client opened!");
        }
      },
      {
        name: `Check my ${chalk.redBright.bold("GitHub")}`,
        value: async () => {
          const spinner = ora("Opening GitHub...").start();
          await open("https://github.com/ianasqazi");
          spinner.succeed("GitHub opened!");
        }
      },
      {
        name: `Check my ${chalk.blue.bold("LinkedIn")}`,
        value: async () => {
          const spinner = ora("Opening LinkedIn...").start();
          await open("https://linkedin.com/in/anasqazi");
          spinner.succeed("LinkedIn opened!");
        }
      },
      {
        name: "Quit",
        value: () => console.log("\nOkay, bye. Thank you :)\n")
      }
    ]
  }
];

// Ask Question in the End
prompt(questions).then(answer => answer.action());
