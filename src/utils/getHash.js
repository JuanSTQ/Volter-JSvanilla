const getHash = ()=> location.hash.match(/[^(#\)]?/g).join("").toLowerCase() || "/"


export default getHash



//location.hash.slice(1).toLocaleLowerCase().math(/[^(\|/)]+/g)[0] || "/"
/* 
let validation = location.hash.match(/[^(#\)]+/g)[0]
return validation ? validation : "/"

location.hash.slice(1).toLowerCase().split("/")[0] || "/" */

















//expresion Regular para extraer "/ o \ " de una cadena url  Para la solucion de la linea 2
const expre = "/"
let match = expre.match(/[^(\/)]+/g)
let split = expre.split("/")
console.log(match)
console.log(split)

//Expresion Regular Utilizada
let str = "/"
let c = str.match(/[^(#\/)]+?/g)||"nusus"
console.log(str.match(/[^(#\/)]?/g).join(""))