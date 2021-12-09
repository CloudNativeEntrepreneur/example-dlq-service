FROM node:16.12.0-alpine3.13

WORKDIR /usr/src/app

COPY package.json package-lock.json ./
RUN npm ci --production

COPY src src

ENV PORT=3000
EXPOSE ${PORT}

CMD node ./src/bin/start.mjs