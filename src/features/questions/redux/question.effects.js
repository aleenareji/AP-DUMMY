
  import axios from 'axios';
import {
    retrieveQuestionsBegin,
    retrieveQuestionsFailure,
    retrieveQuestionSuccess,
 
} from './question.actions';

export function retrieveQuestions() {
  return dispatch => {
    dispatch(retrieveQuestionsBegin());
    const promise = new Promise((resolve, reject) => {
        axios.get('https://api.rootnet.in/dummy/questions')
        .then(res => {
          console.log(res,'response');
          dispatch(retrieveQuestionSuccess);
        })
        .catch(err => {
            console.log(err);
            console.log("TEST TEST");
            dispatch(retrieveQuestionsFailure);
            reject(err);
        })
      });
      return promise;
    };
  }

