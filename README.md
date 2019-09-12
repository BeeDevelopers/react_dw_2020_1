# Taller "Tu primera vez con React.js". BeeDevelopers DICIS.

## Instalación de Node.js

### Windows
Descarga el instalador de la página oficial de node para windows. [Link](https://nodejs.org/es/).

### Mac

Descarga el instalador de la página oficial de node para MacOS. [Link](https://nodejs.org/es/).

### Linux

Desde la terminal puedes instalar Node con estos comandos.

```bash
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -

sudo apt-get install -y nodejs
```

## Instalación de React

Dentro de la terminal en cualquier sistema operativo ejecutar el siguiente comando:

```bash

npm install -g create-react-app

```

## Iniciar el proyecto

Este comando te permite inicializar el proyecto y una vez ejecutado comenzar a trabajar en él.

```bash
npm start
```

## Enlace a Diapositivas [Link](https://docs.google.com/presentation/d/1Kw2Mv7kI-pYNRUQ-O5p8Y5XBBX-5MPiCZ-AeKIKDjV4/edit?usp=sharing)

## Crea la carpeta `src` y dentro crea la carpeta `componentes`

## Componentes que se harán
- Boton
- Footer
- Header
- Inicio
- Redes
- Carta
- Principal

### Componente principal
Es donde irá la sección de tarjetas.
[Principal.js](src/components/Principal.js)

## Build
Cuando el proyecto esté acabado corre el comando

`npm run build`

Este comando creará la carpeta build dentro de tu proyecto. 

## Subir Proyecto a Netlify
Link: https://www.netlify.com/

- Crea una cuenta en Netlify
- En la sección "sites" arrastra tu carpeta build a la sección punteada que dice "Drag and drop your site folder here"