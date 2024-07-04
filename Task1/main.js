const fs = require("fs/promises");

const fan = async () => {
  try {
    const resultFetch = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    const res = await resultFetch.json();
    const Array = [];
    res.forEach((item) => {
      const object = {
        id: item.id,
        username: item.username,
        name: item.name,
        email: item.email,
      };
      Array.push(object);
    });
    await fs.writeFile("users.json", JSON.stringify(Array));
  } catch (error) {
    console.log(error);
  }
};

fan();
