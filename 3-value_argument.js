const sweet = "Candy";

if (process.argv[2] === undefined) {
  // no argument passed
  console.log("No argument");
} else {
  // argument exists
  console.log(process.argv[2]);
}
