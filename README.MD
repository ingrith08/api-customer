# API Customer

## Variables de entorno

Antes de iniciar es necesario contar con un archivo en la raiz del proyecto:

- Un archivo `.env` conteniendo las variables de entorno que utilizara la API, debe tener la siguiente estructura:

```
PORT=3000
NODE_ENV=dev
JWT_SECRET=<TU JWT SECRET>
MONGO_URI=<TU MONGODB CONNECTION STRING>
CRYPTOJS_KEY=<TU CRYPTOJS KEY>
```

## Iniciar la API desde el host

- Primero asegurarse de tener la version de node 12.16.X
- Instalar las dependencias:

```sh
npm install
```

- Iniciar la aplicacion en modo desarrollo:

```sh
npm run dev
```

- La aplicacion deberia iniciar en el puerto 3000 o cualquier otro indicado por el archivo `.env`
