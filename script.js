let combinaisonSecrete = genererCombinaison();
let essaisRestants = 10; 
function genererCombinaison() {
  let combinaison = "";
  for (let i = 0; i < 4; i++) {
    combinaison += Math.floor(Math.random() * 10); 
  }
  return combinaison;
}

document.getElementById("valider").addEventListener("click", function() {
  let proposition = document.getElementById("proposition").value;
  if (proposition.length !== 4 || isNaN(proposition)) {
    alert("Veuillez entrer exactement 4 chiffres !");
    return;
  }

  let resultat = verifierProposition(proposition, combinaisonSecrete);
  afficherResultat(proposition, resultat);

  essaisRestants--;
  if (resultat.bienPlaces === 4) {
    alert("Bravo ! Vous avez trouvé la combinaison secrète 🎉");
    document.getElementById("valider").disabled = true;
  } else if (essaisRestants === 0) {
    alert("Dommage ! La combinaison était : " + combinaisonSecrete);
    document.getElementById("valider").disabled = true;
  }
});

function verifierProposition(proposition, secret) {
  let bienPlaces = 0;
  let malPlaces = 0;

  let secretArray = secret.split("");
  let propArray = proposition.split("");

  for (let i = 0; i < 4; i++) {
    if (propArray[i] === secretArray[i]) {
      bienPlaces++;
      secretArray[i] = null; 
      propArray[i] = undefined;
    }
  }

  for (let i = 0; i < 4; i++) {
    if (propArray[i] !== undefined) {
      let index = secretArray.indexOf(propArray[i]);
      if (index !== -1) {
        malPlaces++;
        secretArray[index] = null; 
      }
    }
  }

  return { bienPlaces, malPlaces };
}

function afficherResultat(proposition, resultat) {
  let historique = document.getElementById("historique");
  let div = document.createElement("div");
  div.classList.add("tentative");
  div.textContent = `Proposition : ${proposition} | Bien placés : ${resultat.bienPlaces} | Mal placés : ${resultat.malPlaces}`;
  historique.appendChild(div);
}
