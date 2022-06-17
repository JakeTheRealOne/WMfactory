const maintitle = document.querySelector(".maintitle");
const button = document.querySelector("button");
let message = document.getElementById("message");

console.log(
  "      _      _      _  __  _____     ____     ____   ____    ___   ____    _____ \n     | |    / \\    | |/ / | ____|   / ___|   / ___| |  _ \\  |_ _| |  _ \\  |_   _|\n  _  | |   / _ \\   | ' /  |  _|     \\___ \\  | |     | |_) |  | |  | |_) |   | |  \n | |_| |  / ___ \\  | . \\  | |___     ___) | | |___  |  _ <   | |  |  __/    | |  \n  \\___/  /_/   \\_\\ |_|\\_\\ |_____|   |____/   \\____| |_| \\_\\ |___| |_|       |_|  "
);

var result = prompt("Entrez votre pseudo :", "");

console.log("Nouvelle connexion enregistrée ! => il s'agit de " + result);

function Soowhie() {
  let messageP = document.createElement("p");
  messageP.className = "idmessage";
  let usernameB = document.createElement("b");
  usernameB.className = "idusername";
  usernameB.textContent = result;
  messageP.textContent = message.value;
  if (result === "" || message.value === "") {
    console.log("Impossible d'envoyer un message");
  } else {
    document.body.append(usernameB);
    document.body.append(messageP);
  }
  message.value = "";
  if (usernameB.textContent === "Admin") {
    console.log("Un Admin vient de se connecter !");
    usernameB.style.color = "rgb(255, 86, 182)";
  }
  if (usernameB.textContent === "Modo") {
    console.log("Un Modérateur vient de se connecter !");
    usernameB.style.color = "rgb(92, 231, 210)";
  }
}

button.addEventListener("click", Soowhie);
