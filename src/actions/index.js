import { SET_ACTIVE_USER_ID, DELETE_CONTACT} from "../constants/action-types";
export const setActiveUserId = id => ({
  type: SET_ACTIVE_USER_ID,
  payload: id
});

// the Delete Chat Action
export const deleteContact = (user_id) => ({
	type: DELETE_CONTACT,
	payload: user_id
})