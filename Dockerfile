FROM node

WORKDIR /user


COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3001
CMD [ "node", "index.js"]
