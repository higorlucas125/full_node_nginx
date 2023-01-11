
const config = {
    host:'db',
    user:'root',
    password:'root',
    database:'nodedb'
}

const crateTablePeople = (connection) => {
    const createDatabase = `create table IF NOT EXISTS people(
        id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(255),
        title VARCHAR(100),
        author VARCHAR(40),
        submission_date DATE,
        PRIMARY KEY ( id )
        )`;

        connection.query(createDatabase, (error, results, fields) => {
            if(error) return console.log(error);
            console.log('criou a tabela!');
        });
}

const insertPeople = (connection) => {
    const insertPeople = `INSERT INTO people(name) values('Higor Lucas')`

    connection.query(insertPeople, (error, results, fields) => {
        if(error) return console.log(error);
        console.log('insert realizado com sucesso!');
        connection.end();
    });
}

const createAndInsertMysql = (mysql) => {

    const connection = mysql.createConnection(config);
    crateTablePeople(connection);
    insertPeople(connection);
}

const connectNew = (sqlQry,res,mysql) =>{
    const connection = mysql.createConnection(config);
    connection.query(sqlQry, (error, results, fields) => {
        if(error) 
          res.json(error);
        else
          res.json(results);
        connection.end();
        console.log('executou!');
    });
}

module.exports = {createAndInsertMysql,connectNew};