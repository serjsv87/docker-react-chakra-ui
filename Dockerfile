# frontend/Dockerfile
FROM node:18-alpine

WORKDIR /home/node/app

COPY package*.json .

RUN yarn install

COPY . .

CMD ["yarn", "run", "start"]
