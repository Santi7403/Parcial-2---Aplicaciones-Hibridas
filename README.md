
# PARCIAL 2 – APLICACIONES HÍBRIDAS - SANTIAGO MARTÍNEZ DONDE

Este es un proyecto FullStack hecho para el segundo parcial de la materia Aplicaciones Híbridas. La aplicación permite gestionar Comunas y Vecinos usando el stack MERN: MongoDB, Express, React y Node.js.

## Funcionalidades

### Backend (API - Node.js con Express)

- API hecha con Node y Express. Se encarga de manejar toda la lógica del servidor.
- Autenticación con JWT para registro e inicio de sesión seguros.
- Base de datos MongoDB para guardar la información.
- Se pueden registrar e iniciar sesión usuarios.
- Hay dos tipos de datos principales:
  - **Comunas:** con comisarías (comunal y vecinales) y una lista de barrios.
  - **Vecinos:** se pueden asociar a una comuna.
- Al mostrar vecinos, también se muestra su comuna automáticamente.
- Código ordenado en archivos: controladores, modelos, rutas y middlewares.

### Frontend (App web - React)

- Aplicación de una sola página (SPA) hecha con React.
- Usa componentes funcionales y hooks modernos.
- Navegación con React Router (Home, Login, Registro, Comunas, Vecinos).
- Separa la lógica de la interfaz y las conexiones con la API.
- Manejo de sesión con Context API.
- Conexión con el backend usando `axios`.
- Formularios con validaciones básicas.
- Interfaz sencilla para ver, agregar, editar y borrar comunas y vecinos.

## ¿Cómo ejecutar el proyecto?

### Requisitos:

Debés tener instalado:
- Node.js  
- npm  
- MongoDB Atlas  
- Git  

### 1. Configurar MongoDB Atlas

1. Crear una cuenta en [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register).
2. Crear un cluster.
3. En “Database Access”, crear un usuario con nombre y contraseña.
4. En “Network Access”, permitir tu IP (o usar `0.0.0.0/0` solo para pruebas).
5. En “Databases”, hacer clic en "Connect", luego "Connect your application", copiar el enlace, completar con tu usuario, contraseña y agregar el nombre de tu base al final.  
   Ejemplo:
   ```
   mongodb+srv://usuario:contraseña@cluster0.xxxxx.mongodb.net/parcial?retryWrites=true&w=majority
   ```

### 2. Configurar el Backend

1. Abrir una terminal y entrar a la carpeta:
   ```
   cd apiComunas
   ```
2. Crear un archivo `.env` con este contenido:
   ```
   MONGODB_URI=TU_CADENA_DE_CONEXIÓN
   PORT=5000
   JWT_SECRET=UN_SECRETO_LARGO
   JWT_EXPIRES_IN=1h
   ```
3. Instalar dependencias:
   ```
   npm install
   ```
4. Iniciar el servidor:
   ```
   npm install -g nodemon
   nodemon index.js
   ```
   Si todo está bien, va a mostrar “MongoDB conectado correctamente” y que el servidor está corriendo en el puerto 5000.

### 3. Configurar el Frontend

1. Abrir otra terminal.
2. Entrar a la carpeta:
   ```
   cd frontend
   ```
3. Instalar dependencias:
   ```
   npm install
   ```
4. Iniciar la app:
   ```
   npm start
   ```
   Se abrirá en el navegador en `http://localhost:3000`.

### 4. Usar la app

1. Asegurarse de que tanto backend como frontend estén funcionando.
2. Registrarse en la sección de registro.
3. Iniciar sesión.
4. Entrar a **Comunas** para crear, ver, editar o borrar comunas.
5. Entrar a **Vecinos** para hacer lo mismo, vinculando vecinos a comunas.
