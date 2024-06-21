const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

//cors
app.use(cors({ origin: "http://localhost:3000" }));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Credentials", true);
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
   res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

app.get("/", (_, res) => {res.send("Conexion exitosa")});
app.listen(5050, () => console.log("Servidor corriendo en http://localhost:5050"));