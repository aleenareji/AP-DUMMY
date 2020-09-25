export const RETRIEVE_QUESTIONS_BEGIN = 'RETRIEVE_QUESTIONS_BEGIN';
export const RETRIEVE_QUESTIONS_SUCCESS = 'RETRIEVE_QUESTIONS_SUCCESS';
export const RETRIEVE_QUESTIONS_FAILURE = 'RETRIEVE_QUESTIONS_SUCCESS';


export const retrieveQuestionsBegin = () => {
    return {
      type: RETRIEVE_QUESTIONS_BEGIN,
    };
  };
  export const retrieveQuestionSuccess = questions => {
    return {
      type: RETRIEVE_QUESTIONS_SUCCESS,
      questions: questions,
    };
  };
  export const retrieveQuestionsFailure = () => {
    return {
      type: RETRIEVE_QUESTIONS_FAILURE,
    };
  };