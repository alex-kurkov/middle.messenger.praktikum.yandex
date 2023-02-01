FROM node:16
WORKDIR /app 
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 32121
CMD npm run build && npm start