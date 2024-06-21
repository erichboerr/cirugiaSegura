const connection = require("./src/database/connection"); 
const app = require("./src/app");

connection.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        
        console.log("Base de datos conectada");
    }
});
connection.end();  
