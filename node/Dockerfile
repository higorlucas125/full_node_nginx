FROM node:15

WORKDIR /usr/src/app

RUN npm install

COPY . .

EXPOSE 3000

# the command that starts our app
CMD ["node", "index.js"]