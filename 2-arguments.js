let number = 0;

for (let i = 2; i < process.argv.length; i++) {
  number++;
}

if (number === 0) {
  console.log("No argument");
} else if (number === 1) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}
