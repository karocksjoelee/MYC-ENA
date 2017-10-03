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

exports.removeFileExt = function(fileName) {

  if (!typeof fileName === 'string') {
    this.logErr(`[CM][RemoveFileExt] Input is not a string`);
    return;
  }

  return this.upperFL(fileName.slice(0, fileName.indexOf('.')));

}

exports.upperFL = function(string) {

  if (!typeof fileName === 'string') {
    this.logErr(`[CM][UpperFirstLetter] Input is not a string`);
    return;
  }

  return this.charAt(0).toUpperCase() + string.slice(1);

}

exports.lowerFL = function(string) {

  if (!typeof fileName === 'string') {
    this.logErr(`[CM][LowerFirstLetter] Input is not a string`);
    return;
  }

  return this.charAt(0).toLowerCase() + string.slice(1);

}
