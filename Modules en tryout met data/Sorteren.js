
//Scannen over een array en daaruit een ID halen
export function filteren (data, column){
  return data.map(uitkomst => uitkomst[column])
}

//Tellen hoeveel een gekozen item voorkomt in de array (Code van de les gerecycled!)
export function tellenmaar (kieseenplek, specefiekedag){
  let count = 0
  kieseenplek.forEach(item => {
    if (item === specefiekedag){
      count ++
    }
  });
  return count

}
