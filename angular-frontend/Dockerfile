### STAGE 1: Build ###
FROM node:12.7-alpine AS builder
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

### STAGE 2: Run ###
FROM nginx:1.17.1-alpine AS crud-dynamodb-frontend
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /usr/src/app/dist/angular-frontend /usr/share/nginx/html
