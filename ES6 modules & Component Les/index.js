import { parkingdataspecialdays, selectiedata } from "./dataophalen.js";
import {dataophalen} from "./api.js";
import {filteren, tellenmaar} from "./Sorteren.js";
// 1 - Ophalen van data en in een var zetten
// 2 - de data scannen en splitten
// 3 - profit

console.log("test")

dataophalen (parkingdataspecialdays)
.then(data => {
 const uitkomsten = filteren(data, selectiedata)
 const specialeplekken = tellenmaar (uitkomsten, selectiedata)
 console.log(uitkomsten)
 console.log(specialeplekken)
})
