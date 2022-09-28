module.exports.config = {
    name: "hinata",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Trương Đức Quốc Nhật",
    description: "random ảnh hinata",
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
"https://i.imgur.com/riIZ7U8.jpg", "https://i.imgur.com/MSq0sy6.jpg", "https://i.imgur.com/6gufbnh.jpg", "https://i.imgur.com/JOGWF3k.jpg", "https://i.imgur.com/SqObVBR.jpg", "https://i.imgur.com/KaTlbIt.jpg", "https://i.imgur.com/odpdGHC.jpg", "https://i.imgur.com/QaWSpyp.jpg", "https://i.imgur.com/RC4lz66.jpg", "https://i.imgur.com/wI1kDe4.jpg",  "https://i.imgur.com/Xq4DQIY.jpg", "https://i.imgur.com/J0W91Hd.jpg", "https://i.imgur.com/A5EccXB.jpg", "https://i.imgur.com/KyUeCw7.jpg", "https://i.imgur.com/scP8bXc.jpg", "https://i.imgur.com/PJ57SFw.jpg",  "https://i.imgur.com/PKxeBeU.jpg", "https://i.imgur.com/hmchP3r.jpg", "https://i.imgur.com/r98tsrB.jpg", "https://i.imgur.com/9voeGgJ.jpg", "https://i.imgur.com/0QvPvly.jpg", "https://i.imgur.com/bzDlDdW.jpg", "https://i.imgur.com/1ahem2Z.jpg", "https://i.imgur.com/GmJUSAr.jpg",
"https://i.imgur.com/4oQNQwq.jpg", 
"https://i.imgur.com/cw88ZAw.jpg",  "https://i.imgur.com/BJ986ic.jpg",  "https://i.imgur.com/pdeYCBx.jpg",
"https://i.imgur.com/9HsDea4.jpg",  "https://i.imgur.com/LFoMlbR.jpg",  "https://i.imgur.com/eknXZXn.jpg", 
"https://i.imgur.com/iveSUrt.jpg",
"https://i.imgur.com/rITeF21.jpg",
"https://i.imgur.com/Xs69Kma.jpg", 
"https://i.imgur.com/W4m7M57.jpg",
"https://i.imgur.com/zh63yrI.jpg",
"https://i.imgur.com/gXd2wWV.jpg",
"https://i.imgur.com/7PonV68.jpg",
"https://i.imgur.com/c0xnYSU.jpg",
"https://i.imgur.com/gmzz0Ni.jpg",
"https://i.imgur.com/ZEQFe5g.jpg",
"https://i.imgur.com/EpL3k9O.jpg",
"https://i.imgur.com/8ZO79VF.jpg",
"https://i.imgur.com/3eTo0R0.jpg",
"https://i.imgur.com/UpDbao2.jpg",
"https://i.imgur.com/iAPAUbC.jpg",
"https://i.imgur.com/ki8ONXo.jpg",
"https://i.imgur.com/oCpXxBn.jpg",
"https://i.imgur.com/FRN7sTB.jpg",
"https://i.imgur.com/ByH8qhI.jpg",
"https://i.imgur.com/p1aXFs9.jpg",
"https://i.imgur.com/9dIqExZ.jpg",
"https://i.imgur.com/MwhAqT8.jpg",
"https://i.imgur.com/BSkRrTA.jpg",
"https://i.imgur.com/KR1BfWt.jpg" 
 ];
    const link = anh[Math.floor(Math.random() * anh.length)];
    
 var callback = () => api.sendMessage({body:`『 𝑻𝒓𝒖𝒐𝒏𝒈 𝑫𝒖𝒄 𝑸𝒖𝒐𝒄 𝑵𝒉𝒂𝒕 』
➣𝐏𝐡𝐨𝐧𝐞 : 𝟎𝟑𝟑𝟔𝟗𝟏𝟎𝟑𝟒𝟓🌸
➣𝐙𝐚𝐥𝐨 𝟎𝟑𝟑𝟔𝟗𝟏𝟎𝟑𝟒𝟓🌸
➣𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 : https://www.facebook.com/TruongDucQuocNhat 👨‍💻`,attachment: fs.createReadStream(__dirname + "/cache/Bok.png")}, event.threadID, event.messageID);
                return request(encodeURI(`${link}`)).pipe(fs.createWriteStream(__dirname + '/cache/Bok.png')).on('close', () => callback());
      
}