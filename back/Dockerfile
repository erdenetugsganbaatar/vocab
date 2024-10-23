FROM node:20

WORKDIR /app/back

# little hack to ignore package-lock.json if it doesn't exist
COPY package.json package-lock.jso[n] /app/back/

RUN npm install


COPY . /app/back

RUN npx prisma generate
