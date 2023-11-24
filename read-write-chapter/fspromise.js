const fsPromises = require("fs").promises;
const path = require("path");

const fileOps = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, "files", "start.txt"), "utf8");
        console.log(data);
        await fsPromises.writeFile(path.join(__dirname, "files", "promiseWrite.txt"), data);
        await fsPromises.appendFile(path.join(__dirname, "files", "promiseWrite.txt"), "\n\nSegala yang pernah berakhir.");
        await fsPromises.rename(path.join(__dirname, "files", "promiseWrite.txt"), path.join(__dirname, "files", "promiseRename.txt"));
        const newData = await fsPromises.readFile(path.join(__dirname, "files", "promiseRename.txt"), "utf8");
        console.log(newData);
    } catch (error) {
        console.error(error);
    }
};

fileOps();
