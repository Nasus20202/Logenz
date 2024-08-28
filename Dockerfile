FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY *.js ./

CMD ["node", "logenz.js"]