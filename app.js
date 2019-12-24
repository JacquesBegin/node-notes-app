const chalk = require("chalk");
const getNotes = require("./notes.js");

const command = process.argv[2];


switch(command) {
  case "add":
  console.log("Adding note...");
  break;

  case "remove":
  console.log("Removing note...");
  break;
}