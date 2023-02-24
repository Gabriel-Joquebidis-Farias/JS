var tecnico = ["LP","BD","DAW"]
var medio = ["matematica","Portugues","biologio"]
var formacaoCompleta = tecnico.concat(medio)

//exemplo 2 --------------------------

var stringResultante = tecnico.join("-")
var formacaoBasica = medio.slice(1,2);

//exemplo 4 --------------------------
 const intrumentos = ['Guitarra','Baixo','Violao']
 intrumentos.sort();

 const idades = [32,21,33,43,1,12,8]
 idades.sort()

 //exemplo 5 -------------------------

 const lista = [1,2,3,4,5,6]
    const novalista = lista.map(function(item){ return item * 5})

 const novalista2 = lista.map(function(item,index){ return item + index})    
 