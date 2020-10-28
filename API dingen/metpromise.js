// Endpoint which returns locations of parking places, including area IDs
const endpoint = "https://opendata.rdw.nl/resource/qtex-qwd8.json"
const selectedColumn = 'areaid'

getData(endpoint)
	.then(result => {
  	return result.json()
})
 .then(RDWData => {
  	console.log("all data: ", RDWData)
  	console.log("one datum", RDWData[0])
  	const areaIdArray = filterData(RDWData, selectedColumn)
    const usageArray = filterData(RDWData, 'usageid')
		const uniqueUsageValues = listUnique(usageArray)
    console.log("Unique usage values:", uniqueUsageValues)

  	const uniqueAreaValues = listUnique(areaIdArray)
    console.log("Unique area values:", uniqueAreaValues)

  	const emptyStringsInAreas = countValuesInArray(areaIdArray, "")
    console.log("empty strings in area ids", emptyStringsInAreas)

  	// console.log(usageArray, areaIdArray)
})

// Fetches data from a url
function getData(url){
  return  fetch(url)
}

// Returns all values for a certain key in an array of data
function filterData(dataArray, key){
  return dataArray.map(item => item[key])
}

// Returns all unique values in an array
function listUnique(dataArray){
  //logica which finds unique values
  let uniqueArray = []
  dataArray.forEach(item => {
    if (uniqueArray.indexOf(item) == -1)
    {
      uniqueArray.push(item)
    }
  })
  return uniqueArray
}

// Compares two arrays and returns the values that ARe present in array1 but not in array2
function compareArray(array1, array2){
  //Some code here that compares two arrays
	return valuesOnlyPresentInArray1
}

// Returns the number of times a value is present in an array
function countValuesInArray(valueArray, specificValue){
  let count = 0
  valueArray.forEach(item => {
    if (item == specificValue){
      count ++
    }
  })
  return count
}
