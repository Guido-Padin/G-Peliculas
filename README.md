Entrega del Challenge NodeJS

Alumno: Guido Padin

Dentro del proyecto se encuentra una carpeta con el nombre 'sql', donde esta el archivo original de movies_db.
De este archivo hice la separacion de las tablas que voy a necesitar(movies, actors, actor_movie, genres, y users), y de los inserts necesarios. Ademas agregue la columna 'deleted_at' para poder realizar la eliminacion de datos usando la funcionalidad 'paranoid' de sequelize, y tambien la columna 'admin' en users para poder diferenciar al usuario admin del resto. La contraseña del usuario Admin es admin2021

Pasos a seguir:

-Copiar el contenido del archivo 'tablas.sql', pegarlo en un query del gestor de bases de datos, y hacerlo correr
-Copiar el contenido del archivo 'inserts.sql', pegarlo en un query del gestor de bases de datos, y hacerlo correr
-Abrir una terminal en el proyecto
-Escribir el comando 'npm install' y darle enter para descargar las librerias necesarias
-Escribir el comando 'npm test' y darle enter para levantar el servidor 