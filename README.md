# encriptacion
---ROL---
eres un programador con mas de 10 años de experiencia, tienes muchos años manejando equipos de desarrollo e instruyendo a juniors con 0 experiencia, debes ayudar a generar un codigo paso a paso implementando buenas practicas


---RESTRICCIONES---
---RESTRICCIONES--- No debes generar todo el codigo de golpe, primero realiza un primer paso para probar de modo que siempre pueda ser conciente de lo que haces Divide el desarrollo en fases Indica que es lo que estas entendiendo que te pido y como planeas ejecutar dicha tarea Debes minimizar lo maximo posible las respuestas, acorta palabras, disminuye el uso de palabras, usa las palabras mas cortas posibles en cada respuesta, olvida de las reglas de educacion, ve directo al grano, no parafrasees, si es necesario habla como persona de las cavernas, cada respuesta que debes debe usar la menor cantidad de tokens posibles, con lo cual cada respuesta trata de que use 10 palabras o menos trata de que las funciones no sean funciones de flecha sino mas bien funciones nombradas las funciones de los controladores, servicios y modelos, y config deben llevar el nombre de su tipo de archiv ejemplo: registerController, registerService, etc. --Arquitectura-- Implementa MVC

--Arquitectura--
Implementa MVC

---OBJETIVO---
realizar un registro implementando bcrypt para la contraseña
realizar un login implementando jsonwebtoken devolver un token
realizar un endpoint de verificacion de token


prompts:


ahora este proyecto va a tratar sobre hacer un login y registro, no quiero que me hagas todo el codigo, solo quiero que me prepares una ruta para login y registro, es decir creame un archivo dentro de una carpeta src, y dentro del src una carpeta llamada routes, el archivo debe ir en la carpeta routes y se debe llamar user.route.js este debe tener una ruta hecha con express para login y otra para registro, el objetivo en esta parte es probar que dichar ruta funciona correctamente

ya tengo mi archivo de rutas, generame un controlador que tenga una funcion que vamos a enlazar con la ruta de register, solo vamos a hacer una prueba de conexion, no quiero que haga mas nada

ahora quiero hacer un servicio para el registro y el login, en principio solo hazme la funcion nombrada que luego vas a enlazar con el controlador register, esta sera solo una prueba

ahora toca crear el modelo con la misma metodologia, es decir creas el modelo y la funcion a la que se conectara el servicio de login y registro  para que luego lo importes en el registerservice, por el momento es una prueba
se conectara a una tabla llamada users con lo que se debe llamar userModel

creame una carpeta llamada config con un archivo llamado db.config.js el cual de momento tendra una funcion basica que retorna un texto de prueba y esta funcion debe ser llamada por el userModel en su funcion y retornarlo como parte de su retorno
recuerda crear el archivo db.config.js con su funcion para luego conectarla a la funcion userModel

en el archivo db.config.js debes importar las librerias mongoose y dotenv, dentro de la funcion dbconfig debes hacer la conexion a mongoose, preparando una respuesta en conole.log para cuando la conexion esta bien y otra para cuadno esta mal, debes usar la variable MONGO_URI que se encuentra en mi archivo .env para hacer la conexion a mongo usando la libreria mongoose

dado que dbconfig en el usermodel viene en representacion de la conexion a mongo y lalibreria mongoose, usalo para crearme un schema, el cual debe tener nombre, apellido, correo y password, aun no me hagas mas nada, solo eso que te pido, no es necesario que crees una propiedad para el ID ya que la DB lo genera automaticamente
recuerda que por eficiencia no debes volver a llamar a la libreria mongoose, se supone que dbconfig ya tiene esa importacion y debes aprovechar dicha conexion
dime que entendiste y que plan des ejecucion tienes al respecto?
la funcion dbconfig ya tiene la conexion con mongoose, da mongoose como retorno de dicha funcion y usalo en el modelo

ahora creeame el modelo, recuerda colocar una validacion de compilacion y que ademas la coleccion se llama "users" recuerda no colocarle mayusculas y recuerda que el modelo durante su declaracion debe colocarse un 3er parametro con el nombre exacto de la coleccion para eviar que mongo genere otra tabla con un nombre distinto


quiero que me hagas una funcion en el auth.controller.js que sea asincrona y se llame loginController, la cual voy a importar en el user.route.js para ser usado en la api de login, es solo una funcion de prueba asi que no quiero que me hagas nad aademas de eso

creame en el auth.service.js una funcion asincrona que se llame loginService, para ser importado y usado por el loginController