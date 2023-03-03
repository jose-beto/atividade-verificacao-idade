var dataNasc = document.querySelector("#datanasc");
var sexo = document.getElementsByName("sexo");
var resultado = document.querySelector("#resultado");

var button = document.querySelector("#button");
var img = document.querySelector("#img");

button.addEventListener("click", () => {
  var date = new Date();
  var anoAtual = date.getFullYear();
  var dataNascimento = Number(dataNasc.value);

  var idade = anoAtual - dataNascimento;

  if(sexo[0].checked) {
    resultado.innerHTML = `<h3> Pessoa  ${idade}: anos </h3>`;
    if(idade < 12) {
      img.src = "img/cartoon-crianca-m.png";
    }else if(idade < 24){
        img.src= "img/cartoon-adolescente-m.png"
    }else if(idade < 54){
        img.src= "img/cartoon-adulto.png"
    }else{
        img.src="img/cartoon-idoso.png"
    }
  } else if(sexo[1].checked) {
    resultado.innerHTML = `<h3>  Pessoa ${idade}: anos </h3>`;

    if(idade < 12) {
        img.src = "img/cartoon-crianca.png";
      }else if(idade < 24){
          img.src= "img/cartoon-adolescente-f.png"
      }else if(idade < 54){
          img.src= "img/cartoon-mulher.png"
      }else{
          img.src="img/cartoon-idosa.png"
      }
  }
});
