// A good practice is to list core modules then third party followed by required files.
const chalk = require("chalk");
const yargs = require("yargs");
const getNotes = require("./notes.js");

// Customize yargs version
yargs.version("1.1.0");

// Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  handler: function() {
    console.log("Adding a new note");
  }
});

// Creates remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: function() {
    console.log("Removing a note");
  }
});

// Create list command
yargs.command({
  command: "list",
  describe: "List all notes",
  handler: function() {
    console.log("Listing all notes");
  }
});



console.log(yargs.argv);