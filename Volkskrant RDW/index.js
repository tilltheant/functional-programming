// 1 - Ophalen van data en in een var zetten
// 2 - de data scannen en splitten
// 3 - profit

const parkingdata = parkingData;
const parkeergebied = "https://opendata.rdw.nl/resource/mz4f-59fw.json"
const selectiedata = "uuid"

//zet de parkeerdata om naar een array
const rdwd = parkingdata.map(answer => answer)

async function getData() {
  const data = await dataophalen(parkeergebied)
  // const data2 = await data2ophalen()

  const filtered = filterenhelearray(data)

const combinedData = filtered.map(item => {
  const thisParkingData = parkingData.find(garage => garage.identifier === item.uuid)

  if (thisParkingData) {
    return {
      ...item,
      ...thisParkingData
    }
  } else {
    return undefined
  }
})
  // dataCombined = data + data2

  return combinedData
}

getData().then(resultaat => console.log(resultaat))

//
// const resultaat = await dataophalen(parkeergebied)
// dataophalen(parkeergebied)
// .then(data => {
//  const uitkomsten = filterenhelearray(data)
//  resultaat.push(uitkomsten)
//
// })
// console.log(resultaat[0])

// const combinedDataSpread = resultaat.map(item => {
// console.log(resultaat)
//  return {
//  ...item,
//  ...rdwd.filter(data => data.identifier === item.uuid)[0]
//  }
// })






























async function dataophalen(url) {
  const antwoord = await fetch(url)
  const data = await antwoord.json (url)
  return data
}

function filteren (data, column){
  return data.map(uitkomst => uitkomst[column])
}

function filterenhelearray (data){
  return data.map(uitkomst => uitkomst)
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
