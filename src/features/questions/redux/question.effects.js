
import {
    retrieveQuestionsBegin,
    retrieveQuestionsFailure,
    retrieveQuestionSuccess,
 
} from './question.actions';
import Data from '../Data'



export function retrieveQuestions() {
    /* Todo 
    Now Mock action implemented */
    return dispatch => {
      dispatch(retrieveQuestionsBegin());
      const promise = new Promise((resolve, reject) => {
        dispatch(retrieveQuestionSuccess(Data));
        resolve('success');
      });
      return promise;
    };
  }

