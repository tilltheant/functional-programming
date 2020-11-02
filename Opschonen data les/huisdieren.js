//Data van de ID in een variabele zetten.
const SurveyAnswers = data;
// De kolom die ik wil gaan gebruiken om schoon te maken.
let kolomnaam = "huisDieren";
//De data van de SurveyAnswers en van mijn onderwerp in een array zetten zodat ik ermee kan werken
const viezestring = SurveyAnswers.map(answer => answer[kolomnaam]);

//HArdcoded namen die weg moeten uit de array
const deleteNamen = ["PIPPA. ", "GIMLI. ", "MOLLY. ","TOMMIE.","CODY.","CHIP.","YOUP.","DOPEY","LIZZY.","HENK,","JENNIE.","JACK","SKY","XAVIERHA","LINDE.","MAX.","JOSEPHINE:","SIEPIE","NOA","SIEPIE.","ABEL","BABSIE","MIKE:","TOM:","JIP.","BOBI","MONSTER","MIMI","SIMBA","SYP","SIEB","TIGO","LOLA.","MAX","HERO.","HONT",""]


//Eerst alles naar hoofdletters veranderen
let naarhoofdletters = viezestring.map(test =>  test.toUpperCase())

//Weghalen van onnodige tekens
const deleteDit = ["GEEN","","GEEN HUISDIERKAT", "-","N>V>T>","'"]

// scannen over de naarhoofdletters en dan alles vervangen wat niet van toepassing is
deleteDit.forEach(trash => {
  naarhoofdletters = naarhoofdletters.map(answers => answers.replace(trash, ""))
})





console.log(newArray());
console.log(naarhoofdletters);




function namenweghalen (data){
  naarhoofdletters.map(item => {
    if (item.startsWith('PIPPA')){
    item.replace(item,"HOND")
return item
    }
return item
})
}

//Code samen met CHelsea gemaakt, Dit stukje code zoekt naar namen van const: deleteNamen en vervangt ze met "" weghalen van de namen.
function newArray (data) {
 deleteNamen.forEach(name => {
 naarhoofdletters = naarhoofdletters.map(item => item.replace(name, ""))
 })
 return naarhoofdletters
}
