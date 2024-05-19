FROM node:20

WORKDIR /app/back

COPY package.json yarn.lock /app/back


RUN yarn install

COPY . /app/back
