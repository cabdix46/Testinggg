module.exports.config = {
  name: "pair",
  version: "1.0.0", 
  hasPermssion: 0,
  credits: "AADI BABU",
  description: "THIS BOT IS MR AADI SHARMA",
  commandCategory: "COUPLE LOVE PAIRING", 
  usages: "pair", 
  cooldowns: 15
};
module.exports.run = async function({ api, event,Threads, Users }) {
        const axios = global.nodemodule["axios"];
        const fs = global.nodemodule["fs-extra"];

        var { participantIDs } =(await Threads.getData(event.threadID)).threadInfo;
        var tle = Math.floor(Math.random() * 101);
        var namee = (await Users.getData(event.senderID)).name
        const botID = api.getCurrentUserID();
        const listUserID = event.participantIDs.filter(ID => ID != botID && ID != event.senderID);
        var id = listUserID[Math.floor(Math.random() * listUserID.length)];
        var name = (await Users.getData(id)).name
        var arraytag = [];
                arraytag.push({id: event.senderID, tag: namee});
                arraytag.push({id: id, tag: name});

  
        let Avatar = (await axios.get( `https://graph.facebook.com/${event.senderID}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + "/cache/avt.png", Buffer.from(Avatar, "utf-8") );

        let gifLove = (await axios.get( `https://i.postimg.cc/029zW3B5/Gif-love.gif`, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + "/cache/giflove.png", Buffer.from(gifLove, "utf-8") );

        let Avatar2 = (await axios.get( `https://graph.facebook.com/${id}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar2, "utf-8") );

        var imglove = [];
              
              imglove.push(fs.createReadStream(__dirname + "/cache/avt.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/giflove.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));

        var msg = {body: `🌸=== 𝐎𝐰𝐧𝐞𝐫 ➻    𝐒𝐚𝐦𝐞𝐞𝐫 𝐊𝐇𝐚𝐧\n\n<   ❤__________💋

🍒🐰•|____[🌺]~Kʌʌs  ɣɘʜ  Sʌpŋʌ  Bʜɩ Pʋɽʌ┣┫❍ JʌɣƏ______|•💜 |•_____🌿| 🧸❤️

♡🧸•||•___[✨]~┣┫ʋɱ  Bʜɩ  KɩsɩĸƏ Sʌpŋ❍ ɱƏ Aʌ JʌɣƏ___|•💎 |•_____🎻♡🥀

______':) "☘️"°•°𝐊н๏๏sɓ๏๏ bʌηʞəɽ təɽı sʌʌηsøη ɱə Smʌ JaYƏnGə_____"💌◔✩◔🌹"

"☘️"______':) "💛"[[Sʋʞøøη ɓʌηʞəɽ ʈəɽə ɗıɭ ɱə ʋʈʌɽ Jʌɣəηʛə__"🌹🍷"]]

______':) "☘️"𝐌əнsøøs kʌɽηə kı ʞ๏sıs ʈø ʞıנıɣə əʞ ɓʌʌɽ___"😘◔✩◔🌹"

•||🌹||•◔✩◔"☘️"Ɗʋɽ ɽʌнʈə Ӈʋə ɓнı Pʌʌs Nʌʑʌ ʌʌɣəηʛə__"🍷🍷🌹"
\nAap DonN Ka PyaR👉 ${tle} HaiN 🤐👈\n`+namee+" "+"♥️"+" "+name, mentions: arraytag, attachment: imglove}
        return api.sendMessage(msg, event.threadID, event.messageID)
}
