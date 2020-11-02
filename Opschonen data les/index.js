console.log("script loaded")
let kolomnaam = "grootsteAutoVanOudersOfVerzorgers"
let debt = "hoogteStudieschuld"
const SurveyAnswers = data;
const automerken = ["MAZDA","NISSAN","RENAULT","SUBARU","LAND ROVER","MINI","BMW","POLO", "SUZUKI", "FIAT","AUDI","MERCEDES","PEUGEOT", "KIA","SAAB","VOLKSWAGEN","PORSCHE","FORD", "TOYOTA","SKODA","DACIA",   "VOLVO", "HYUNDAI","SEAT", "SUZUKI", "OPEL","CHEVROLET","CHRYSLER","CITROEN","LAMBORGHINI","JEEP","FORD","ALFA ROMEO"]


//ophalen van data en in een array zetten
const specialeantwoorden = SurveyAnswers.map(answer => answer[kolomnaam])
const studieschuld = SurveyAnswers.map(antwoord => antwoord[debt])

// vervangen van alle letters
let geenstudieschuldweghalen = studieschuld.map(vervang => vervang.replace("Geen studieschuld", "0").replace("Meer dan 25000", "+25000"));


console.log(geenstudieschuldweghalen)




//scannen door items en alle letters omzetten naar hoofdletters
let opschonen = specialeantwoorden.map(test =>  test.toUpperCase())

//aanroepen van de functie merkChecker
const schonemerken = opschonen.map(entry => merkChecker(entry));



///CREDITS: sjors wijsman
///Door alle SurveyAnswers loopen en vervolgens bekijken of de automerken ermee overeenkomen daarna returnen
///naar een nieuwe variable

function merkChecker(string){
  for (merk of automerken) {
    if (string.includes(merk)) {
        return merk
    }

  }
  return "niet ingevuld"
}




/*const automerken = ["MAZDA","NISSAN","RENAULT","SUBARU","LAND ROVER","MINI","BMW", "SUZUKI", "FIAT","AUDI","MERCEDES","PEUGEOT", "KIA","SAAB","VOLKSWAGEN","PORSCHE","FORD", "TOYOTA","SKODA","DACIA", "VOLVO", "HYUNDAI","SEAT", "SUZUKI", "OPEL","CHEVROLET","CHRYSLER","CITROEN","LAMBORGHINI","JEEP","FORD","ALFA ROMEO"]
const synoniemen = {
  "VW": "VOLKSWAGEN",
  "POLO": "VOLKSWAGEN",
  "MERRIE": "MERCEDES",
}
function checkmerk(string) {
  for (merk of automerken) {
    if (string.includes(merk)) {
      return merk;
    }
  }
  for (synoniem of Object.keys(synoniemen)) {
    if (string.includes(synoniem)) {
      return synoniemen[synoniem]
    }
  }
  return "nvt.";
}
merkenData = merkenData.map(entry => checkmerk(entry));
console.table(merkenData);
*/

///CREDITS: sjors wijsman aka Erdogoat
///Door alle SurveyAnswers loopen en vervolgens bekijken of de automerken ermee overeenkomen daarna returnen
///naar een nieuwe variable


//function checkForMerk(string) {
//  let checkIfReturned = false;
//  for (merk of automerken) {
//  if (string.toUpperCase().includes(merk)) {
//      checkIfReturned = true;
//      return merk;
//    }
//  }
  //if (!checkIfReturned) {
  //  return string + " is not an automerk"
//  }
//}
//const merkdata = dataset.map(entry => checkForMerk(entry));
