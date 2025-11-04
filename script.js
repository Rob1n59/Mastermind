function genererCombinaison() {
  let combinaison = "";
  for (let i = 0; i < 4; i++) {
    combinaison += Math.floor(Math.random() * 6) + 1;
  }
  return combinaison;
}

let combinaisonSecrete = genererCombinaison();
let essais = 0;

function verifierProposition(proposition, secret) {
  let bienPlaces = 0;
  let malPlaces = 0;

  let secretArray = secret.split("");
  let propArray = proposition.split("");

  for (let i = 0; i < 4; i++) {
    if (propArray[i] === secretArray[i]) {
      bienPlaces++;
      secretArray[i] = null;
      propArray[i] = null;
    }
  }

  for (let i = 0; i < 4; i++) {
    if (propArray[i] !== null) {
      let index = secretArray.indexOf(propArray[i]);
      if (index !== -1) {
        malPlaces++;
        secretArray[index] = null;
      }
    }
  }

  return { bienPlaces, malPlaces };
}


document.getElementById("valider").addEventListener("click", function() {
  let proposition = document.getElementById("proposition").value;
  if (proposition.length !== 4 || !/^[1-6]{4}$/.test(proposition)) {
    alert("Veuillez entrer exactement 4 chiffres entre 1 et 6 !");
    return;
  }
  essais++;
  let resultat = verifierProposition(proposition, combinaisonSecrete);
  let historique = document.getElementById("historique");
  let div = document.createElement("div");
  div.textContent = `Tentative ${essais} : ${proposition} → ${resultat.bienPlaces} bien placé, ${resultat.malPlaces} mal placé.`;
  historique.appendChild(div);
  if (resultat.bienPlaces === 4) {
    alert("Bravo 🎉 ! Vous avez trouvé la combinaison !");
    document.getElementById("valider").disabled = true;
  }
});
