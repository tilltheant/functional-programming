// 1 - Ophalen van data en in een var zetten
// 2 - de data scannen en splitten
// 3 - profit

const parkingdata = data;
const parkeergebied = "https://opendata.rdw.nl/resource/mz4f-59fw.json"
const selectiedata = "uuid"

//zet de parkeerdata om naar een array
const rdwd = parkingdata.map(answer => answer)


//bron: https://stackoverflow.com/questions/38750705/filter-object-properties-by-key-in-es6
const allowed = ['name', 'identifier'];

const filtered = Object.entries(rdwd).filter(key => allowed.includes(key)).reduce((obj, key) => {
    obj[key] = rdwd[key];
    return obj;
  }
  , {});

let newArr = rdwd.filter(function (x){
  return x.name == "P+R";
}
);

console.log(newArr)

dataophalen (parkeergebied)
.then(data => {
 const uitkomsten = filteren(data, selectiedata)
 //const locatievanparkeergebied = combineren (parkeergebied, rdwd)
 const newarr = combi(parkeergebied, rdwd)
//console.log (locatievanparkeergebied)
})

function combi (data, kolom){
  let neW = [];
  neW = rdwd.map(x => x["name"]);
  console.log(neW)
}




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

 function combineren (parkeergebied, rdwd){
   const resultaat = [];
   rdwd.forEach((item) => {
     if(parkeergebied.includes(item.identifier)) {
    let waarde = item.name;
     }
     resultaat.push(waarde);
   });

 return resultaat;
 console.log(resultaat)
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
