//
//alert("Bonjour "+prenom);
//c'est un programme pour demander l'âge 
//let age=prompt("Quel est ton age,?");

//if(age>=14){
//	alert("Bienvenue au JIT CSP !");
//}
//else{
//	alert("Tu es encore trop jeune....");
//}

/*
let vrai_mdp ="Assa"

if(mdp==vrai_mdp){
	alert("👋🏾Bienvenue👋🏾");
}
else{
	alert("Sorry c'est pas le bon mot de passe................");
}*/
/*let mdp=prompt("🔪Quel est ton mot de passe?🔪");
let vrai_mdp="Assa";
while(mdp!=vrai_mdp){
	alert("mauvais mot de passe.....🤡 ");
	mdp = prompt("🔪Quel est ton mot de passe?🔪");
}
alert("Bon mot de passeദ്ദി(˵ •̀ ᴗ - ˵ ) ✧");*/

let prenom=prompt("Quel est votre nom?");
let titre=document.getElementById("titre");
titre.textContent="Bonjour"   +prenom;

let paragraphe =document.createElement("p");
paragraphe.innerText = "Hello world !";
document.getElementById("boite").appendChild(paragraphe);
