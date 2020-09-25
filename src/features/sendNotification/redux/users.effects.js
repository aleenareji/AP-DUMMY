
import {
    retrieveUsersBegin,
    retrieveUsersFailure,
    retrieveUsersSuccess,
 
} from './users.actions';
import UsersData from '../UsersData';



export function retrieveUsers() {
    /* Todo 
    Now Mock action implemented */
    return dispatch => {
      dispatch(retrieveUsersBegin());
      const promise = new Promise((resolve, reject) => {
        dispatch(retrieveUsersSuccess(UsersData));
        resolve('success');
      });
      return promise;
    };
  }

