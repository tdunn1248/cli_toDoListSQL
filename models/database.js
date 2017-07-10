const pgp = require('pg-promise')()
const connectionString = 'postgres://rover@localhost:5432/cliToDo'
const db = pgp(connectionString)

function add(listItem) {
  db.none("INSERT INTO todolist(task, complete) VALUES( $1, $2)", [listItem, false])
  .then(() => {
    console.log('Created task');
  })
  .catch(error => {
    console.log(error);
  })
 }

function update(id, task) {
  db.none("UPDATE todolist SET task = $2 where id = $1", [id, task])
  .then(() => {
    console.log('Updated task');
  })
  .catch(error => {
    console.log(error);
  })
}

function done(id) {
  db.one('DELETE FROM toDoList WHERE id = $1', [id])
  .then(() => {
    console.log('Completed the task ' )
  })
  .catch(error => {
    console.log(error);
  })
}

function list() {
  db.any("SELECT * FROM toDoList")
  .then((list) => {
    console.log('ID  ', 'Description')
    console.log('--  ',' -----------');
    list.forEach((item) => {
      if (item.complete == false)
      console.log(item.id, item.task)
    })
  })
  .catch(error => {
    console.log(error)
  })
}

module.exports = {
  add,
  update,
  done,
  list
}
