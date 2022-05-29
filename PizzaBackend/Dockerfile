FROM node:12

WORKDIR /PizzaBackend

COPY . .

RUN npm ci

# RUN npm run build

EXPOSE 5000 

CMD ["npm","run", "start:prod"]