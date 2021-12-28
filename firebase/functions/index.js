const admin = require("firebase-admin");
const serviceAccount = require("./wesopt29-17c04-firebase-adminsdk-811m6-4835d833f2.json");
const dotenv = require("dotenv");

dotenv.config();

let firebase;
if (admin.apps.length === 0) {
    firebase = admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
    });
} else {
    firebase = admin.app();
}

module.exports = {
    api: require("./api"),
};