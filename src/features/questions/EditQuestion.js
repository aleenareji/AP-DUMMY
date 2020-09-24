import React, { useState, useEffect } from 'react';


const EditQuestion = (props) => {

  const _mapToForm = (value) => {
    const test = {
      questionId: value[0],
      query: value[1]
    }
    return test;
  }

  const [question, setQuestion] = useState(_mapToForm(props.editData));

  useEffect(() => {
    setQuestion(question);
  }, [props.editData])

  const onQuestionChange = (event) => {
    setQuestion({ ...question, query: event.target.value })
  }

  const onSaveAddQuestion = (Question) => {
    Question.preventDefault();
    setQuestion(...question,Question.query);
    const saveData = [question.questionId, question.query]
    props.onSave(saveData);
  }

  const onCancelAddQuestion = () => {
    props.onCancel();
  };

  return (
      <form onSubmit={onSaveAddQuestion}>
        <div className="row">
          <div className="col">
            <label className="form-group">Enter your Question*:</label>
            <textarea  className="form-control" onChange={onQuestionChange} value={question.query}/>
          </div>
        </div>
        <div className="modal-footer">
          <button type="submit" className="btn btn-submit" disabled={!question.query}>
            SAVE
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

export default EditQuestion;