FROM nginx:alpine-slim

COPY config/nginx.conf /etc/nginx
COPY dist /usr/share/nginx/html

EXPOSE 8080
