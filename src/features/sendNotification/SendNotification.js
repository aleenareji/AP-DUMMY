import React, { useState, useEffect } from 'react';
import { DatePicker } from '../shared-components';
import Grid from '@material-ui/core/Grid';
import emailjs from 'emailjs-com';
import UsersData from './UsersData';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { values } from 'lodash';
import Users from './Users';
import Box from '@material-ui/core/Box';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {retrieveUsers} from './redux/users.effects';

const SendNotification = (props) => {

  const [deptFilter, setDeptFilter] = useState(null);
  const [roleFilter, setRoleFilter] = useState(null);
  const [levelFilter, setLevelFilter] = useState(null);
  const [users, setUsers] = useState([]);

  const retrieveUsers = async () => {
    const { retrieveUsers } = props.actions;
    await retrieveUsers();
    setUsers(props.getUsers);
  };

  useEffect(() => {
    retrieveUsers();
  }, []);

  const onDeptFilterChange = (event, values) => {
    setDeptFilter(values);
  }

  const onRolesFilterChange = (event, values) => {
    setRoleFilter(values);
  }

  const onLevelsFilterChange = (event, values) => {
    setLevelFilter(values ? values.roles.levels.users : '');

  }

  useEffect(() => {
    console.log(deptFilter, 'deptFilter');
  }, [deptFilter]);
  useEffect(() => {
    console.log(roleFilter, 'roleFilter');
  }, [roleFilter]);
  useEffect(() => {
    console.log(levelFilter, 'levelFilter');
  }, [levelFilter]);



  return (
    <React.Fragment>
      <div className="row">
        <div className="col-4">
          <Autocomplete
            id="department"
            options={users}
            onChange={onDeptFilterChange}
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
            renderInput={(params) => <TextField {...params} label="Select Department" variant="outlined" />}
          />

        </div>

        <div className="col-4">
          <Autocomplete
            id="levels"
            options={[roleFilter]}
            onChange={onLevelsFilterChange}
            getOptionLabel={(option) => option ? option.roles.levels.grade : ""}
            style={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Select Department" variant="outlined" />}
          />

        </div>
      </div>
        <Box pt={3}>
          <Users
            usersList={[levelFilter]}
          />
        </Box>

    </React.Fragment>
  )


}

function mapStateToProps(state) {
  return {
    getUsers: state.users.getUsers,

  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ retrieveUsers }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SendNotification);