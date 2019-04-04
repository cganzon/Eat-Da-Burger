const orm = require("../config/orm.js");

const burger = {
    selectAll: function (callback) {
        orm.selectAll("burgers", (res) => {
            callback(res);
        });
    }
};

// burger.selectAll(data => console.log(data));

// Exports burger for the controller to use
module.exports = burger;