const mongoose = require("mongoose");
(async function () {
 try {
     await mongoose.connect("mongodb://localhost:27017/cikatech");
     console.log("Database is connected!")
 } catch (error) {
     console.log("Database is not connected!")
 }
})()