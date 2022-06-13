var acompanhadopais = false
var idade = 17;

if(idade >= 18){
    console.log("liberado!");
} else if(idade < 18 && acompanhadopais){
    console.log("liberado!")
} else{
    console.log("acesso negado !")
}
