import { leerTeclado } from "./util/entradaTeclado";
console.log("hola mundo")
//creamos variable main que le llamamos main
let main = async () => {
// async significa que la funcion es asincrona lo cual es necesario para el await
    const valor = await leerTeclado('Cual es tu edad')
    let valor2 = parseInt (valor)   
    
    if (valor2 < 18)
    {
        console.log('tienes menos de 18')
    } else
    {
        console.log ('tienes mas de 18')
    }
}
//invocamos la funcion
main();