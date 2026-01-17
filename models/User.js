const { DataTypes } = require("sequelize")//datatype that we are using for entity declaration

const sequelize = require("../db"); //getting the value of the postgres connection 

const User = sequelize.define("User", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, // adding constarint
        validate: {
            isAlpha: true,  // validator that chceck name contain only letters a–z
            len: [3, 20],   // validator that check the lenth between 3 to 20


        },
    },

    lastname: {
        type: DataTypes.STRING,
        //allowNull: false,
    },
});
console.log(User === sequelize.models.User); // true
module.exports = User;

