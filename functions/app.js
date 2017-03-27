// Fonction qui retourne true
function bool(){
	return true;
}
console.log(bool())

//Fonction string
function returnthis(foo){
	return foo;
}
 console.log(returnthis("chaud"));

 // fonction 2 chaine de caractere avec une concatenation
 function that(foo,bar){
	return foo+bar
}
 console.log(that("chaud","patate"));

 // fonction qui prend en parametre 2 chiffre
 function dim(a,b){
 	if(a>b){
 		return("a est plus grand");
 	}
 	else if(a<b)	{
 		return("a est plus petit");
 	}
 	else{
 		return("ils sont egaux");
 	}
 }

 console.log(dim(4,6));

 // fonction qui prend en parametre un nombre et une chaîne de caractère
 function machin(nbre,caractère){
 	return nbre+caractère
 }
 console.log(machin(1,"hep"));

 // fonction qui prend 3 parametres et renvoie une chaine
 function call(nom, prénom, age){
 	return "Bonjour" + " " + nom+" "+prénom+" " +"tu as"+" "+ age+ "ans";

 }
console.log(call("Castell","Dimitri",31));