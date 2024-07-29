# Utiliza la imagen oficial de Node.js como imagen base
FROM node:21

# Establece el directorio de trabajo en el contenedor
WORKDIR /dist

# Copia el archivo package.json y package-lock.json al contenedor
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código de la aplicación al contenedor
COPY . .


# Expone el puerto en el que la aplicación se ejecutará
ENV PORT=4000

# Comando para iniciar la aplicación
CMD ["npm", "start"]
