const pgp = require('pg-promise')()
require('dotenv').config()
let connectionString
if(process.env.NODE_ENV === 'development') {
  connectionString = process.env.DATABASE_URL
} else {
  connectionString = process.env.TEST_DATABASE_URL
}

const db = pgp(connectionString)

function add(listItem) {
  return db.one("INSERT INTO todolist(task, complete) VALUES( $1, $2) RETURNING task", [listItem, false])
  .then((task) => {
    return task;
  })
  .catch(e => console.error(e))
 }


function update(id, task) {
  return db.none("UPDATE todolist SET task = $2 where id = $1 RETURNING id,task;", [id, task])
  .then((listItem) => {
    return listItem
  })
  .catch(error => {
    console.log(error);
  })
}

function done(id) {
  db.one('DELETE FROM toDoList WHERE id = $1', [id])
  .then(() => {
    console.log('Completed the task ')
  })
  .catch(error => {
    console.log(error);
  })
}

function list() {
  return db.any("SELECT * FROM toDoList")
  .then(list => list)
  .catch(error => {
    console.log(error)
  })
}

function clearDatabase() {
  return db.any("DELETE FROM todolist").then(console.log('test database was cleared'))
}

function seedData() {
  return db.any("INSERT INTO toDoList VALUES(default, 'buy milk', FALSE ) RETURNING task")
  .then((insertedTask) => insertedTask.forEach(function(task) {
    console.log(task);
  }))
}

module.exports = {
  add,
  update,
  done,
  list,
  clearDatabase,
  seedData
}
