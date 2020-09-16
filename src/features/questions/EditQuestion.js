import React, { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import ErrorLabel from '../shared-components/ErrorLabel';


const EditQuestion = (props) => {
    console.log('PROPS------->',props);
    // const test = props.editData[1];
    // console.log(test,'uuuu');


    const _mapToForm = (value) => {
        const test = {
            questionId: value[0],
            query: value[1]

        }
        return test;
    }


//   const [editData, setEditData] = useState(props.editData);
  const [question, setQuestion] = useState(_mapToForm(props.editData));

  console.log('question ----->',question);

  useEffect(() => {
      setQuestion(question);
  },[props.editData])

  const onQuestionIdChange = (event) => {
    setQuestion({ ...question, questionId: event.target.value })
  }

  const onQuestionChange = (event) => {
    setQuestion({ ...question, query: event.target.value })
  }
 
  const  onSaveAddQuestion = (Question) => {
      console.log(Question);
      const saveData =[Question.questionId,Question.query]
      console.log('saveData ----->',saveData);
    // props.onSave(Question);
  }

  const onCancelAddQuestion = () => {
    props.onCancel();
  };


  return (
    <Formik  
    initialValues={question}
    validationSchema={Yup.object({
      query: Yup.string()
        .max(50, 'Must be 50 characters or less')
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
        </Form>
      )}
    </Formik>
  )
}

export default EditQuestion;