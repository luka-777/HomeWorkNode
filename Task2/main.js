
//   Task 2

const fs = require("fs/promises");

async function main() {
  try {
    const random = await fs.readFile("random.txt", "utf-8");
    const wordCount = random.split(' ').length;
    await fs.writeFile('result.txt', wordCount.toString(),  "utf-8");
    
  } catch (error) {
    console.log(error);
  }
}

main();



