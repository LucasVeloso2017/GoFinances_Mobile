const formatValue = (value: number): string =>{
  const valor =  value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

  return valor


}

export default formatValue