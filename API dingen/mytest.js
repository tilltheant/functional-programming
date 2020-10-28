// 1 - Ophalen van data en in een var zetten
// 2 - de data scannen en splitten
// 3 - profit

const parkingdataspecialdays = "https://opendata.rdw.nl/resource/hpi4-mynq.json"

const selectiedata = "namespecialday"
const dagenteller = "KOOPZONDAG"



dataophalen (parkingdataspecialdays)
.then(data => {
 const uitkomsten = filteren(data, selectiedata)
 const specialeplekken = tellenmaar (uitkomsten, dagenteller)
 console.log(uitkomsten)
 console.log(specialeplekken)
})






async function dataophalen(url) {
  const antwoord = await fetch(url)
  const data = await antwoord.json (url)
  return data
}

function filteren (data, column){
  return data.map(uitkomst => uitkomst[column])
}

function tellenmaar (kieseenplek, specefiekedag){
  let count = 0
  kieseenplek.forEach(item => {
    if (item === specefiekedag){
      count ++
    }
  });
  return count

}
