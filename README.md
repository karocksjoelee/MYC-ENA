# MEAN-STARTER

This project using Mongo DB / Express / Angular-Cli / NodeJS for web application development. 



## Index 

  * [Development Enviroment Setup](#development-enviroment-setup)
  * [Getting Start](#getting-start)
  * Angular Cli Development Guide Line
  * Node Express Development Line
  * Deploying ( Production & Dockerize )


## Development Enviroment Setup

1. [Install MongoDB](https://www.mongodb.com/) - NoSql Database (This is optional , if you're sure you don't need a database)
2. [Install Node.js](https://nodejs.org) - Server 

To check if you have installed NodeJs , open your Terminal (MAC) or CMD (Windows), you should able to see your node version.
I recommend you using **LTS version** of NodeJs
```sh
$ node -v
v6.9.2
```

3. [Install Angular-Cli](https://github.com/angular/angular-cli) - Front-end frame-work for building Single Page Application

```sh
$ npm install -g @angular/cli
```

4. [Install Gulp](https://gulpjs.com/) - Automate web work-flow 

```sh
$ npm install -g gulp
```

## Getting Start 

Open your terminal and locate to the mean-starter project folder and install the dependencies by using : 
```sh
$ npm install 
```

Run gulp to start the node server : 
```sh
$ gulp
```

Another Terminal , run : 
```sh
$ ng build -w
```
This allows angular-cli to compile your angular application into dist folder. 

If you need Mongo DB : 
```sh
$ mongod
```
After installed mongodb in your compuer , you should put it into env-path. 




