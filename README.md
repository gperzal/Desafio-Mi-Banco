# Mi Banco - Sistema de Transacciones

Mi Banco es una aplicación de simulación bancaria diseñada para manejar transacciones básicas entre cuentas. Permite a los usuarios realizar transferencias, consultar saldos y ver las últimas transacciones realizadas.

## Despliegue

La aplicación está desplegada en Render y se puede acceder a ella a través del siguiente enlace:

[Mi Banco en Render](https://mi-banco.onrender.com/)


## Características

- **Transferencias**: Realiza transferencias de fondos entre cuentas asegurándote de que las cuentas no queden con saldo negativo.
- **Consulta de Saldos**: Permite consultar el saldo actual de cualquier cuenta registrada en el sistema.
- **Historial de Transacciones**: Muestra las últimas 10 transacciones realizadas para una cuenta específica.

## Tecnologías Utilizadas

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![Neon](https://img.shields.io/badge/sequelize-24242d?style=for-the-badge&logo=sequelize&logoColor=2596be&labelColor=24242d) ![DOTENV](https://img.shields.io/badge/dotenv-0000?style=for-the-badge&logo=dotenv&logoColor=fff&color=b0a321) ![POSTGRES](https://img.shields.io/badge/Postgres-436590?style=for-the-badge&logo=postgresql&logoColor=fff&color=436590) ![Neon](https://img.shields.io/badge/neon-0c0c0c?style=for-the-badge&logo=https%3A%2F%2Fneon.tech%2F_next%2Fstatic%2Fsvgs%2Fe9de8fc7653111a1423e0d227c0c5e9f.svg)

## Configuración del Proyecto

### Requisitos Previos

Asegúrate de tener instalado Node.js, npm y PostgreSQL en tu sistema. Puedes descargarlos desde sus respectivos sitios web:

- Node.js: https://nodejs.org/
- PostgreSQL: https://www.postgresql.org/download/

### Instalación

1. Clona este repositorio en tu máquina local:

`git clone https://github.com/gperzal/Desafio-Mi-Banco.git`

2. Navega al directorio del proyecto:

`cd Desafio-Mi-Banco`

3. Instala las dependencias necesarias:

`npm i`

4. Configura tu base de datos PostgreSQL y ajusta las credenciales de conexión en el archivo config/database.js.

crea tu BD de manera local o remota segun tus preferencias


5. Inicia el servidor:

`npm start`


El servidor debería estar corriendo y accesible en http://localhost:3000.

## Uso

- Para realizar una transferencia, accede a la ruta / y utiliza el formulario de transferencia.
- Para consultar el saldo, utiliza el formulario de consulta de saldo.
- Para ver las últimas transacciones, ingresa el ID de la cuenta en el formulario correspondiente.
