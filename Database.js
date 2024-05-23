import * as fs from "fs/promises";

const Database = {
  init: async function () {
    const db = await fs.readFile("./db.json", "utf8");
    return JSON.parse(db);
  },
  save: async function (dbModified) {
    await fs.writeFile(
      "./db.json",
      JSON.stringify(dbModified, null, 2),
      "utf8"
    );
  },
};

export default Database;
