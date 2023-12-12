const fs = require("fs");
const utils = require("../utils/request");
const process = require("process");
const { error } = require("console");
const { request } = require("https");

function pwd(print) {
  print = process.cwd();
}

function date(print) {
  print(new Date().toString());
}

function echo(print, args) {
  print(args);
}

function ls(print) {
  fs.readdir(".", (error, files) => {
    if (error) {
      throw error;
    }
    let filesString = files.join(" ");
    print(filesString);
  });
}

function cat(print, args) {
  fs.readFile(args, "utf-8", (error, data) => {
    if (error) {
      throw error;
    }
    print(data);
  });
}

function head(print, args) {
  fs.readFile(args, "utf-8", (error, data) => {
    if (error) {
      throw error;
    }
    let linesData = data.split("\n")[0];
    print(linesData);
  });
}

function tail(print, args) {
  fs.readFile(args, "utf-8", (error, data) => {
    if (error) {
      throw error;
    }
    let linesData = data.split("\n");
    let lastLineData = linesData[linesData.length - 1].trim();
    print(lastLineData);
  });
}

function curl(print, path) {
  utils.request(path, (error, data) => {
    if (error) {
      throw new Error(error);
    }
    print(data);
  });
}

module.exports = {
  pwd,
  tail,
  date,
  curl,
  head,
  cat,
  ls,
  echo,
};
