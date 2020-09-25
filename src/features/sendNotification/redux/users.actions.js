export const RETRIEVE_USERS_BEGIN = 'RETRIEVE_USERS_BEGIN';
export const RETRIEVE_USERS_SUCCESS = 'RETRIEVE_USERS_SUCCESS';
export const RETRIEVE_USERS_FAILURE = 'RETRIEVE_USERS_SUCCESS';


export const retrieveUsersBegin = () => {
    return {
      type: RETRIEVE_USERS_BEGIN,
    };
  };
  export const retrieveUsersSuccess = users => {
    return {
      type: RETRIEVE_USERS_SUCCESS,
      users: users,
    };
  };
  export const retrieveUsersFailure = () => {
    return {
      type: RETRIEVE_USERS_FAILURE,
    };
  };