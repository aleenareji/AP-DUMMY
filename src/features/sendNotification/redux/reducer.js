
import {
  RETRIEVE_USERS_BEGIN,
  RETRIEVE_USERS_SUCCESS,
  RETRIEVE_USERS_FAILURE,

} from './users.actions';
const initialState = {
  retrieveUsersBegin: false,
  retrieveUsersFailure: false,
  getUsers: [],
};
export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
  
    case RETRIEVE_USERS_BEGIN:
      return {
        ...state,
        retrieveUsersBegin: true,
        retrieveUsersSuccess: false,
        retrieveUsersFailure: false,
      };
    case RETRIEVE_USERS_SUCCESS:
      return {
        ...state,
        retrieveUsersBegin: false,
        retrieveUsersSuccess: true,
        retrieveUsersFailure: false,
        getUsers: [...action.users],
      };
    case RETRIEVE_USERS_FAILURE:
      return {
        ...state,
        retrieveUsersBegin: false,
        retrieveUsersSuccess: false,
        retrieveUsersFailure: true,
      };
    default:
      newState = state;
      break;
  }
  return newState;
}

