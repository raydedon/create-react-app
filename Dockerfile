FROM node:latest

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./

RUN npm ci

COPY . ./

EXPOSE 3000

CMD ["/bin/sh", "script.sh"]
