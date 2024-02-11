const mysql = require("mysql2/promise")
const { faker } = require("@faker-js/faker")

const dbConfig = {
  host: 'db_mysql',
  user: 'root',
  password: "root",
  database: "nodedb"
}



async function createTable() {
  const dbConnection = await mysql.createConnection(dbConfig)

  var createPeopleTable = "CREATE TABLE IF NOT EXISTS people (name TEXT);";

  await dbConnection.query(createPeopleTable)

  await dbConnection.close()
}

async function insertPerson() {
  const dbConnection = await mysql.createConnection(dbConfig)

  var insertPerson = `INSERT INTO people (name) VALUES ('${faker.person.fullName()}');`;

  await dbConnection.query(insertPerson)

  await dbConnection.close()
}

async function selectPerson() {
  const dbConnection = await mysql.createConnection(dbConfig)

  var people = "SELECT * FROM people;";

  const result = await dbConnection.query(people)

  await dbConnection.close()

  return result
}

module.exports = { createTable, insertPerson, selectPerson }