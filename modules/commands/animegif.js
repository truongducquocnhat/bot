module.exports.config = {
    name: "animegif",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Trương Đức Quốc Nhật",
    description: "random ảnh anime",
    commandCategory: "Hình Ảnh",
    usages: "anime",
    cooldowns: 5
};
module.exports.run = async function ({ api, event, args}) {
  const axios = require('axios');
  const request = require('request');
  const fs = require('fs');
  const { threadID, messageID } = event;

  var anh = [
"https://i.imgur.com/gkqTKD4.gif",
"https://i.imgur.com/G8zXA1X.gif",
"https://i.imgur.com/v9PKLmO.gif",
"https://i.imgur.com/v9PKLmO.gif",
"https://i.imgur.com/gkqTKD4.gif", 
"https://i.imgur.com/G8zXA1X.gif",
"https://i.imgur.com/QI07WCV.gif",
"https://i.imgur.com/ZmMR3Xq.gif",
"https://i.imgur.com/4Ad9iwh.gif",
"https://i.imgur.com/JOtxMGW.gif", 
"https://i.imgur.com/qXIZLNG.gif", 
"https://i.imgur.com/1NpU3TB.gif", 
"https://i.imgur.com/qlPCzMA.gif", 
"https://i.imgur.com/5kb586d.gif",
"https://i.imgur.com/gLZj036.gif",
"https://i.imgur.com/IN7nqfG.gif",
"https://i.imgur.com/6IuQAgm.gif", 
"https://i.imgur.com/0mIzpRL.gif", 
"https://i.imgur.com/h8eoABy.gif", 
"https://i.imgur.com/NUFYgY2.gif", 
"https://i.imgur.com/iIOkFLt.gif",
"https://i.imgur.com/8Mh2LCe.gif",
"https://i.imgur.com/9NuHOOP.gif",
"https://i.imgur.com/sDMgOa2.gif", 
"https://i.imgur.com/kj4vwiZ.gif",
"https://i.imgur.com/D71TYQA.gif",
"https://i.imgur.com/HUZE3E0.gif",
"https://i.imgur.com/iRg0iU4.gif",
"https://i.imgur.com/GwSrAkz.gif",
"https://i.imgur.com/TfDiGHB.gif",
"https://i.imgur.com/gCzj9gK.gif",
"https://i.imgur.com/1GoIYM0.gif", 
"https://i.imgur.com/xPm6EeQ.gif", 
"https://i.imgur.com/bpt6UyZ.gif",
"https://i.imgur.com/baeC0WV.gif",
"https://i.imgur.com/1gOdp9A.gif", 
"https://i.imgur.com/x63gdqs.gif", 
"https://i.imgur.com/XPc0yXG.gif", 
"https://i.imgur.com/0noYY1A.gift",
"https://i.imgur.com/5AcmPMb.gif",
"https://i.imgur.com/w9R5l0t.gif",
"https://i.imgur.com/53KQkAB.gif",
"https://i.imgur.com/5AcmPMb.gif", 
"https://i.imgur.com/w9R5l0t.gif",
"https://i.imgur.com/53KQkAB.gif", 
"https://i.imgur.com/zDMnuV2.gif", 
"https://i.imgur.com/eaGxidT.gif", 
"https://i.imgur.com/hxrOZ9I.gif",
"https://i.imgur.com/hxrOZ9I.gif", 
"https://i.imgur.com/yxgDbU4.gif", 
"https://i.imgur.com/IFMxTiQ.gif", 
"https://i.imgur.com/dNpdSCH.gif", 
"https://i.imgur.com/ngJniqr.gif", 
"https://i.imgur.com/NvkEaW2.gif", 
"https://i.imgur.com/DkP8yZd.gif", 
"https://i.imgur.com/cWuuOs6.gif", 
"https://i.imgur.com/4y8d0wL.gif", 
"https://i.imgur.com/FQFvSYo.gif", 
"https://i.imgur.com/XaF4dkY.gif", 
"https://i.imgur.com/PwYNhI8.gif", 
"https://i.imgur.com/O9mQsoe.gif", 
"https://i.imgur.com/zX6YB8X.gif "
];
    const link = anh[Math.floor(Math.random() * anh.length)];
    
     var callback = () => api.sendMessage({body:`『 𝑻𝒓𝒖𝒐𝒏𝒈 𝑫𝒖𝒄 𝑸𝒖𝒐𝒄 𝑵𝒉𝒂𝒕 』
➣𝐏𝐡𝐨𝐧𝐞 : 𝟎𝟑𝟑𝟔𝟗𝟏𝟎𝟑𝟒𝟓🌸
➣𝐙𝐚𝐥𝐨 𝟎𝟑𝟑𝟔𝟗𝟏𝟎𝟑𝟒𝟓🌸
➣𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 : https://www.facebook.com/TruongDucQuocNhat 👨‍💻`,attachment: fs.createReadStream(__dirname + "/cache/Bok.png")}, event.threadID, event.messageID);
                return request(encodeURI(`${link}`)).pipe(fs.createWriteStream(__dirname + '/cache/Bok.png')).on('close', () => callback());    
}