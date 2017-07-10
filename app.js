const queries = require('./models/database')

const userInput = (firstArg, secondArg, thirdArg) => {
  switch (firstArg) {
    case 'add' :
      queries.add(secondArg)
      break
    case 'update' :
      queries.update(secondArg, thirdArg)
      break
    case 'done' :
      queries.done(secondArg)
      break
    case 'list' :
      queries.list()
      break
  }
}

userInput(process.argv[2], process.argv[3], process.argv[4])
