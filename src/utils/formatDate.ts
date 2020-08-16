const formatDate = (date: any): any =>{
  const splited = date.split('T')
  const format = splited[0].split('-')
  
  const order = `${format[2]}/${format[1]}/${format[0]}`
 
  return order
}
export default formatDate