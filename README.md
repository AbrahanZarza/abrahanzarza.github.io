# Portfolio · Abrahan Zarza

![React](https://img.shields.io/badge/React-18.2-blue)
![Webpack](https://img.shields.io/badge/Webpack-5.75-green)
![Sass](https://img.shields.io/badge/Sass-5.75-orange)

This is the project I used to build my personal website or portfolio. Take a look to get to know me better, or you can even use it to build your own portfolio.

## How to start

### Prerequisites

* [Docker](https://docs.docker.com/get-docker/)
* [Docker Compose](https://docs.docker.com/compose/install/)

### Local development

Execute the following command to the initial project setup:
```
make initial-setup
```

Next, to start the local development environment run:
```
make dev
```

The project will be available in [http://localhost:3000](http://localhost:3000).

### Available commands

##### Stop local development environment
```
make down
```

##### Execute some shell instruction
```
make exec cmd="some comand"
```

##### Run local development environment
```
make dev
```

## Deploy to production

To generate all app assets you must run the following command:

```
make build
```

Next, you will have all the production resources at `/docs` root folder. You can put this files in your favourite server, hosting, etc.