FROM node:16.15.1-alpine

USER root

WORKDIR /usr/app

COPY package.json ./
COPY package-lock.json ./

RUN npm install --legacy-peer-deps

COPY . .

CMD ["npm", "start"]