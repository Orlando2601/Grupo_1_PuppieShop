# || PUPPIESHOP ||

![LogoPupieShop](https://user-images.githubusercontent.com/91704080/143088703-6ddc1b18-a004-419d-a22e-e754f7e5e2d2.png)

#### Pasos para iniciar el proyecto

##### Abrir la terminal dentro de la carpeta donde vamos a ejecutar el proyecto y escribir git clone https://github.com/Orlando2601/Grupo_1_PuppieShop.git

##### Si no estamos dentro de la carpeta escribimos cd Grupo_1_PuppieShop en la terminal y abrimos visual studio code para ingresar y ejecutamos los siguientes pasos

###### Paso 1 En la terminal escribir cd server para acceder a la carpeta del servidor ejecutar npm instal
###### Paso 2 Una vez termine de instalar nos dirigimos a cambiar user y password de la base de datos segun tengamos en nuestro ordenador, ingresando con ctrl + click sobre el link de abajo nos dirige al archivo de configuracion donde debemos cambiar {"username": "root", "password": ".."} del objeto como se muestra acontinuacion
 "development": {
    "username": "root",
    "password": "",
    "database": "productosDB",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
  ###### Link [config](./src/database/config/config.js)

  ###### Paso 3 Estando en la carpeta server escribimos npm start  
  ###### Observaremos como se crearon base de datos, tablas, conexiones, y llenado de tablas por defecto
  ###### Paso 4 Ingresamos al siguiente link http://localhost:3030/
  ###### Paso 5 En el icono de usuario podemos acceder con los siguientes usuarios
  ###### ADMIN: Quien tiene permisos de gestion de productos
  ###### NO LOG: Quien solo tiene permisos de visualizacion 
  ###### ADMIN: usuario: oswar@gmail.com | contrasenia: 00000000

  ###### Paso 6 abrimos otra terminal para levantar la carpeta del cliente, vamos a estar en la carpeta del proyecto asi que escribimos cd client debemos ver que si ingresamos a la carpeta client 
  ###### Paso 7 escribimos npm install para isntalar todas las dependencias del cliente
  ###### Paso 8 escribimos npm start para correr el proyecto con react
  ###### Podemos hacer cambios desde el proyecto levantado con el servidor o en la base de datos, y verlos actualizados en la pantalla del proyecto de react

  ###### con estos enlaces podemos ver la info consumida desde el front con react
  http://localhost:3030/api/usuarios
  http://localhost:3030/api/comida
  



## Descripci??n
PuppieShop es una tienda online para mascotas que cuenta con una gran variedad de productos para la diversi??n, entrenamiento, alimentaci??n y salud de tu mascota. Adem??s, cuenta con una red, a trav??s de la cual todos los usuarios pueden compartir tips de cuidado. PuppieShop cuenta con servicio de entrega a domicilio a nivel nacional.

## P??blico Objetivo
- Edad: Personas entre 15 y 60 a??os.
- Genero: Mujeres y hombres.
- Lugar de Residencia: Ciudades principales de Colombia.
- Profesi??n: Sin relevancia.
- Estrato socioecon??mico: Medio o alto.
- Intereses: Amantes de las mascotas que buscan el bienestar de ellos a trav??s de su desarrollo integral, brind??ndoles adem??s de amor, un entorno en el que sean felices.

## Colaboradores

### Oswar Baez
Soy un Ingeniero Mecatr??nico Msc Project Management,  ubicado en Barranquilla, Colombia. Actualmente en formaci??n del Desarrollo Web FullStack. Estoy interesado en el dise??o, seguridad y la aplicaci??n multidiciplinaria de sistemas el??ctricos, electronicos y de control con el desarrollo web.
Soy una persona disciplinada, con grandes valores, siempre dispuesto a ayudar a quien lo requiera.
Amante de la naturaleza y los animales. "Donde alguien huye de una abeja yo busco miel y la alimento".

### Rafael Estrada
Soy Ingeniero Mecatr??nico, vivo actualmente en Medell??n, Colombia.Estoy en formaci??n de desarrollo web fullstack, siempre he estado interesado en la tecnolog??a y aplicar estos conocimientos en la electr??nica.
Me considero una persona muy din??mica y que siempre quiere aprender m??s o fortalecer los conocimientos ya adquiridos.En mis tiempos libres prefiero saber que pasa a mi alrededor y aprender sobre las causas sociales.

### Hern??n D. Trujillo M.
Soy Ingeniero Industrial e Ingeniero Agr??cola, actualmente vivo en Rionegro, pero a partir de la pr??xima semana vivir?? en Apartad??. Estoy en formaci??n de Desarrollo Web Fullstack con el fin de reorientar mi experiencia profesional.
Soy una persona anal??tica, amante de la astronom??a y dedicada a mi familia. En los tiempos libres me gusta la lectura y compartir con mi hijo.
El mas bu??uelo del grupo

### Alvaro Andres Alfonso Rodriguez.

Soy futuro ingeniero de sistemas, decidi tomarme un a??o sabatico para convertirme en autodidacta y aprender el mundo de los sistemas. Aprendo con plataformas como #Platzi #Playground y hago parte de la aceleradora de talentos #Protalento; Gracias  #Playground y #Protalento me estoy formando como Desarrollador web FullStack; Soy una persona curiosa, me encanta nadar, los libros y viajar. 

