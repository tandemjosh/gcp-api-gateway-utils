import getFirebaseUserId from './lib/get-firebase-user-id.js';
import getFirebaseUserEmail from './lib/get-firebase-user-email.js';
import getUserInfo from './lib/get-user-info.js';
import AuthenticationError from './lib/exceptions/AuthenticationError.js';

export { default as getFirebaseUserId } from './lib/get-firebase-user-id.js';
export { default as getFirebaseUserEmail } from './lib/get-firebase-user-email.js';
export { default as getUserInfo } from './lib/get-user-info.js';
export { default as AuthenticationError } from './lib/exceptions/AuthenticationError.js';

export default {
  getFirebaseUserId,
  getFirebaseUserEmail,
  getUserInfo,
  AuthenticationError,
};
