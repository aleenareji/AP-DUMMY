
import {
  RETRIEVE_QUESTIONS_BEGIN,
  RETRIEVE_QUESTIONS_SUCCESS,
  RETRIEVE_QUESTIONS_FAILURE,

} from './question.actions';
const initialState = {
  retrieveQuestionsBegin: false,
  retrieveQuestionsFailure: false,
  getQuestions: [],
};
export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
  


    case RETRIEVE_QUESTIONS_BEGIN:
      return {
        ...state,
        retrieveQuestionsBegin: true,
        retrieveQuestionSuccess: false,
        retrieveQuestionsFailure: false,
      };
    case RETRIEVE_QUESTIONS_SUCCESS:
      return {
        ...state,
        retrieveQuestionsBegin: false,
        retrieveQuestionSuccess: true,
        retrieveQuestionsFailure: false,
        getQuestions: [...action.questions],
      };
    case RETRIEVE_QUESTIONS_FAILURE:
      return {
        ...state,
        retrieveQuestionsBegin: false,
        retrieveQuestionSuccess: false,
        retrieveQuestionsFailure: true,
      };
    default:
      newState = state;
      break;
  }
  return newState;
}

