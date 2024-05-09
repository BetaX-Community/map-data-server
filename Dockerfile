FROM node:20-alpine

RUN mkdir -p /app

COPY . /app

WORKDIR /app

RUN npm i && npm i -g nodemon

CMD npm start
