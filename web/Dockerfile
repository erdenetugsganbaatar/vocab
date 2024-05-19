FROM node:20

WORKDIR /app/web

COPY package.json yarn.lock /app/web

RUN yarn install

COPY . /app/web
