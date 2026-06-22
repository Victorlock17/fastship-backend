# FastShip Backend - API de Gestión de Envíos

API REST modular desarrollada con Node.js, Express y MongoDB (Mongoose) para la optimización y rastreo de paquetes de la startup FastShip.

##  Requisitos Previos
- Node.js (Versión 18 o superior recomendada)
- MongoDB Compass o una cuenta en MongoDB Atlas

##  Instalación y Configuración

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/Victorlock17/fastship-backend.git](https://github.com/Victorlock17/fastship-backend.git)
   cd fastship-backend
Instalar las dependencias de Node.js:

    npm install
    
Iniciar el servidor de desarrollo:

    npm run dev
    
Método,Endpoint,Descripción
               POST,/api/envios,Registrar un nuevo envío en la base de datos.
               GET,/api/envios,Consultar la lista de envíos activos (No entregados).
               GET,/api/envios/:idPedido,Buscar un envío específico por su ID de pedido.
               PUT,/api/envios/:idPedido,Actualizar el estado del envío.
               
               
