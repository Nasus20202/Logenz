FROM node:22-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY *.js ./

CMD ["node", "logenz.js"]