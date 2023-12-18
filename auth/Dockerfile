FROM node:16-alpine

WORKDIR /app

RUN npm i -g pnpm

COPY package.json .
RUN pnpm install --omit=dev
COPY . .

CMD ["pnpm", "start"]