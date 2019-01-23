const fs = require('fs');
const path = require("path");

class Test {
    constructor(databasePath = '../resources/shopping.json') {
        this.databasePath = databasePath;
    }
    jsonValidator() {
        var data = JSON.parse(fs.readFileSync(path.resolve(__dirname, this.databasePath)));
        if(data.card == undefined) {
            return []
        }
    }
}

module.exports = Test;