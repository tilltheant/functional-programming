// 1 - Ophalen van data en in een var zetten
// 2 - de data scannen en splitten
// 3 - profit

const parkingdata = data;
const parkeergebied = "https://opendata.rdw.nl/resource/mz4f-59fw.json"
const selectiedata = "uuid"

//zet de parkeerdata om naar een array
const rdwd = parkingdata.map(answer => answer)




dataophalen (parkeergebied)
.then(data => {
 const uitkomsten = filteren(data, selectiedata)
 //const locatievanparkeergebied = combineren (parkeergebied, rdwd)
 const newarr = combi(parkeergebied, rdwd)
//console.log (locatievanparkeergebied)
})



const combinedDataSpread = rdwd.map(item => {
 return {
 ...item,
 ...parkeergebied.filter(data => data.identifier === item.identifier)[0]
 }
})

console.log(combinedDataSpread)




async function dataophalen(url) {
  const antwoord = await fetch(url)
  const data = await antwoord.json (url)
  return data
}


/* function combineren (parkeergebied, rdwd){
  let waarde = rdwd.name
  rdwd.map(item => {
    if (rdwd.identifier === parkeergebied.uuid){
      item.push(waarde)
    }

  })

}
*/

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
