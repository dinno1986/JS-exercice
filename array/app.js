var mois = ['Janvier','Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre'];
console.log(mois);

//aficher 3eme valeur
console.log(mois[2]);

//afficher l'index 5
console.log(mois[4]);

//afficher le mois de Novembre
console.log(mois[10]);

// modifier le mois d'Aout
mois.splice(8,0,"Août");
console.log(mois);
mois.splice(7,1);
console.log(mois);

// afficher toutes les valeurs du tableau
var i = mois
for(var i=0; i<mois.length; i++){
	console.log(mois[i]);
}

//Récupérer le fichier array
var fruits = ['Pomme','Cerise','Tomate','Citron', ['Orange','Poivron']];

//Rajouter courgette
fruits.push("courgette");
console.log(fruits);