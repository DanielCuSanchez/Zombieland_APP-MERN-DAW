# Proyecto Zombieland

#### Autor: Daniel Cu Sánchez

## Intruciones

El proyecto cuenta con 2 carpetas
- Backend
- Frontend

## Stack de tecnologias
- Backend
    - Express
    - NodeJS
- Frontend
    - React

#### Requisitos para correr la APP:
- Postgres SQL
- Node JS


Posicionarse en cada carpeta y realizar lo siguiente:

``` npm install ```

Para correr el servidor (Modo producción)
``` npm start ```

Para correr el servidor (Modo desarrollo)
``` npm run dev ```

Para correr el fronted
``` npm start ```



#### Descripción

Para observar el nivel mínimo de desarrollo de competencias esperado hasta este punto:
La organización denominada Personas por la Ética en el Trato de los Zombis (PETZ) requiere un sistema accesible desde Internet con una base de datos centralizada para llevar un registro de zombis. Con este registro, PETZ podrá darle seguimiento a los zombis para asegurarse que reciban un trato adecuado considerando que alguna vez fueron humanos.

La aplicación debe permitir 2 tipos de registro:

1. Nuevos zombis con su nombre completo.
2. El estado actual del zombi (infección, desorientación, violencia, desmayo, transformación), con su fecha y hora de registro del nuevo estado, de tal forma que sea posible tener el histórico de todos los estados por los que ha pasado un zombi. El usuario no debe ingresar la fecha y hora, la aplicación debe hacerlo de manera automática.
Además, el sitio debe tener una sección para mostrar las siguientes consultas:

1. Todos los registros de zombis con todas las actualizaciones de cada uno.
2. La cantidad total de zombis registrados, y la cantidad de zombis en cada estado.
3. Los registros de zombis con el estado elegido por el usuario y la cantidad de ellos.
Debido a la política de transparencia y participación ciudadana, la aplicación debe permitir a cualquier persona hacer los registros y las consultas.