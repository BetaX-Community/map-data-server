FROM node:20-alpine

WORKDIR /app

COPY . /app

RUN npm i

RUN npm install pm2 -g

RUN pm2 install pm2-logrotate
RUN pm2 set pm2-logrotate:retain 30
RUN pm2 set pm2-logrotate:dateFormat YYYY-MM-DD_HH-mm-ss
RUN pm2 set pm2-logrotate:max_size 10K
RUN pm2 set pm2-logrotate:rotateInterval 0 0 * * *
RUN pm2 set pm2-logrotate:rotateModule true


CMD [ "pm2-runtime", "functions/app.js" ]
