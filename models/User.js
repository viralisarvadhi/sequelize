const { DataTypes } = require("sequelize")//datatype that we are using for entity declaration

const sequelize = require("../db"); //getting the value of the postgres connection 

const User = sequelize.define("User", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastname: {
        type: DataTypes.STRING,
        //allowNull: false,
    },
}
);
console.log(User === sequelize.models.User); // true
module.exports = User;

