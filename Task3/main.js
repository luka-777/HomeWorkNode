const fs = require("fs/promises");

async function main() {
  try {
    const data = await fs.readFile("users.json", "utf-8");
    const users = JSON.parse(data);
    const userFilter = users.filter(user => user.age > 18);
    await fs.writeFile('result.json', JSON.stringify(userFilter), "utf-8");
  } catch (error) {
    console.log(error);
  }
}

main();