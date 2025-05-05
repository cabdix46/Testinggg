const fs = require("fs");
module.exports.config = {
        name: "Biryani",
    version: "1.0.1",
        hasPermssion: 0,
        credits: "AADI BABU", 
        description: "hihihihi",
        commandCategory: "no prefix",
        usages: "biryani",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        if (event.body.indexOf("Biryani")==0 || event.body.indexOf("biryani")==0 || event.body.indexOf("BIRYANI ")==0 || event.body.indexOf("Biryaani")==0) {
                var msg = {
                                body: "=𝐎𝐰𝐧𝐞𝐫 ➻  𝐒𝐀𝐌𝐄𝐄𝐑 𝐊𝐇𝐀𝐍 \n< ────────────────── >\n\n𝐘𝐚𝐚 𝐋𝐨𝐨 𝐁𝐚𝐁𝐲 𝐁𝐢𝐫𝐘𝐚𝐍𝐢 \n< ────────────────── >",
                                attachment: fs.createReadStream(__dirname + `/noprefix/pinterest__1740146215659_1080x1920.mp4`)
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🍲", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

        }
