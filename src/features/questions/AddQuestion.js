import React, { useState, useEffect } from 'react';


const AddQuestion = (props) => {

  const [question, setQuestion] = useState({
    query: ''
  })

  const onQuestionIdChange = (event) => {
    setQuestion({ ...question, questionId: event.target.value })
  }

  const onQuestionChange = (event) => {
    setQuestion({ ...question, query: event.target.value })
  }

  const onSaveAddQuestion = (Question) => {
    console.log('Question ---->', Question);
    Question.preventDefault();
    setQuestion(...question, question.query)
    console.log(question, "1111");

    props.onSaveQuestion(question);
  }

  const onCancelAddQuestion = () => {
    props.onCancel();
  };

  return (
    <form onSubmit={onSaveAddQuestion}>
      <div className="row">
        <div className="col">
          <label className="form-group">Enter your Question*:</label>
          <textarea className="form-control" as="textarea" onChange={onQuestionChange} />
        </div>
      </div>
      <div className="modal-footer">
        <button type="submit" className="btn btn-submit" disabled={!question.query} >
          ADD
              </button>
        <button
          type="button"
          className="btn"
          onClick={onCancelAddQuestion}
          data-dismiss="modal"
        >
          CANCEL
              </button>
      </div>
    </form>
  )
}

export default AddQuestion;