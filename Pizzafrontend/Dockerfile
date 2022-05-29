FROM node:12

WORKDIR /PizzaFrontend

COPY . .

RUN npm ci

RUN npm run build

EXPOSE 4200 

CMD ["npm","run", "start"]