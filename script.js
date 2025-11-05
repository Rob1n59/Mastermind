let mode = "chiffres"; 
let combinaisonSecrete = [];
let essais = 0;
let maxEssais = 10;
let longueur = 4;
let maxChiffre = 6;

const couleursDisponibles = ["red","blue","green","yellow","purple","orange","pink","brown","cyan"];

function genererCombinaisonChiffres(longueur, maxChiffre) {
  let combinaison = [];
  for (let i = 0; i < longueur; i++) {
    combinaison.push(Math.floor(Math.random() * maxChiffre) + 1);
  }
  return combinaison;
}

function genererCombinaisonCouleurs(longueur, maxCouleurs) {
  let combinaison = [];
  for (let i = 0; i < longueur; i++) {
    combinaison.push(couleursDisponibles[Math.floor(Math.random() * maxCouleurs)]);
  }
  return combinaison;
}

function verifierProposition(proposition, secret) {
  let bienPlaces = 0;
  let malPlaces = 0;

  let secretArray = [...secret];
  let propArray = [...proposition];

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

document.getElementById("modeChiffres").addEventListener("click", () => {
  mode = "chiffres";
  document.getElementById("labelPlage").textContent = "Combien de chiffres possibles ?";
  document.getElementById("menuPrincipal").style.display = "none";
  document.getElementById("config").style.display = "block";
});

document.getElementById("modeCouleurs").addEventListener("click", () => {
  mode = "couleurs";
  document.getElementById("labelPlage").textContent = "Combien de couleurs possibles ?";
  document.getElementById("menuPrincipal").style.display = "none";
  document.getElementById("config").style.display = "block";
});

document.getElementById("retourMenuPrincipal").addEventListener("click", () => {
  document.getElementById("config").style.display = "none";
  document.getElementById("menuPrincipal").style.display = "block";
});

document.getElementById("retourMenu").addEventListener("click", () => {
  resetPartie();
  document.getElementById("jeu").style.display = "none";
  document.getElementById("menuPrincipal").style.display = "block";
});

document.getElementById("retourConfig").addEventListener("click", () => {
  resetPartie();
  document.getElementById("jeu").style.display = "none";
  document.getElementById("config").style.display = "block";
});

document.getElementById("commencer").addEventListener("click", () => {
  longueur = parseInt(document.getElementById("longueur").value);
  maxChiffre = parseInt(document.getElementById("plage").value);
  essais = 0;
  document.getElementById("historique").innerHTML = "";

  if (mode === "chiffres") {
    combinaisonSecrete = genererCombinaisonChiffres(longueur, maxChiffre);
    document.getElementById("zoneChiffres").style.display = "block";
    document.getElementById("zoneCouleurs").style.display = "none";
    document.getElementById("proposition").value = "";
    document.getElementById("proposition").setAttribute("maxlength", longueur);
  } else {
    combinaisonSecrete = genererCombinaisonCouleurs(longueur, maxChiffre);
    document.getElementById("zoneChiffres").style.display = "none";
    document.getElementById("zoneCouleurs").style.display = "block";
    genererPalette(maxChiffre);
    document.getElementById("propositionCouleurs").innerHTML = "";
  }

  document.getElementById("config").style.display = "none";
  document.getElementById("jeu").style.display = "block";
});

document.getElementById("valider").addEventListener("click", () => {
  let proposition = document.getElementById("proposition").value.trim().split("").map(Number);
  let regex = new RegExp("^[1-" + maxChiffre + "]{" + longueur + "}$");

  if (proposition.length !== longueur || !regex.test(proposition.join(""))) {
    alert("Veuillez entrer exactement " + longueur + " chiffres entre 1 et " + maxChiffre + " !");
    return;
  }

  traiterTentative(proposition);

  document.getElementById("proposition").value = "";
});

function genererPalette(nbCouleurs) {
  let palette = document.getElementById("palette");
  palette.innerHTML = "";
  for (let i = 0; i < nbCouleurs; i++) {
    let btn = document.createElement("div");
    btn.style.background = couleursDisponibles[i];
    btn.classList.add("pastille");
    btn.addEventListener("click", () => ajouterCouleur(couleursDisponibles[i]));
    palette.appendChild(btn);
  }
}

function ajouterCouleur(couleur) {
  let zone = document.getElementById("propositionCouleurs");
  if (zone.children.length < longueur) {
    let div = document.createElement("div");
    div.classList.add("pastille");
    div.style.background = couleur;
    div.addEventListener("click", () => {
      zone.removeChild(div);
    });

    zone.appendChild(div);
  }
}

document.getElementById("validerCouleurs").addEventListener("click", () => {
  let zone = document.getElementById("propositionCouleurs");
  if (zone.children.length !== longueur) {
    alert("Veuillez choisir exactement " + longueur + " couleurs !");
    return;
  }
  let proposition = [];
  for (let child of zone.children) {
    proposition.push(child.style.background);
  }
  traiterTentative(proposition);
  zone.innerHTML = ""; 
});

function traiterTentative(proposition) {
  essais++;
  let resultat = verifierProposition(proposition, combinaisonSecrete);

  let historique = document.getElementById("historique");
  let div = document.createElement("div");
  div.classList.add("tentative");

  if (mode === "chiffres") {
    div.textContent = `Tentative ${essais} : ${proposition.join("")} → ${resultat.bienPlaces} bien placé(s), ${resultat.malPlaces} mal placé(s).`;
  } else {
    div.innerHTML = `Tentative ${essais} : ` + proposition.map(c => `<span class="pastille" style="background:${c}"></span>`).join("") + 
      ` → ${resultat.bienPlaces} bien placé, ${resultat.malPlaces} mal placé.`;
  }

  historique.appendChild(div);

  if (resultat.bienPlaces === longueur) {
    alert("Bravo ! Vous avez trouvé la combinaison en " + essais + " tentatives !");
    desactiverJeu();
  } else if (essais >= maxEssais) {
    alert("Dommage ! Vous avez atteint la limite de " + maxEssais + " essais.\nLa combinaison était : " + (mode === "chiffres" ? combinaisonSecrete.join("") : combinaisonSecrete.join(", ")));
    desactiverJeu();
  }
}

function desactiverJeu() {
  document.getElementById("valider").disabled = true;
  document.getElementById("validerCouleurs").disabled = true;
}

function resetPartie() {
  combinaisonSecrete = [];
  essais = 0;
  document.getElementById("historique").innerHTML = "";
  document.getElementById("valider").disabled = false;
  document.getElementById("validerCouleurs").disabled = false;
}
