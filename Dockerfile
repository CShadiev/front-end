FROM node:13.12.0-alpine

WORKDIR /canada-roi

RUN apk add npm

COPY build .

RUN npm install -g serve

CMD serve -s -l 4200
