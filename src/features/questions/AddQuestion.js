import React, { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import ErrorLabel from '../shared-components/ErrorLabel';

const AddQuestion = (props) => {

  const [question, setQuestion] = useState({
    questionId: '',
    query: ''
  })

  const onQuestionIdChange = (event) => {
    setQuestion({ ...question, questionId: event.target.value })
  }

  const onQuestionChange = (event) => {
    setQuestion({ ...question, query: event.target.value })
  }
 
  const  onSaveAddQuestion = (Question) => {
 
    console.log('ALEENA -->',Question);
    props.onSaveQuestion(Question);
  }

  const onCancelAddQuestion = () => {
    props.onCancel();
  };
  console.log('question obj-->', question);


  return (
    <Formik  
    initialValues={question}
    validationSchema={Yup.object({
      query: Yup.string()
        .max(35, 'Must be 35 characters or less')
        .required('Required'),
        questionId: Yup.number()
        .required('Required'),
    })}
    onSubmit={onSaveAddQuestion}
    >
      {({errors,setFieldValue,setFieldTouched,values,handleChange}) => (
        <Form noValidate>
          <div className="row">
            <div className="col">
            <label className="form-group">Enter your QuestionId:</label>
            <Field name="questionId"  type="text" className="form-control" />
            <ErrorLabel validate={errors.questionId} message={errors.questionId} />
            </div>
            <div className="col">
            <label className="form-group">Enter your Question:</label>
            <Field name="query"  as="textarea" className="form-control" />
            <ErrorLabel validate={errors.query} message={errors.query} />
            </div>
          </div>
          <div className="modal-footer">
              <button type="submit" className="btn btn-submit">
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
        </Form>
      )}
    </Formik>
    // <React.Fragment>
    //   <form onSubmit={onSaveAddQuestion}>
    //     <div>
    //     <div className="row">
    //       <div className="col-4">
    //         <label className="form-group">Enter your QuestionId:</label>
    //         </div>
    //         <div className="col-8">
    //         <input type="text" value={question.questionId} onChange={onQuestionIdChange} />
    //         </div>
    //         </div>
    //         {/* </div> */}
    //         <div className="row">
    //         <div className="col-4">
    //         <label className="form-group">Enter your Question:</label>
    //         </div>
    //         <div className="col-8">
    //         <textarea type="text" value={question.query} onChange={onQuestionChange} />
    //         </div>
    //       </div>
    //       <div className="modal-footer">
    //           <button type="submit" className="btn btn-submit">
    //             ADD
    //           </button>
    //           <button
    //             type="button"
    //             className="btn"
    //             onClick={onCancelAddQuestion}
    //             data-dismiss="modal"
    //           >
    //             CANCEL
    //           </button>
    //         </div>
    //       </div>
    //     </form>
    // </React.Fragment>
  )
}

export default AddQuestion;