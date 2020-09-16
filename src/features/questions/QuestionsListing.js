import React, { useState, useEffect } from 'react';
import MUIDataTable from "mui-datatables";
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { set, every } from 'lodash';
import { RPDialog, DataTableHeader } from '../shared-components';
import EditQuestion from './EditQuestion';


export default function QuestionsListing(props) {

  const _mapQuestionsToTable = (quires) => {
    const updatedQuires = quires[0].length ? quires[0].map(item => Object.values(item)) : null;
    return updatedQuires;
  }
  const pointer = { cursor: 'pointer' };
  const [questions, setQuestions] = useState(null);
  const [isEditModalOpen, setIsModalOpen] = useState(false);
  const [editQuestionData, setEditQuestionData] = useState(null);

  const editQuestionModalOpen = (editQuestion) => {
    setEditQuestionData(editQuestion);
    setIsModalOpen(true);

  }

  const onEditQuestionSave = (qwerty) => {
    console.log('qwerty ---->',qwerty);
    console.log('questions ------>',questions);

  }

  useEffect(() => {
    setEditQuestionData(editQuestionData)
  }, [editQuestionData])

  console.log('editQuestionData --------->', editQuestionData);

  const editQuestionModalClose = () => {
    setIsModalOpen(false);
  }

  const editQuestionModal = () => {
    if (!isEditModalOpen) return '';
    return (
      <RPDialog
        title="Edit Question"
        open={editQuestionModal} editQuestionModal
        onClose={editQuestionModalClose}
      >
        <EditQuestion onCancel={editQuestionModalClose} editData={editQuestionData} onSave ={onEditQuestionSave} />
      </RPDialog>
    )

  }

  useEffect(() => {
    if (props.questionsList[0] !== null) {
      setQuestions(_mapQuestionsToTable(props.questionsList));
    }
  }, [props.questionsList])

  const columns = [
    {
      name: "ID",
    },
    {
      name: "Questions",
    },
    {
      name: "Edit",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => {
          const test = questions[tableMeta.rowIndex];
          return (
            <EditIcon variant="contained" color="primary" style={pointer} onClick={() => editQuestionModalOpen(tableMeta.rowData)}></EditIcon>
          );
        },

      },
    },

    {
      name: "Delete",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => {
          const updatedQuestion = tableMeta.rowData;
          console.log('updatedQuestion Delete -->', updatedQuestion);
          return (
            <DeleteIcon variant="contained" color="primary" style={pointer} onClick={() => {
              setQuestions(questions.filter(item => !item.every((id, question) => id === updatedQuestion[question])));
            }}>
            </DeleteIcon>
          );
        },

      },

    }

  ];



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
      {editQuestionModal()}
      <MUIDataTable
        title="Questions"
        data={questions !== null ? questions : []}
        columns={columns}
        options={options}
      />
    </React.Fragment>
  )
}