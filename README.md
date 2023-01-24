# Portfolio · Abrahan Zarza

Este es el proyecto con el que he construído mi página web personal o portfolio. Echa un vistazo para conocerme mejor o incluso puedes usarlo para construir tu propio portfolio.

## Cómo empezar

### Requisitos del sistema

* [Docker](https://docs.docker.com/get-docker/)
* [Docker Compose](https://docs.docker.com/compose/install/)
* [GNU Make](https://www.gnu.org/software/make/#download)

### Instalación en local

Descargamos el proyecto con `
git clone https://github.com/AbrahanZarza/abrahanzarza.github.io.git`

Ejecutamos el comando `make initial-setup` para ejecutar la instalación inicial de dependencias del proyecto y configuraciones básicas.

Por último, para arrancar el servidor de desarrollo ejecutamos `make dev`. Esto nos arrancará la web en [http://localhost:3000](http://localhost:3000).

### Comandos útiles

##### Configuración inicial
```
make initial-setup
```

##### Arrancar servicios
```
make up
```

##### Parar servicios
```
make down
```

##### Ejecutar algún comando en el contenedor
```
make exec cmd="some comand"
```

##### Arrancar el servidor de desarrollo
```
make dev
```

## Producción

Para generar la app de producción ejecutaremos el comando `make build`. Con este comando se generará en la carpeta `/docs` el código que debemos poner en nuestro servidor web.