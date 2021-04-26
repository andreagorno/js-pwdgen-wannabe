// richiesta nome
var myName = prompt("inserisci il tuo nome")
console.log(myName);

document.getElementById("name").innerHTML = myName;

// richiesta cognome
var mySurname = prompt("inserisci il tuo cognome")
console.log(mySurname);

document.getElementById("surname").innerHTML = mySurname;

// richiesta colore preferito
var myColor = prompt("inserisci il tuo colore preferito")
console.log(myColor);

document.getElementById("color").innerHTML = myColor;


// genera password
var myPassword;
myPassword = myName + mySurname + myColor + "21";
console.log(myPassword);

document.getElementById("password").innerHTML = myPassword;