module.exports.config = {
	name: 'getevent',
	version: '1.0.0',
	hasPermssion: 3,
	credits: 'D-Jukie',
	description: '',
	commandCategory: 'Dành cho Admin',
	usages: 'givefile',
	cooldowns: 0
};

module.exports.run = async ({ args, api, event, Users }) => {
	const fs = require("fs-extra")
	const stringSimilarity = require('string-similarity');
	const file = args.join(" ");
	if(!file) return api.sendMessage('Tên file không được bỏ trống', event.threadID, event.messageID);
	if(event.type == "message_reply") {
		var uid = event.messageReply.senderID
		var name = (await Users.getData(uid)).name
		if(!fs.existsSync(__dirname+"/../events/"+file)) { 
			var mdl = args.splice(1, args.length);
		  	mdl = fs.readdirSync(__dirname).filter((file) => file.endsWith(".js"))
		  	mdl = mdl.map(item => item.replace(/\.js/g, ""));
			var checker = stringSimilarity.findBestMatch(file, mdl)
		    if (checker.bestMatch.rating >= 1) var search = checker.bestMatch.target;
        	if(search == undefined) return api.sendMessage('🔎 Không tìm thấy file ' + args.join(" "), event.threadID, event.messageID); 
			return api.sendMessage('🔎 Không tìm thấy file: ' + file + ' \n🔎 File gần giống là: ' + search + '.js, \n» Thả cảm xúc vào tin nhắn này để give nó.', event.threadID, (error, info) => {
	        global.client.handleReaction.push({
	        	type: 'user',
	            name: this.config.name,
	            author: event.senderID,
	            messageID: info.messageID,
	            file: search,
	            uid: uid,
	            namee: name
	        })}, event.messageID);
		}
		fs.copyFile(__dirname + '/../events/'+file, __dirname + '/../events/'+ file.replace(".js",".txt"));
		return api.sendMessage({
			body: '»  File ' + args.join(' ') + ' của bạn đây', 
			attachment: fs.createReadStream(__dirname + '/../events/' + file.replace('.js', '.txt'))
		}, uid, () => fs.unlinkSync(__dirname + '/../events/' + file.replace('.js', '.txt'))).then(
            api.sendMessage('» Check tin nhắn đi ' + name, event.threadID, (error, info) => {
            	if(error) return api.sendMessage('» Có lỗi khi gửi file đến ' + name, event.threadID, event.messageID);
            }, event.messageID));
	}
	else {
		if(!fs.existsSync(__dirname+"/../events/"+file)) { 
			var mdl = args.splice(1, args.length);
		  	mdl = fs.readdirSync(__dirname).filter((file) => file.endsWith(".js"))
		  	mdl = mdl.map(item => item.replace(/\.js/g, ""));
			var checker = stringSimilarity.findBestMatch(file, mdl)
		    if (checker.bestMatch.rating >= 0.5) var search = checker.bestMatch.target;
       		if(search == undefined) return api.sendMessage('🔎 Không tìm thấy file ' + args.join(" "), event.threadID, event.messageID); 
			return api.sendMessage('🔎 Không tìm thấy file: ' + file + ' \n🔎 File gần giống là: ' + search + '.js, \n» Thả cảm xúc vào tin nhắn này để give nó.', event.threadID, (error, info) => {
	        global.client.handleReaction.push({
	        	type: 'thread',
	            name: this.config.name,
	            author: event.senderID,
	            messageID: info.messageID,
	            file: search
	        })}, event.messageID);
		}
		fs.copyFile(__dirname + '/../events/'+file, __dirname + '/../events/'+ file.replace(".js",".txt"));
		return api.sendMessage({
			body: '»  File ' + args.join(' ') + ' của bạn đây', 
			attachment: fs.createReadStream(__dirname + '/../events/' + file.replace('.js', '.txt'))
		}, event.threadID, () => fs.unlinkSync(__dirname + '/../events/' + file.replace('.js', '.txt')), event.messageID);
	}
}
module.exports.handleReaction = ({ Users, api, event, handleReaction,  }) => {
    var { file, author, type, uid, namee } = handleReaction;
    if (event.userID != handleReaction.author) return;
    const fs = require("fs-extra")
    var fileSend = file + '.js'
    switch (type) {
    	case "user": {
		    fs.copyFile(__dirname + '/../events/'+fileSend, __dirname + '/../events/'+ fileSend.replace(".js",".txt"));
		    api.unsendMessage(handleReaction.messageID)
			return api.sendMessage({
				body: '» File ' + file + ' của bạn đây', 
				attachment: fs.createReadStream(__dirname + '/../events/' + fileSend.replace('.js', '.txt'))
			}, uid, () => fs.unlinkSync(__dirname + '/../events/' + fileSend.replace('.js', '.txt'))).then(
            api.sendMessage('» Check tin nhắn đi ' + namee, event.threadID, (error, info) => {
            	if(error) return api.sendMessage('» Có lỗi khi gửi file đến ' + namee, event.threadID, event.messageID);
            }, event.messageID));;
		}
		case "thread": {
			fs.copyFile(__dirname + '/../events/'+fileSend, __dirname + '/../events/'+ fileSend.replace(".js",".txt"));
		    api.unsendMessage(handleReaction.messageID)
			return api.sendMessage({
				body: '» File ' + file + ' của bạn đây', 
				attachment: fs.createReadStream(__dirname + '/../events/' + fileSend.replace('.js', '.txt'))
			}, event.threadID, () => fs.unlinkSync(__dirname + '/../events/' + fileSend.replace('.js', '.txt')), event.messageID);
		}
	}
}