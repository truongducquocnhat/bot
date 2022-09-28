module.exports.config={
  name:"prefix",
  version:"1.0.0",
  hasPermssion:0,
  credits:"ManhG",
  description:"Xem prefix của BOT",
  commandCategory:"group",
  usages:"",
  cooldowns:5},
  module.exports.handleEvent=async({event:e,api:a,Threads:n})=>{
  var{threadID:o,messageID:r,body:s,senderID:t}=e;
  if("ManhG"!=this.config.credits)return a.sendMessage("Sai credits!",o,r);
  function i(e){a.sendMessage(e,o,r)}
  var d=(await n.getData(o)).data;
  const p=global.data.threadData.get(parseInt(o))||{};["lệnh bot","lệnh của bot là gì","prefix","dấu lệnh","prefix của bot là gì","daulenh"].forEach((e=>{let a=e[0].toUpperCase()+e.slice(1);if(s===e.toUpperCase()|s===e|a===s){
    const e=p.PREFIX||global.config.PREFIX;
    return null==d.PREFIX?i(`🎄[ ${e} ] Nhóm chưa xét prefix mới cho bot🧦`):i("🍄 prefix của bot là: "+d.PREFIX)}}))},module.exports.run=async({event:e,api:a})=>a.sendMessage("🎄Sai cú pháp!",e.threadID);
