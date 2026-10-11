const app = require("./app");

const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.API_PORT || 3001;

app.listen(PORT, () =>{
    console.log(`Servidor rodando em http://localhost:${PORT}`)
});