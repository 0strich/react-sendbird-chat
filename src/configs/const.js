// put your own APP_ID here
// get your app_id -> https://dashboard.sendbird.com/auth/signin
const { REACT_APP_SENDBIRD_APP_ID } = process.env;
export const APP_ID = REACT_APP_SENDBIRD_APP_ID;
// set your own USER_ID and NICKNAME
export const USER_ID = "sender";
export const NICKNAME = "sender";

export default {
  APP_ID,
  USER_ID,
  NICKNAME,
};
