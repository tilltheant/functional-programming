// code van de les van laurens gecopy paste voor test

const endpoint = "https://opendata.rdw.nl/resource/qtex-qwd8.json"
const selected = "areaid"

getData (endpoint)
.then(data =>{
  const result = filterdata(data, selected)
  console.log(result)
})

async function getData(url) {
  const response = await fetch (url)
  const data = await response.json()
  return data
}

function filterdata(data, column){
  return data.map(results => results[column])
}
