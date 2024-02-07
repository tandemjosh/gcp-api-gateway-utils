import AuthenticationError from "./exceptions/AuthenticationError";

function getFirebaseUserId(request) {
    const userInfoBase64 = req.headers['x-apigateway-api-userinfo'];

    if (!userInfoBase64) {
        throw new AuthenticationError('User info is not present: user is not authenticated.');
      }
    const userInfo = JSON.parse(Buffer.from(userInfoBase64, 'base64').toString('utf-8'));

    if (!userInfo?.user_id) {
      throw new AuthenticationError('User info does not contain a user id. Improper format.');
    }

    return userInfo.user_id;
}

export default getFirebaseUserId;
