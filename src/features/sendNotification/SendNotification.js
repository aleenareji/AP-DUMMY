import React, { useState, useEffect } from 'react';
import { DatePicker } from '../shared-components';
import Grid from '@material-ui/core/Grid';
import emailjs from 'emailjs-com';
import UsersData from './data/UsersData';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { values } from 'lodash';
import Users from './Users';
import Box from '@material-ui/core/Box';

const SendNotification = () => {

  const [deptFilter, setDeptFilter] = useState(null);
  const [roleFilter, setRoleFilter] = useState(null);
  const [levelFilter, setLevelFilter] = useState(null);
  const [users, setUsers] = useState(UsersData);

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

export default SendNotification;