Creacion de Ambiente (API Rest con Node JS + Express JS + TypeScript + TypeORM):
    npm init -y (crea el proyecto)
Dependencias: (dependencias de desarrollo -D)    
    npm i typescript -D
    npx tsc --init (inicializamos typeScript crea el archivo de configuracion tsconfig.json) 
    npm i ts-node-dev -D
    npm i express
    npm i cors
    npm i morgan  
    npm i @types/express -D
    npm i @types/cors -D
    npm i @types/morgan -D
        
En el archivo: tsconfig.json cambiar la configuracion:
    "rootDir": "./src",
    "outDir": "./build",
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true, 
    "strictPropertyInitialization": false,

para compilar TypeScript EJECUTAR tsc    

agregar en package.json 
en "scripts":
    "dev":"ts-node-dev --respawn src/index.ts",
    "build":"tsc",
    "start": "node build/index.js",

npm i express-validator (valida la info ants de enviar al servidor)
npm i bcrypt (encriptador de contraseñas)
npm i jsonwebtoken (se utiliza para crear y validar un token)
npm i express-session
npm i cookie-parse   
npm i dotenv

Bases de datos:

Mongoose:
    npm i mongoose (asistente de mongodb)
Mysql:
    npm install --save mysql2  
    npm install --save-dev @types/node

instalar json-server (en tu pc)
	npm install -g json-server (Crea un servidor local para ser consumido por la api Rest a modo de testeo del frontend)

Start json server
	json-server --watch db.json --port 8080	    
