export const RETRIEVE_QUESTIONS_BEGIN = 'RETRIEVE_QUESTIONS_BEGIN';
export const RETRIEVE_QUESTIONS_SUCCESS = 'RETRIEVE_QUESTIONS_SUCCESS';
export const RETRIEVE_QUESTIONS_FAILURE = 'RETRIEVE_QUESTIONS_SUCCESS';


export const retrieveQuestionsBegin = () => {
  return {
    type: RETRIEVE_QUESTIONS_BEGIN,
  };
};
export const retrieveQuestionSuccess = () => {
  return {
    type: RETRIEVE_QUESTIONS_SUCCESS,
    // projects: projects.data,
    // header: projects.headers,
  };
};
export const retrieveQuestionsFailure = (getQuestions) => {
  return {
    type: RETRIEVE_QUESTIONS_FAILURE,
    getQuestions:getQuestions,
  };
};