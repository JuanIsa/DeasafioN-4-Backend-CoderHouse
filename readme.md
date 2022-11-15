
# Proyecto creado con Node JS
## `Cuarto desafío` 
###  Creación de API Rest
## Scritps disponibles.

En la carpeta del proyecto hay varios comandos que podés correr. 
El primer comando luego de clonar o bajar y descomprimir el proyecto es el necesario para instarlar todas las dependencias para la ejeción de la app:

```
  npm i
```
Luego para poder correr la aplicación de manera unitaria:

```
  npm start
```
Si no se puede aprovechar la dependencia de desarrollo NodemonJS y ejecutar:

```
  npm run dev
```

Este comando va a hacer que la salida de la app se actualice en tiempo real.
La consola se va a ir recargando a medida de que hagas cambios en el código.

## `Endpoints disponibles`

Se pueden ejecutar peticiones del tipo `GET` a los siguientes endpoints:

* `/productos` Esta petición arrojará la lista completa de productos alojados en el servidor.

* `/productos/:id` Esta solocitará el producto específico por id indicado en la URL.


Se pueden ejecutar peticiones del tipo `POST` al siguiente endpoint:

* `/productos` Esta se puede hacer directamente desde el formulario que se encuentra en la URL root o con alguna aplicación externa  como Postman, va a generar una nueva entrada de registro.
El body de la request tiene que tener la siguiente estructuca:
```
{
  title: (nombre del producto),
  price: (precio),
  thumbnail: (url al logo o foto del producto)
}
```

Se pueden ejecutar peticiones del tipo `PUT` al siguiente endpoint:

* `/productos/:id` Esta petición modificará el registro indicado en el ID de la URL.
El body de la request tiene que tener la siguiente estructuca:
```
{
  title: (nombre del producto),
  price: (precio),
  thumbnail: (url al logo o foto del producto)
}
```

Se pueden ejecutar peticiones del tipo `DELETE` al siguiente endpoint:

* `/productos/:id` Esta petición borrará el registro indicado en el ID de la URL.


## 🚀 Sobre mi.
Mi nombre es Juan Isa, soy FullStack developer con más de una década de experiencia 
autodidacta en el desarrollo de aplicaciones de escritorio y móviles en diversos tipos de lenguajes de programación.

