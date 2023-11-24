const fs = require("fs");
const path = require("path");

fs.readFile("./files/start.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
});

fs.writeFile(
    path.join(__dirname, "files", "reply.txt"),
    "Hello, My name is Muhammad Kurniawan",
    (err) => {
        if (err) throw err;
        console.log("Write Completed.");

        fs.appendFile(
            path.join(__dirname, "files", "reply.txt"),
            "\n\nHalo juga, nama saya juragan kumbang",
            (err) => {
                if (err) throw err;
                console.log("Append Completed.");

                fs.rename(
                    path.join(__dirname, "files", "reply.txt"),
                    path.join(__dirname, "files", "newReply.txt"),
                    (err) => {
                        if (err) throw err;
                        console.log("Rename Completed.");
                    }
                );
            }
        );
    }
);

process.on("uncaughtException", (err) => {
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
});
