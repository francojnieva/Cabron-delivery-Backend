# Cabrón Delivery - Backend
<a href="https://postimg.cc/D8H7Z3Tb">
  <img src="https://i.postimg.cc/kgXGT7Yw/banner-delivery.png" alt="banner-delivery" width="200"/>
</a>


## Descripción del Proyecto
Cabrón Delivery es una aplicación de delivery de comidas desarrollada con Node.js, Express y MongoDB. La aplicación permite la gestión de productos y usuarios a través de un CRUD completo. Los usuarios tienen la posibilidad de registrarse y hacer pedidos, mientras que los administradores tienen control total sobre los productos y los usuarios de la aplicación. La aplicación incluye funcionalidades adicionales como el envío de correos electrónicos de confirmación y la gestión de imágenes para los productos.
## Tecnologías Utilizadas
![Static Badge](https://img.shields.io/badge/nodeJS-5FA04E?style=for-the-badge&logo=Node.js&logoColor=%23fff) **Entorno de ejecución para construir la lógica del servidor.**

![Static Badge](https://img.shields.io/badge/express-000000?style=for-the-badge&logo=Express&logoColor=%23fff) **Framework web para Node.js que facilita la creación de APIs.**

![Static Badge](https://img.shields.io/badge/mongodb-47A248?style=for-the-badge&logo=MongoDB&logoColor=%23fff) **Base de datos NoSQL utilizada para almacenar la información de usuarios y productos.**

![Static Badge](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=json%20web%20token) **Implementado para la autenticación segura de los usuarios.**

![Static Badge](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary) **Servicio de almacenamiento en la nube para la gestión de imágenes.**

![Static Badge](https://img.shields.io/badge/Multer-F46519?style=for-the-badge&logo=multer)**Middleware para manejar la carga de archivos, utilizado en conjunto con Cloudinary.**

![Static Badge](https://img.shields.io/badge/Nodemailer-67C52A?style=for-the-badge&logo=nodemailer) **Librería para el envío de correos electrónicos, utilizada para la confirmación de cuentas y pagos**

![Static Badge](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=Vercel&logoColor=%23fff) **Plataforma utilizada para desplegar la aplicación.**

![Static Badge](https://img.shields.io/badge/postman-FF6C37?style=for-the-badge&logo=postman&logoColor=%23fff) **Herramienta utilizada para probar y documentar los endpoints de la API.**

![Visual Studio Code](https://img.shields.io/badge/Visual_Studio_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white) **IDE utilizado para el desarrollo del proyecto.**

## Estructura de Carpetas
[![cabron-carpetas.png](https://i.postimg.cc/HsmV7wQq/cabron-carpetas.png)](https://postimg.cc/K49Z6gpf)

## Despliegue
La aplicación está deployada en Vercel.
## Pruebas
Para probar los endpoints se utilizó Postman.

[![cabron-postman.png](https://i.postimg.cc/DfLSZjbQ/cabron-postman.png)](https://postimg.cc/Jt7rYQxt)

## Configuración e Instalación
1. Clonar el repositorio:

git clone https://github.com/francojnieva/Cabron-delivery-Backend.git

cd cabron-delivery-backend

2. Instalar las dependencias:
 
npm install

3. Configurar variables de entorno:

CONNECTION_DB=tu_mongodb_uri

JWT_SECRET_KEY=clave-secreta

JWT_EXPIRATION=tiempo-de-expiración

GMAIL_USER=tu-gmail-nodemailer

GMAIL_PASS=tu-contraseña-nodemailer

CLOUDINARY_NAME=tu_cloudinary_cloud_name

CLOUDINARY_API_KEY=tu_cloudinary_api_key

CLOUDINARY_SECRET=tu_cloudinary_api_secret

4. Iniciar la aplicación:

npm run dev

[Ver repositorio Cabrón Delivery - Frontend](http://https://github.com/francojnieva/Cabron-delivery-Frontend.git "Ver repositorio Cabrón Delivery Frontend")



