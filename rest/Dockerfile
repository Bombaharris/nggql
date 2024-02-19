FROM node:16

RUN mkdir -p /rest
WORKDIR /rest

COPY package.json .
RUN npm install
COPY . .

EXPOSE 5000

CMD ["npm", "run", "start:dev"]
