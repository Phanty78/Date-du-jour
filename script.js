const dateRepere = new Date()
const jourDuMois = dateRepere.getDate()
const jourDeLaSemaineNumero = dateRepere.getDay()
const annee = dateRepere.getFullYear()
const moisNumero = dateRepere.getMonth()

const tableauSemaine = ["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"]
const tableauMois = ["janvier","fevrier","mars","avril","mai","juin","juillet","aout","septembre","octobre","novembre","decembre"]

const jourDeLaSemaine = tableauSemaine[jourDeLaSemaineNumero]
const mois = tableauMois[moisNumero]

const zoneAffichage = document.querySelector("span")

const span = `${jourDeLaSemaine} ${jourDuMois} ${mois} ${annee} `

zoneAffichage.innerHTML = span