FROM node:boron

# Create app directory
RUN mkdir -p /usr/src/myc-ena
WORKDIR /usr/src/myc-ena

# Install app dependencies
COPY package.json /usr/src/myc-ena
RUN npm install gulp -g
RUN npm install

# Bundle app source
COPY . /usr/src/myc-ena

EXPOSE 7500
CMD [ "npm", "start" ]