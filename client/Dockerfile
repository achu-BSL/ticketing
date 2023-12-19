FROM node:20-alpine

WORKDIR /app

RUN npm i -g pnpm

COPY package.json .

RUN pnpm install

COPY . .

CMD [ "pnpm", "run", "dev" ]
