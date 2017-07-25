const pgp = require('pg-promise')()
require('dotenv').config()
let connectionString

(process.env.NODE_ENV === 'development') ? connectionString = process.env.DATABASE_URL :
connectionString = process.env.TEST_DATABASE_URL

const db = pgp(connectionString)

function add(listItem) {
  return db.one("INSERT INTO todolist(task, complete) VALUES( $1, $2) RETURNING id,task", [listItem, false])
  .then((task) => {
    const addedTask = {
      id: task.id,
      task: task.task
    }
    return addedTask;
  })
  .catch(e => console.error(e))
 }

function update(id, task) {
  return db.any("UPDATE todolist SET task = $2 where id = $1 RETURNING id,task", [id, task])
  .then((listItem) => {
    const updatedTodo = {
      id : listItem[0].id,
      task: listItem[0].task
    }
    return updatedTodo
  })
  .catch(error => {
    console.log(error);
  })
}

function done(id) {
  return db.one('DELETE FROM toDoList WHERE id = $1 RETURNING id, task', [id])
  .then((deleted) => {
    const deletedTask = {
      id : deleted.id,
      task: deleted.task
    }
    return deletedTask
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

module.exports = {
  add,
  update,
  done,
  list,
  clearDatabase
}
