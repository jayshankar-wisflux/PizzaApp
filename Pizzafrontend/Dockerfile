FROM node:12 as builder

WORKDIR /PizzaFrontend

COPY . .

RUN npm ci

RUN npm run build

EXPOSE 4200 

FROM nginx:alpine

RUN rm /etc/nginx/conf.d/default.conf
COPY --from=builder /PizzaFrontend/nginx/app.conf  /etc/nginx/conf.d
COPY --from=builder /PizzaFrontend/dist/my-first-project /usr/share/nginx/html

# CMD ["npm","run", "start","--", "--host=0.0.0.0"]