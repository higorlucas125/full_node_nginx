const express = require('express')
const mysql = require('mysql')
const startDb  = require('./database.js');
const app = express();
const port = 3000;

app.use(express.json());
app.get("/",(req,res) => {
    res.send("<h1>Full Cycle Rocks!</h1>")
});

app.get("/list",(req,res) => {
    startDb.createAndInsertMysql(mysql);
    const query = `SELECT * FROM people`
    startDb.connectNew(query,res,mysql);
});

app.listen(port,() =>{
    console.log(`Serviço está sendo executado com sucesso na porta ${port}`)
});