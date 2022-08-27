#BUILD STAGE
FROM node:16.15-alpine3.16 as build

WORKDIR /usr/src/app

COPY . .

RUN npm install

RUN npm run build --prod

COPY ./src/app/modules/shared/mocks/post-mocks.json ./dist

#Install JSON SERVER
RUN npm install -g json-server

#NGINX STAGE
FROM nginx:1.22.0-alpine

VOLUME /var/cache/nginx

COPY --from=build /usr/src/app/dist/blog-techknowledge-front /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80 443 2015


#CMD
CMD ["json-server --watch ./dist/post-mocks.json"]
