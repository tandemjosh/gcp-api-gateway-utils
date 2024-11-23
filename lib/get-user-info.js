import AuthenticationError from "./exceptions/AuthenticationError.js";

function getUserInfo(req) {
    const userInfoBase64 = req.headers['x-apigateway-api-userinfo'];

    if (!userInfoBase64) {
        throw new AuthenticationError('User info is not present: user is not authenticated.');
      }
    const userInfo = JSON.parse(Buffer.from(userInfoBase64, 'base64').toString('utf-8'));

    return userInfo;
}

export default getUserInfo;
