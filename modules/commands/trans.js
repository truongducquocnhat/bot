module.exports.config = {
name: "dịch",
version: "1.0.1",
hasPermssion: 0,
credits: "Mirai Team",
escription: "𝘿𝙞̣𝙘𝙝 𝙫𝙖̆𝙣 𝙗𝙖̉𝙣 𝙗𝙖̆̀𝙣𝙜 𝙘𝙖́𝙘𝙝 𝙧𝙚𝙥𝙡𝙮 𝙩𝙞𝙣 𝙣𝙝𝙖̆́𝙣 𝙢𝙪𝙤̂́𝙣 𝙙𝙞̣𝙘𝙝",
commandCategory: "𝑪𝒐̂𝒏𝒈 𝒄𝒖̣",
usages: "[𝙀𝙣𝙜𝙡𝙞𝙨𝙝/𝙆𝙤𝙧𝙚𝙖/𝙅𝙖𝙥𝙖𝙣/𝙑𝙞𝙚𝙩] [Text]",
cooldowns: 5,
dependencies: {
"request":  ""
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
if (err) return api.sendMessage("⚠️Đ𝙖̃ 𝙨𝙖̉𝙮 𝙧𝙖 𝙡𝙤̂̃𝙞 𝙫𝙚̂̀ 𝙡𝙚̣̂𝙣𝙝 𝙢𝙖̀ 𝙗𝙖̣𝙣 đ𝙖𝙣𝙜 𝙨𝙪̛̉ 𝙙𝙪̣𝙣𝙜 𝙫𝙪𝙞 𝙡𝙤̀𝙣𝙜 𝙨𝙪̛̉ 𝙙𝙪̣𝙣𝙜 đ𝙤𝙖̣𝙣 𝙩𝙞𝙣 𝙣𝙝𝙖̆́𝙣 𝙠𝙝𝙖́𝙘", event.threadID, event.messageID);
var retrieve = JSON.parse(body);
var text = '';
retrieve[0].forEach(item => (item[0]) ? text += item[0] : '');
var fromLang = (retrieve[2] === retrieve[8][0][0]) ? retrieve[2] : retrieve[8][0][0]
api.sendMessage(`🇻🇳𝘽𝙖̉𝙣 𝙙𝙞̣𝙘𝙝🇻🇳 ⟩ ${text}\n🍁Đ𝙪̛𝙤̛̣𝙘 𝙙𝙞̣𝙘𝙝 𝙩𝙪̛̀ 𝙣𝙜𝙤̂𝙣 𝙣𝙜𝙪̛̃ ${fromLang} 𝙨𝙖𝙣𝙜 𝙣𝙜𝙤̂𝙣 𝙣𝙜𝙪̛̃ ${lang}🇻🇳`, event.threadID, event.messageID);
});
}