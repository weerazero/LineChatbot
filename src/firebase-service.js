const firebase = require('firebase-admin');
const serviceAccount = require('./firebase-json/firebase_.json');
var db, ref;

class FirebaseService {
	constructor() {
        firebase.initializeApp({
			credential: firebase.credential.cert(serviceAccount),
			databaseURL: "https://linebot-8dbd9.firebaseio.com"
		});

		db = firebase.database();

		ref = db.ref('test');
    }

    getHogwartHouses() {
        return new Promise(function (resolve, reject) {
            try {
                return ref.once('value', function(snapshot) {
                    let _data = snapshot.val();

                    return resolve(JSON.stringify(_data));
                });
            }
            catch (e) {
                return reject(e);
            }
        });
    }   
}
module.exports = new FirebaseService();