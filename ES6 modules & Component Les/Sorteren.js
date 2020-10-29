
export function filteren (data, column){
  return data.map(uitkomst => uitkomst[column])
}

export function tellenmaar (kieseenplek, specefiekedag){
  let count = 0
  kieseenplek.forEach(item => {
    if (item === specefiekedag){
      count ++
    }
  });
  return count

}
