FROM node:lts-alpine as node-build0r

# I liked the mulit-stage Dockerfile
# https://www.middlewareinventory.com/blog/docker-vuejs/#Step_1_Creating_a_Dockerfile

WORKDIR /app
COPY . ./
RUN yarn install
RUN yarn build

# # production stage
FROM nginx:stable-alpine as final-stage
RUN apk update && apk add bash ca-certificates openssl

COPY --from=node-build0r /app/dist /opt/vue-openweather

COPY gencerts.sh self_cert.conf /tls/
WORKDIR /tls
RUN /tls/gencerts.sh /tls/self_cert.conf

COPY nginx.conf /etc/nginx/conf.d/vue-openweather.conf

EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]
