const fs = require('fs');

// Create file
fs.writeFile('sample.txt', 'Hello World\n', (err) => {
    if (err) throw err;
    console.log("File created");

    // Append data
    fs.appendFile('sample.txt', 'Appended Text\n', (err) => {
        if (err) throw err;
        console.log("Data appended");

        // Read file
        fs.readFile('sample.txt', 'utf8', (err, data) => {
            if (err) throw err;
            console.log("File content:\n" + data);

            // Delete file
            fs.unlink('sample.txt', (err) => {
                if (err) throw err;
                console.log("File deleted");
            });
        });
    });
});