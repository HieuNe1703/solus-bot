function config(){
    return{
        "name": "Ping",
        "main": "Ping.js",
        "commandMap": {
            "ping": {
                "more": "",
                "des": "Xem độ trễ mạng của bot",
                "func": "ping"
            }
        },
        "nodeDepends":{},
        "author": "Sou",
        "version": "0.0.1"
    }
}
function ping(event, api){
    const timeStart = Date.now();
    return api.sendMessage("", event.threadID, () => api.sendMessage(`Pong!\n${Date.now() - timeStart}m/s`, event.threadID, event.messageID))
}
module.exports = {
    ping,
    config
};