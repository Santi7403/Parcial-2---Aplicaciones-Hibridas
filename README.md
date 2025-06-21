# PARCIAL 2 – APLICACIONES HÍBRIDAS - SANTIAGO MARTINEZ DONDE
Este es un proyecto FullStack desarrollado como parte del segundo parcial de la materia Aplicaciones Híbridas.
El proyecto implementa una aplicación de gestión de Comunas y Vecinos, utilizando el stack MERN (MongoDB, Express.js, React.js, Node.js).

## Características Principales

### Backend (API REST - Node.js con Express)
-   **API RESTful:** Desarrollada con Node.js y Express.js, sirviendo como el cerebro de la aplicación.
-   **Autenticación JWT:** Implementación robusta de JSON Web Tokens (JWT) para la gestión segura de usuarios (registro e inicio de sesión).
-   **Base de Datos NoSQL:** Utiliza MongoDB (a través de Mongoose) para el almacenamiento de datos.
-   **Gestión de Usuarios:** Permite el registro y la autenticación de usuarios.
-   **Entidades:** Gestión completa (CRUD) de dos entidades principales: **Comunas** y **Vecinos**.
    -   **Comunas:** Incluye campos complejos como datos de comisarías (comunal y vecinales anidadas) y barrios (array de strings).
    -   **Vecinos:** Permite asociar vecinos a una Comuna específica a través de referencias (`ObjectId`).
-   **Populate:** Al obtener vecinos, se popula automáticamente la información de la comuna a la que pertenecen.
-   **Estructura Modular:** Backend organizado en controladores, modelos, routers y middlewares.

### Frontend (Aplicación Web - React.js)
-   **SPA (Single Page Application):** Desarrollada con React.js, ofreciendo una experiencia de usuario fluida y dinámica.
-   **Componentes Funcionales y Hooks:** Utilización de las características modernas de React para una lógica de componentes clara y reutilizable.
-   **Enrutamiento Declarativo:** Implementación de React Router DOM para la navegación entre distintas vistas (Home, Login, Registro, Comunas, Vecinos).
-   **Separación de Lógica:** Clara división entre la lógica de la UI y la lógica de interacción con la API (mediante servicios).
-   **Manejo de Estado Global:** Uso del Context API de React para gestionar el estado de autenticación de forma global.
-   **Consumo de API:** Interacción con el Backend mediante `axios` para todas las operaciones CRUD y autenticación.
-   **Validación de Formularios:** Implementación de validaciones básicas en el cliente.
-   **Interfaz de Usuario:** Diseño limpio y funcional que permite la visualización, creación, edición y eliminación de Comunas y Vecinos.    

## Cómo Levantar el Proyecto????

### Requisitos Previos:

Tener instalado en tu sistema:
-   [Node.js](https://nodejs.org/en/download/) 
-   [npm](https://www.npmjs.com/get-npm) 
-   [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register) 
-   [Git](https://git-scm.com/downloads)

### 1. Configuración de la Base de Datos (MongoDB Atlas)

1.  Crea una cuenta gratuita en [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register).
2.  Crea un nuevo Cluster
3.  Una vez creado el cluster, ve a la sección **"Database Access"** (en Security) y crea un nuevo usuario de base de datos (`username` y `password`). Anótalos.
4.  Ve a la sección **"Network Access"** (en Security) y añade tu dirección IP actual a la lista de acceso (o temporalmente, para desarrollo, puedes añadir `0.0.0.0/0` para permitir acceso desde cualquier lugar, ¡pero esto no es seguro para producción!).
5.  Ve a **"Databases"** (en Deployment), haz clic en "Connect" en tu cluster, selecciona "Connect your application", elige el driver Node.js y **copia la "Connection String"**. Se verá algo como:
    `mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority`
    **Reemplaza `<username>` y `<password>`** con los que creaste.
    **Añade el nombre de tu base de datos al final** (ej. `/parcial`) para que la cadena quede así:
    `mongodb+srv://tu_usuario_db:tu_password_db@cluster0.xxxxx.mongodb.net/parcial?retryWrites=true&w=majority`

### 2. Configuración del Backend

1.  **Navega a la carpeta del Backend:**
    ```bash
    cd apiComunas
    ```
2.  **Crea un archivo `.env`** en la raíz de esta carpeta (`apiComunas/.env`).
    Copia y pega el siguiente contenido, reemplazando los valores:
    ```
    MONGODB_URI=TU_CADENA_DE_CONEXION_DE_MONGODB_ATLAS_CON_USUARIO_Y_PASSWORD
    PORT=5000
    JWT_SECRET=UN_SECRETO_LARGO_Y_ALEATORIO_PARA_JWT (ej: genera uno con 'node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"')
    JWT_EXPIRES_IN=1h
    ```
3.  **Instala las dependencias del Backend:**
    ```bash
    npm install
    ```
4.  **Inicia el servidor del Backend:**
    ```bash
    npm install -g nodemon # Instala nodemon globalmente si no lo tienes
    nodemon index.js
    ```
    El servidor debería mostrar en la consola: "MongoDB conectado correctamente" y "Servidor backend escuchando en el puerto 5000". **Deja esta terminal abierta.**

### 3. Configuración del Frontend

1.  **Abre una NUEVA TERMINAL.**
2.  **Navega a la carpeta del Frontend:**
    ```bash
    cd frontend
    ```
3.  **Instala las dependencias del Frontend:**
    ```bash
    npm install
    ```
4.  **Inicia la aplicación de React:**
    ```bash
    npm start
    ```
    Esto abrirá tu aplicación en el navegador, generalmente en `http://localhost:3000`.

### 4. Uso de la Aplicación

1.  Una vez que ambas terminales estén corriendo sin errores y tu navegador muestre la aplicación React en `http://localhost:3000`.
2.  **Regístrate:** Crea una nueva cuenta de usuario en la página de registro (`/register`).
3.  **Inicia Sesión:** Utiliza tus nuevas credenciales para iniciar sesión (`/login`).
4.  **Gestiona Comunas:** Navega a la sección de Comunas (`/comunas`) para crear, ver, editar y eliminar datos de comunas.
5.  **Gestiona Vecinos:** Navega a la sección de Vecinos (`/vecinos`) para crear, ver, editar y eliminar datos de vecinos, asociándolos a las comunas que hayas creado.

