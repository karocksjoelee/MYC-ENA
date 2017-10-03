const chalk = require('chalk');
const err = chalk.red.bold;
const suc = chalk.green.bold;
const dev = chalk.magenta.bold;
const warn = chalk.yellow.bold;

exports.logErr = function (errorMessage) {
    console.log(err(errorMessage));
}

exports.logSuc = function (succMessage) {
    console.log(suc(succMessage));
}

exports.logWarn = function (warnMessage) {
    console.log(warn(warnMessage));
}

exports.logDev = function (devMessage) {
    console.log(dev(devMessage));
}

exports.errHelper = function(err,next) {

  this.logErr(`[MONGO] Operation Error :`);
  console.log(err);
  this.logErr(`------------------------------------------------------------------------------------`);
  if (next) {
    next();
  }

}
