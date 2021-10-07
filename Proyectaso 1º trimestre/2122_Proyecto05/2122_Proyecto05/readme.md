# About
Siguiente un vehículo que arranca, se pone a una velocidad,
se le pone gasolina, consume dependiendo de la veolidad, se para,
se pueden subir los cristales.

Iniciamos con: 

https://codemonkeyjunior.wordpress.com/2019/05/01/node-js-typescript-iniciar-un-proyecto/

## Quick Start
Previamete debemos tener instalado el typescript:
```
npm install -g typescript

o 

npm install typescript -D

Iniciamos nuetro proyecto node con:
```
npm init -y

Iniciamos el proyecto typescript con:
````
tsc --init

o

npx tsc -init

Modificamos tsconfig.ts para que sea:

{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true
  }
}

Para compilar de manera que los cambios se refrequen, compilation in watch mode...:
```
tsc --watch
```
Para ejecutar:
```
node ./dist/index
```

Al compilar con tsc se crean los js en dist

