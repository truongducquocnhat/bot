module.exports.config = {
    name: "hi",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Ryo đ§",
    description: "",
    commandCategory: "Noprefix",
    usages: "",
    cooldowns: 0,
    denpendencies: {
        "fs": "",
        "request": ""
    }
};

module.exports.handleEvent = async ({ event, api , Users }) => {
    const fs = require("fs");
    let name = await Users.getNameUser(event.senderID)
    const time = require("moment-timezone").tz("Asia/Ho_Chi_Minh");
  const gio = time.format("HH");
  const moment = require("moment-timezone");
    var bok = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss");
  
  if (gio >= 5) get = "đđ¨ĖŖĖđ­ đđŽđ¨ĖĖđĸ đđĖđ§đ "
  if (gio >= 11) get = "đđ¨ĖŖĖđ­ đđŽđ¨ĖĖđĸ đđĢđŽĖđ"
  if (gio >= 14) get = "đđ¨Ė đđ¨ĖŖĖđ­ đđŽđ¨ĖĖđĸ đđĄđĸđĖĖđŽ"
  if (gio >= 19) get = "đđ¨ĖŖĖđ­ đđŽđ¨ĖĖđĸ đđ¨ĖĖđĸ"
  if (gio >= 23) get = "đđ¨ĖŖĖđ­ đđŽđ¨ĖĖđĸ đđ¨ĖĖđĸ"  
  
  const icon = ["â¤ī¸","đ","đ","đ","đ","đ","đ","đ","đĨ°","đ"];
  var rdIcon = icon[Math.floor(Math.random() * icon.length)];
  const dat = ["đđŽđĸ đđĖ","đđĸĖđ§đĄ đđĖđ§","đđđ˛ đđĖĖđ§","đđŽđĨđĨ đđĖđ§đ  đđŽĖđ¨ĖĖŖđ§đ ","đđŽđ˛đĖŖĖđ­ đđ¨ĖĖđĸ", "đđĸĖđ§đĄ đđĖđ¨"];
  var rdDat = dat[Math.floor(Math.random() * dat.length)];
  const value = [`${rdIcon} đđđĨđĨđ¨ đđĸđ§ đđĄđĖđ¨ đđĖ ${name} đđĄđĖ\nđđĖđ˛ đđĸđ¨ĖĖ đđĖ ${bok}\nđđĄđŽĖđ đđĖ đđ¨Ė ${get} ${rdDat}  đĨŗ`, `${rdIcon} đđđĨđĨđ¨ đđĸđ§ đđĄđĖđ¨ đđĖ ${name} đđĄđĖ\nđđĖđ˛ đđĸđ¨ĖĖ đđĖ ${bok}\nđđĄđŽĖđ đđĖ đđ¨Ė ${get} ${rdDat}`, `đ¸ ${rdIcon} đđđĨđĨđ¨ đđĸđ§ đđĄđĖđ¨ đđĖ ${name}\nđđĖđ˛ đđĸđ¨ĖĖ đđĖ ${bok}\nđđĄđŽĖđ đđĖ đđ¨Ė ${name} ${get} ${rdDat}`];
  var rdValue = value[Math.floor(Math.random() * value.length)];
        var msg = {
                body: rdValue,
            }
    if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "Hi")) {
  return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase().indexOf("chÃ o") != -1) {
  return api.sendMessage(msg,event.threadID,event.messageID);}
    if ((event.body.toLowerCase() == "hÃ­") || (event.body.toLowerCase() == "HÃ­")) {
  return api.sendMessage(msg,event.threadID,event.messageID);}
    if ((event.body.toLowerCase() == "hÄiii") || (event.body.toLowerCase() == "HÄiii")) {
  return api.sendMessage(msg,event.threadID,event.messageID);}
    if ((event.body.toLowerCase() == "lÃ´") || (event.body.toLowerCase() == "LÃ´")) {
  return api.sendMessage(msg,event.threadID,event.messageID);}
    };
module.exports.run = async ({ event, api }) => {
return api.sendMessage("DÃšng sai cÃĄch ráģi lÃĒu lÃĒu",event.threadID)
    }