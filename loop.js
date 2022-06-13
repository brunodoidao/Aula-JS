var carros = [];
carros.push("ferrari")
carros.push("chevrolet")
carros.push("mazda")
carros.push("lamborghini")

imprimir_lista(carros);

carros.splice(0,2);

imprimir_lista(carros);

function imprimir_lista(carros){
    for(i=2; i < carros.length; i++){
        console.log(carros[i])
    }
}