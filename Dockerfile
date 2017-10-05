FROM node

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY ./package.production.json /usr/src/app/package.json
COPY ./server.js /usr/src/app/server.js
COPY platforms/browser/www /usr/src/app/public

RUN npm install --production

EXPOSE 3000
CMD [ "npm", "start" ]