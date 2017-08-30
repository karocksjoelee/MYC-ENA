FROM node:boron

# Create app directory
RUN mkdir -p /usr/src/mean-starter
WORKDIR /usr/src/mean-starter

# Install app dependencies
COPY package.json /usr/src/mean-starter
RUN npm install gulp -g
RUN npm install

# Bundle app source
COPY . /usr/src/mean-starter

EXPOSE 7500
CMD [ "npm", "start" ]
