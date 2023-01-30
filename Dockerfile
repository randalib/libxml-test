FROM node:14-alpine
WORKDIR /app

RUN apk add --update --no-cache \
    g++ make python3 

COPY package*.json ./
RUN npm i
COPY . .
EXPOSE 5000
CMD [ "npm", "start" ]

# sudo docker build --tag node-docker .
# sudo docker run -p 5000:5000 node-docker