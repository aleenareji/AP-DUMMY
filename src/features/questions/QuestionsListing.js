import React, { useState, useEffect } from 'react';
import MUIDataTable from "mui-datatables";
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { set, every, find } from 'lodash';
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
  const [formattedArrayToDelete,setFormattedArrayToDelete] =useState(null);

  const editQuestionModalOpen = (editQuestion) => {
    setEditQuestionData(editQuestion);
    setIsModalOpen(true);

  }

  const onEditQuestionSave = (dataOnSave) => {
    const formattedData = questions.map(question => {
      if (question[0] === dataOnSave[0]) {
        question[1] = dataOnSave[1];
        return question;
      }
    })
    setIsModalOpen(false);
  }


  // const _mapToArray = (quires) => {
  //   const updatedQuires = quires.map((str,index) => ( {questionId:str[0],query:str[1]}));
  //   return updatedQuires;
  // }


  const onDelete = (deleteQuestion) => {
    const filteredData = questions.filter(item => !item.every((id, question) => id === deleteQuestion[question]));
    const updatedQuires = filteredData.map((str,index) => ( {questionId:str[0],query:str[1]}));
    console.log('updatedQuires -------->',updatedQuires);
    // setFormattedArrayToDelete(_mapToArray(filteredData))
    props.onDeleteQuestion(updatedQuires);
  }
  console.log('formattedArrayToDelete --->',formattedArrayToDelete);

  useEffect(() =>{
    setFormattedArrayToDelete(formattedArrayToDelete)
  },[formattedArrayToDelete])

  useEffect(() => {
    setEditQuestionData(editQuestionData)
  }, [editQuestionData])


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
        <EditQuestion onCancel={editQuestionModalClose} editData={editQuestionData} onSave={onEditQuestionSave} />
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
          return (
            <DeleteIcon variant="contained" color="primary" style={pointer} onClick={() => {
              onDelete(updatedQuestion)
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