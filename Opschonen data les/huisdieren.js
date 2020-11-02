//Data van de ID in een variabele zetten.
const SurveyAnswers = data;
// De kolom die ik wil gaan gebruiken om schoon te maken.
let kolomnaam = "huisDieren";
//De data van de SurveyAnswers en van mijn onderwerp in een array zetten zodat ik ermee kan werken
const viezestring = SurveyAnswers.map(answer => answer[kolomnaam]);


//Eerst alles naar hoofdletters veranderen
let naarhoofdletters = viezestring.map(test =>  test.toUpperCase())

//Weghalen van onnodige tekens
const deleteDit = ["GEEN","","GEEN HUISDIERKAT", "-","N>V>T>","'"]

// scannen over de naarhoofdletters en dan alles vervangen wat niet van toepassing is
deleteDit.forEach(trash => {
  naarhoofdletters = naarhoofdletters.map(answers => answers.replace(trash, ""))
})



const newArray = namenweghalen(naarhoofdletters)


function namenweghalen (data){
  naarhoofdletters.map(item => {
    if (item.startsWith('PIPPA')){
    item.replace(item,"HOND")
return item
    }
return item
})
}

console.log(naarhoofdletters);
