FROM node:latest

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json ./

COPY package-lock.json ./

RUN npm i

COPY . ./

EXPOSE 8083

CMD ["npm", "start"]
