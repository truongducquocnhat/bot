module.exports.config = {
    name: "asuna",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Trương Đức Quốc Nhật",
    description: "random ảnh anime",
    commandCategory: "Hình Ảnh",
    usages: "anime",
    cooldowns: 20
};
module.exports.run = async function ({ api, event, args}) {
  const axios = require('axios');
  const request = require('request');
  const fs = require('fs');
  const { threadID, messageID } = event;

  var anh = [
"https://i.imgur.com/fzLuVVl.gif",
"https://i.imgur.com/6VyXFLv.jpg",
"https://i.imgur.com/vs8yAFN.jpg",
"https://i.imgur.com/lHy3s5l.jpg",
"https://i.imgur.com/2W3FICz.jpg",
"https://i.imgur.com/q5JYcoq.jpg",
"https://i.imgur.com/QE9YxbY.jpg",
"https://i.imgur.com/DJLyuUC.jpg",
"https://i.imgur.com/V6lHtto.jpg",
"https://i.imgur.com/DQTPy4F.jpg",
"https://i.imgur.com/6FNE19a.jpg",
"https://i.imgur.com/JkPVVRP.jpg",
"https://i.imgur.com/Pzyp0Xw.jpg",
"https://i.imgur.com/S4pvjYL.gif",
"https://i.imgur.com/OhZpahq.jpg",
"https://i.imgur.com/Y00zzBO.jpg",
"https://i.imgur.com/QnzG8e7.jpg",
"https://i.imgur.com/cnWp8uN.jpg",
"https://i.imgur.com/u2KljyB.jpg",
"https://i.imgur.com/JONdSDS.jpg",
"https://i.imgur.com/QzsKi8i.jpg",
"https://i.imgur.com/MesxGkC.jpg",
"https://i.imgur.com/5yoF1mt.jpg"
 ];
    const link = anh[Math.floor(Math.random() * anh.length)];
    
 var callback = () => api.sendMessage({body:`『 𝑻𝒓𝒖𝒐𝒏𝒈 𝑫𝒖𝒄 𝑸𝒖𝒐𝒄 𝑵𝒉𝒂𝒕 』
➣𝐏𝐡𝐨𝐧𝐞 : 𝟎𝟑𝟑𝟔𝟗𝟏𝟎𝟑𝟒𝟓🌸
➣𝐙𝐚𝐥𝐨 𝟎𝟑𝟑𝟔𝟗𝟏𝟎𝟑𝟒𝟓🌸
➣𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 : https://www.facebook.com/TruongDucQuocNhat 👨‍💻`,attachment: fs.createReadStream(__dirname + "/cache/Bok.png")}, event.threadID, event.messageID);
                return request(encodeURI(`${link}`)).pipe(fs.createWriteStream(__dirname + '/cache/Bok.png')).on('close', () => callback());
      
  }