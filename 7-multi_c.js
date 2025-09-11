// const x = parseInt(process.argv[2]);

// if (isNaN(x)){
//     console.log("Missing number of occurences");
// }
// else{
//     for(let i = 0; i < x; i++) console.log("C is fun");
// }


const x = parseInt(process.argv[2]);

if (isNaN(x) || x <= 0) {
  console.log("Missing number of occurrences");
} else {
  const lines = "C is fun\n".repeat(x).trim().split('\n');
  for (const line of lines) console.log(line);
}