FROM node:alpine as builder

EXPOSE 8080

WORKDIR '/app'

COPY ./package.json .

RUN ["npm", "install"]

COPY . .

RUN ["npm", "run", "build"]

FROM nginx

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80



