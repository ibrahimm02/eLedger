FROM node:12-alpine3.14

WORKDIR /eledger

COPY package.json /eledger

RUN npm install

COPY . /eledger

CMD node app.js

EXPOSE 8080