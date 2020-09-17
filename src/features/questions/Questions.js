import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Box from '@material-ui/core/Box';

// import Data from './Data';
import QuestionsListing from './QuestionsListing';
import { RPDialog, DataTableHeader } from '../shared-components'
import  AddQuestion from './AddQuestion';



function Questions(props) {

  const [queries, setQueries] = useState('');
  const [deptFilter, setDeptFilter] = useState(null);
  const [roleFilter, setRoleFilter] = useState(null);
  const [levelFilter, setLevelFilter] = useState(null);
  const [filterData, setFilterData] = useState(null);
  const [getResponse, setGetResponse] = useState(props.getQuestions)
  // const [getResponse, setGetResponse] = useState(Data);
  const [getUpdatedQuires,setGetUpdatedQuires] = useState(null);
  const [isAddQuestionModalOpen, setAddQuestionModal] = useState(false);


  const retrieveQuestions = async () => {
    const { retrieveQuestions } = props.actions;
    await retrieveQuestions();
  };


  const onAddQuestionModalOpen = () => {
    setAddQuestionModal(true);
  };

  const onCloseAddQuestionModal = () => {
    setAddQuestionModal(false);
  };

  const onCancelAddQuestion = () => {
    setAddQuestionModal(false);
  };

  const onCreateQuestion = async(question) => {
    var test = [];
    question['questionId']
    await setLevelFilter(levelFilter.push(question));
    setAddQuestionModal(false);


  }

  const addQuestionModal = () => {
    if (!isAddQuestionModalOpen) return '';
    return (
      <RPDialog
        title="Add Question"
        open={isAddQuestionModalOpen}
        onClose={onCloseAddQuestionModal}
      >
        <AddQuestion onCancel={onCancelAddQuestion} onSaveQuestion={onCreateQuestion}/>
      </RPDialog>
    );
  };

  useEffect(() => {
    retrieveQuestions();
  }, []);


  useEffect(() => console.log(deptFilter, 'filtered department value in dropdown'), [deptFilter]);
  useEffect(() => console.log(roleFilter, 'filtered role value in dropdown'), [roleFilter]);
  useEffect(() => console.log(levelFilter, 'filtered level value in dropdown'), [levelFilter])

  const onFilterChange = (event, values) => {
    setDeptFilter(values);
  }

  const onRolesFilterChange = (event, values) => {
    setRoleFilter(values);
  }

  const onLevelsFilterChange = (event, values) => {
    setLevelFilter(values ? values.roles.levels.questions : '')
  }

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-4">
          <Autocomplete
            id="department"
            options={getResponse}
            onChange={onFilterChange}
            getOptionLabel={(option) => option.department}
            style={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Select Department" variant="outlined" />}
          />
        </div>
        <div className="col-4">
          <Autocomplete
            id="roles"
            options={[deptFilter]}
            onChange={onRolesFilterChange}
            getOptionLabel={(option) => option ? option.roles.position : ""}
            style={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Select Roles" variant="outlined" />}
          />
        </div>
        <div className="col-4">
          <Autocomplete
            id="levels"
            options={[roleFilter]}
            onChange={onLevelsFilterChange}
            getOptionLabel={(option) => option ? option.roles.levels.grade : ""}
            style={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Select Levels" variant="outlined" />}
          />
        </div>
        <div className="col">
          {roleFilter && deptFilter && levelFilter ? (
            <React.Fragment>
              {addQuestionModal()}
              <DataTableHeader onClick={onAddQuestionModalOpen} />
            </React.Fragment>
          ) : ''
          }
        </div>

      </div>
      <Box pt={3}>
        <QuestionsListing
          questionsList={[levelFilter]}
        />
      </Box>

    </React.Fragment>
  );

}

function mapStateToProps(state) {
  return {
    getQuestions: state.questions.getQuestions,

  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Questions);

