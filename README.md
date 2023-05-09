# Mi Libreria (Backend) 📚

Esta app web permite consultar los libros registrados, ver un listado rápido de los libros y entrar al detalle viendo su autor y su código ISBN. De igual manera se podrá añadir nuevos autores y tantos libros como se desee.

## Background 🏋🏼‍♂️

Este repo sirve para entender cómo se diseña una app desde cero, creando tanto la parte del servidor, creación del API Rest y Base de Datos al igual que la programación de la parte de frontend como es la maquetación web, diseño responsivo, react (componentes | props | hooks | router |javascript) y manejo de APIs.

Este repo cuenta con dos partes:

- Proyecto Frontend: Se puede ver todo la evolución del proyecto con sus respectivos commits en [repo Frontend](https://github.com/jnataliaramirez/library-frontend)
- Proyecto Backend: Es este repo, donde encontrarás el código para mejorar las habilidades en desarrollo backend. Se utiliza Node.js con Express y SQLite como base de datos.

## Uso 🤓

Esta librería te servirá para registrar de manera fácil tus libros y así tener un control de ellos para una fácil consulta y si quieres también podrás abrir una librería y tener el inventario siempre en la web.

## API/Component 🧐

La API cuenta con seis (6) endpoints en los cuales se podra hacer get o post según se requiera. Tanto para la creación de nuevos autores como de nuevos libros y la consulta de los mismos.

Se podra acceder a ellos de la siguiente manera:

- Author(Model):
  first_name: TextField,
  last_name: TextField

- Book(Model):
  name: TextField,
  isbn: TextField,
  author: ForeignKey(Author)

## Instalación 💿

> Para ejecutar el servidor necesitará tener instalado **node.js**

Clonar o descargar repo y ejecutar en terminarl los siguientes comandos para instalar todas las dependencias y que el proyecto se ejecute en local

```shell
    # install commands
    npm install
```

```shell
    # test o run commands
    npm start
    npm run dev ...
```

## Stack 👩🏻‍🔬
- Node.js
- express
- API Rest
- SQLite

## Contactame ☎️

[<img src="https://raw.githubusercontent.com/Raymo111/Raymo111/master/socials/linkedin.png" height="30em" align="center" alt="Follow jnataliaramirez on LinkedIn" title="Follow jnataiaramirez on LinkedIn"/>](https://linkedin.com/in/jnataliaramirez) [<img src="https://raw.githubusercontent.com/Raymo111/Raymo111/master/socials/twitter.svg" height="30em" align="center" alt="Follow jnataliaramirez on Twitter" title="Follow jnataliaramirez on Twitter"/>](https://twitter.com/jnataliaramirez)

## License 👩🏻‍🎓

[MIT](https://opensource.org/licenses/MIT)
