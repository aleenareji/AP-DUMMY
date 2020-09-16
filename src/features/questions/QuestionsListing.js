import React, { useState, useEffect } from 'react';
import MUIDataTable from "mui-datatables";
import { set } from 'lodash';


export default function QuestionsListing(props) {

  const _mapQuestionsToTable = (quires) => {
    console.log('quires --->', quires);
    const updatedQuires = quires[0].length ? quires[0].map(item => Object.values(item)) : null;
    console.log('updatedQuires --->', updatedQuires);
    return updatedQuires;
  }

  console.log('props in listing question page', props);

  const [questions, setQuestions] = useState(null);

  useEffect(() => {
    if (props.questionsList[0] !== null) {
      setQuestions(_mapQuestionsToTable(props.questionsList));
    }
  }, [props.questionsList])
  console.log('questions -->', questions);

  const columns = ["Id", "Questions", "Edit"];



  const options = {
    filterType: 'checkbox',
    textLabels: {
      body: {
        noMatch: 'Select Department, Role and Level',
      },
    },
  };
  return (
    <React.Fragment>
    <MUIDataTable
      title="Questions"
      data={questions !== null ? questions : []}
      columns={columns}
      options={options}
    />
     </React.Fragment>
  )
}