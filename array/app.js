var mois = ['Janvier','Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre'];
console.log(mois);

//aficher 3eme valeur
console.log(mois[2]);

//afficher l'index 5
console.log(mois[5]);

//afficher le mois de Novembre
console.log(mois[10]);

// modifier le mois d'Aout
mois[7]="Août";

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

//Rajouter Citron à l'index 4
fruits[4].push("citron");
console.log(fruits);

//Retirer Cerise
fruits.splice(1,1);
console.log(fruits);

//Rajouter Poire à l'index 2
fruits.splice(2,0,"poire");
console.log(fruits);
