// all the utility functions grouped into one file
// file system module
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

// function that will write new data to json file
const writeToJsonFile = (filename, content) => {
  fs.writeFileSync(filename, JSON.stringify(content), "utf-8", (err) => {
    if (err) {
      console.log("Error: ", err);
    }
  });
  console.log(`changes saved to the file ${filename}.....`);
};

const getNewId = () => {
  return uuidv4();
};

module.exports = {
  writeToJsonFile,
  getNewId,
};
