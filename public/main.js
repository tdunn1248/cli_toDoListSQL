const formatList = list => {
  let formattedList = ''
  formattedList+= 'ID Description \n'
  formattedList+= '-- ----------- \n'
  list.forEach((item) => {
    formattedList+= `${item.id}  ${item.task} \n`
  })
  return formattedList
}

module.exports = {formatList}
