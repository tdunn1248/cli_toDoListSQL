const queries = require('./models/database')
const {formatList} = require('./public/main.js')

const userInput = (firstArg, secondArg, thirdArg) => {
  switch (firstArg) {
    case 'add' :
      queries.add(secondArg)
        .then(console.log('Created a task'))
      break
    case 'update' :
      queries.update(secondArg, thirdArg)
        .then((updatedTodo) => {
          console.log('Updated task ', updatedTodo.id)
        })
      break
    case 'done' :
      queries.done(secondArg)
        .then(deleted => console.log('Completed the task', deleted.task))
      break
    case 'list' :
      queries.list()
        .then(list => formatList(list))
        .then(console.log)
      break
    default :
      console.log('Command Not Found')
  }
}

userInput(process.argv[2], process.argv[3], process.argv[4])
