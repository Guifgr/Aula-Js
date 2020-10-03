function getText(){
    const nome = document.getElementById("nome").value
    const idade = document.getElementById("idade").value
    document.getElementById("h1").innerHTML = " Meu nome é "+nome+ ", tenho "+idade+" anos!";
}

var lista = ["maca", "pera"];
lista.push("uva");
console.log(lista[1])


var nome = "Herica";
var idade = 5;
var idade2= 3;
var frase = "Sera que estou aprendendo?"
alert(nome + " tem " +idade + " anos");
//alert(idade * idade2);
console.log(nome);
console.log(idade);
console.log(frase.replace("Sera que estou aprendendo", "Voce esta aprendendo!"));
console.log(frase.toUpperCase());
console.log(idade * idade2);
