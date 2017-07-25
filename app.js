const queries = require('./models/database')

const formatList = list => {
  let formattedList = ''
  formattedList+= 'ID  Description \n'
  formattedList+= '--  ----------- \n'
  list.forEach((item) => {
    formattedList+= `${item.id}, ${item.task} \n`
  })
  return formattedList
}

const userInput = (firstArg, secondArg, thirdArg) => {
  switch (firstArg) {
    case 'add' :
      queries.add(secondArg).then(console.log('Created a task'))
      break
    case 'update' :
      queries.update(secondArg, thirdArg).then(console.log('Updated task'))
      break
    case 'done' :
      queries.done(secondArg)
      break
    case 'list' :
      queries.list().then(list => formatList(list)).then(console.log)
      break
    default :
      console.log('Command Not Found')
  }
}

userInput(process.argv[2], process.argv[3], process.argv[4])
