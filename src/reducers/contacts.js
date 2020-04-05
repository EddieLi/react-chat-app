import { contacts as userContacts } from "../static-data";
import { DELETE_CONTACT } from "../constants/action-types";

export default function contacts(state = userContacts, action) {
  switch(action.type){
  	case DELETE_CONTACT:
  	  
      const contactId = action.payload;
      // delete object from array without mutating the state
      const { [contactId]: deleted, ...newState } = state
      return newState;

    default:
      return state;
  }
}