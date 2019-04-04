// Importing MySQL connection.
const connection = require("../config/connection.js");

const orm = {
    // Display all the burgers on the page
    selectAll: function (tableInput, callback) {
        const queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            callback(result);
        });
    }
};

// orm.selectAll("burgers", data => {
//     console.log(data);
// });

// Exports the orm for the model
module.exports = orm;