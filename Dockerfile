FROM node:16
WORKDIR /app 
COPY package*.json ./
RUN npm ci
COPY . .
EXPOSE 32121
CMD npm build && npm start
