function genererCombinaison(longueur, maxChiffre) {
  let combinaison = "";
  for (let i = 0; i < longueur; i++) {
    combinaison += Math.floor(Math.random() * maxChiffre) + 1;
  }
  return combinaison;
}

let combinaisonSecrete = "";
let essais = 0;
let maxEssais = 10;
let longueur = 4;
let maxChiffre = 6;

function verifierProposition(proposition, secret) {
  let bienPlaces = 0;
  let malPlaces = 0;

  let secretArray = secret.split("");
  let propArray = proposition.split("");

  for (let i = 0; i < longueur; i++) {
    if (propArray[i] === secretArray[i]) {
      bienPlaces++;
      secretArray[i] = null;
      propArray[i] = null;
    }
  }

  for (let i = 0; i < longueur; i++) {
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

document.getElementById("commencer").addEventListener("click", function() {
  longueur = parseInt(document.getElementById("longueur").value);
  maxChiffre = parseInt(document.getElementById("plage").value);
  combinaisonSecrete = genererCombinaison(longueur, maxChiffre);
  essais = 0;
  document.getElementById("historique").innerHTML = "";
  document.getElementById("proposition").value = "";
  document.getElementById("proposition").setAttribute("maxlength", longueur); // limite saisie
  document.getElementById("valider").disabled = false;
  document.getElementById("config").style.display = "none";
  document.getElementById("jeu").style.display = "block";
});

document.getElementById("valider").addEventListener("click", function() {
  let proposition = document.getElementById("proposition").value.trim();
  let regex = new RegExp("^[1-" + maxChiffre + "]{" + longueur + "}$");

  if (proposition.length !== longueur || !regex.test(proposition)) {
    alert("Veuillez entrer exactement " + longueur + " chiffres entre 1 et " + maxChiffre + " !");
    return;
  }

  essais++;
  let resultat = verifierProposition(proposition, combinaisonSecrete);

  let historique = document.getElementById("historique");
  let div = document.createElement("div");
  div.classList.add("tentative");
  div.textContent = `Tentative ${essais} : ${proposition} → ${resultat.bienPlaces} bien placé, ${resultat.malPlaces} mal placé.`;
  historique.appendChild(div);

  if (resultat.bienPlaces === longueur) {
    alert("Bravo ! Vous avez trouvé la combinaison en " + essais + " tentative !");
    document.getElementById("valider").disabled = true;
  } else if (essais >= maxEssais) {
    alert("Dommage ! Vous avez atteint la limite de " + maxEssais + " essais. La combinaison était : " + combinaisonSecrete);
    document.getElementById("valider").disabled = true;
  }
});

document.getElementById("retourMenu").addEventListener("click", function() {
  combinaisonSecrete = "";
  essais = 0;
  document.getElementById("proposition").value = "";
  document.getElementById("historique").innerHTML = "";
  document.getElementById("jeu").style.display = "none";
  document.getElementById("config").style.display = "block";
});
