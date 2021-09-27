import { leerTeclado } from "./util/EntradaTeclado";
console.log("hola mundo")
//creamos variable main que le llamamos main
let main = async () => {
// async significa que la funcion es asincrona lo cual es necesario para el await
    const valor = await leerTeclado('dime algo')
    console.log (`Me has dicho: ${valor}`)
}
//invocamos la funcion
main();