const lineApiService = require('./line-api-service');
const firebaseService = require('./firebase-service');
class LineMessaging {
	constructor() {
    }

    replyMessage(replyToken, message) {
        return new Promise(function (resolve, reject) {
            try {
                let _messages = [{
                    type: 'text',
                    text: message
                }];
                
                if (message =='สวัสดี') {
                    
                    return firebaseService.getHogwartHouses().then(function (rsHouses) {
                        _messages[0].text = rsHouses;
                        return lineApiService.reply(replyToken, _messages).then(function (rs) {
                            return resolve(rs);
                        });
                    });
                }
                else {
                    return lineApiService.reply(replyToken, _messages).then(function (rs) {
                        
                        return resolve(rs);
                    });
                }
            }
            catch (e) {
                return reject(e);
            }
        });
    }
}
module.exports = new LineMessaging();