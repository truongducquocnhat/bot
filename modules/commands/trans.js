module.exports.config = {
name: "dแปch",
version: "1.0.1",
hasPermssion: 0,
credits: "Mirai Team",
escription: "๐ฟ๐ฬฃ๐๐ ๐ซ๐ฬ๐ฃ ๐๐ฬ๐ฃ ๐๐ฬฬ๐ฃ๐ ๐๐ฬ๐๐ ๐ง๐๐ฅ๐ก๐ฎ ๐ฉ๐๐ฃ ๐ฃ๐๐ฬฬ๐ฃ ๐ข๐ช๐คฬฬ๐ฃ ๐๐ฬฃ๐๐",
commandCategory: "๐ช๐ฬ๐๐ ๐๐ฬฃ",
usages: "[๐๐ฃ๐๐ก๐๐จ๐/๐๐ค๐ง๐๐/๐๐๐ฅ๐๐ฃ/๐๐๐๐ฉ] [Text]",
cooldowns: 5,
dependencies: {
"request":ย  ""
}
};

module.exports.run = async ({ api, event, args }) => {
const request = global.nodemodule["request"];
var content = args.join(" ");
if (content.length == 0 && event.type != "message_reply") return global.utils.throwError(this.config.name, event.threadID,event.messageID);
var translateThis = content.slice(0, content.indexOf(" ->"));
var lang = content.substring(content.indexOf(" -> ") + 4);
if (event.type == "message_reply") {
translateThis = event.messageReply.body
if (content.indexOf("-> ") !== -1) lang = content.substring(content.indexOf("-> ") + 3);
else lang = global.config.language;
}
else if (content.indexOf(" -> ") == -1) {
translateThis = content.slice(0, content.length)
lang = global.config.language;
}
return request(encodeURI(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${lang}&dt=t&q=${translateThis}`), (err, response, body) => {
if (err) return api.sendMessage("โ ๏ธฤ๐ฬ ๐จ๐ฬ๐ฎ ๐ง๐ ๐ก๐คฬฬ๐ ๐ซ๐ฬฬ ๐ก๐ฬฃฬ๐ฃ๐ ๐ข๐ฬ ๐๐ฬฃ๐ฃ ฤ๐๐ฃ๐ ๐จ๐ชฬฬ ๐๐ชฬฃ๐ฃ๐ ๐ซ๐ช๐ ๐ก๐คฬ๐ฃ๐ ๐จ๐ชฬฬ ๐๐ชฬฃ๐ฃ๐ ฤ๐ค๐ฬฃ๐ฃ ๐ฉ๐๐ฃ ๐ฃ๐๐ฬฬ๐ฃ ๐ ๐๐ฬ๐", event.threadID, event.messageID);
var retrieve = JSON.parse(body);
var text = '';
retrieve[0].forEach(item => (item[0]) ? text += item[0] : '');
var fromLang = (retrieve[2] === retrieve[8][0][0]) ? retrieve[2] : retrieve[8][0][0]
api.sendMessage(`๐ป๐ณ๐ฝ๐ฬ๐ฃ ๐๐ฬฃ๐๐๐ป๐ณ โฉ ${text}\n๐ฤ๐ชฬ๐คฬฬฃ๐ ๐๐ฬฃ๐๐ ๐ฉ๐ชฬฬ ๐ฃ๐๐คฬ๐ฃ ๐ฃ๐๐ชฬฬ ${fromLang} ๐จ๐๐ฃ๐ ๐ฃ๐๐คฬ๐ฃ ๐ฃ๐๐ชฬฬ ${lang}๐ป๐ณ`, event.threadID, event.messageID);
});
}