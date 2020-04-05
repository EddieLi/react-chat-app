import { combineReducers } from "redux";
import user from "./user";
import contacts from "./contacts";
import activeUserId from "./activeUserID";

export default combineReducers({
  user,
  contacts,
  activeUserId
});
