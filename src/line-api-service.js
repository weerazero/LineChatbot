const request = require('request');
const apiToken = 'HSDhnu1S0yCMm6SOi6A3ArHnPIHPICjIq8I3HXc63d83a+5poOv9uIuwbZrYpmpMkoxk0GGoKSWvJmXANYNNtgWNp2yz+0hqgR7f2bEpj0MnpmFGAAuRYOiLD9kM/9eY3lMjJxM1T/8AHBMyscbK8gdB04t89/1O/w1cDnyilFU=';
const apiRoute = 'https://api.line.me/v2/bot/message/reply';
const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + apiToken
};

class LineAPIService {
	constructor() {}
    
    reply(replyToken, messages) {
        return new Promise(function (resolve, reject) {
            try {
                let body = JSON.stringify({
                    replyToken: replyToken,
                    messages: messages
                })
                return request.post({
                    url: apiRoute,
                    headers: headers,
                    body: body
                }, (err, res, body) => {
                    console.log('status = ' + res.statusCode);
                    return resolve(res.statusCode);
                });
            }
            catch (e) {
                return reject(e);
            }
        });
    }
}
module.exports = new LineAPIService();