#!/usr/bin/env/Node



import inquirer, { Answers } from "inquirer";
import chalk from "chalk";
import { env } from "process";

const answer=await inquirer.prompt([
 {
    message:"select one of the operation to perform action",
    type:"list",
    name:"operation",
    choices:["Red","Yellow","Green",]
 },
]);
    if(answer.operation==="Red"){
        console.log("stop! The signal is red!!");
    }else if(answer.operation==="Yellow"){
console.log("start the vichle engine the signal is yellow!!");
    }else {
console.log("Go! the signal is green!! ");
};