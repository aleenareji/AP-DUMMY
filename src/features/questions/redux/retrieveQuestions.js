import {
    RETRIEVE_QUESTIONS_BEGIN,
    RETRIEVE_QUESTIONS_SUCCESS,
    RETRIEVE_QUESTIONS_FAILURE,
  } from './constants';
  import axios from 'axios';
  import initialState from './initialState';
  
  export function retrieveQuestions() {
    return dispatch => {
      dispatch({
        type: RETRIEVE_QUESTIONS_BEGIN,
      });
      const promise = new Promise((resolve, reject) => {
        axios.get('https://api.rootnet.in/dummy/questions')
        .then(res => {
          console.log(res,'response');
          dispatch({
                  type: RETRIEVE_QUESTIONS_SUCCESS,
                });
                resolve(res);
        })
        .catch(err => {
            console.log(err);
            console.log("TEST TEST");
            dispatch({
                    type: RETRIEVE_QUESTIONS_FAILURE,
                    data:initialState.getQuestions
                  });
                  reject(err);
        })
      });
      return promise;
    };
  }
  
  export function reducer(state, action) {
    switch (action.type) {
      case RETRIEVE_QUESTIONS_BEGIN:
        return {
          ...state,
          retrieveQuestionsBegin: true,
          retrieveQuestionsFailure: false,
        };
      case RETRIEVE_QUESTIONS_SUCCESS:
        return {
          ...state,
          retrieveQuestionsBegin: false,
          // getCovidStatus: action.data.data,
        };
      case RETRIEVE_QUESTIONS_FAILURE:
        return {
          retrieveQuestionsBegin: false,
          retrieveQuestionsFailure: true,
          getQuestions: action.data,
          ...state,
        };
  
      default:
        return state;
    }
  }
  