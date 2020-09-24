import React, { useState, useEffect } from 'react';
import MUIDataTable from "mui-datatables";
import { DataTableHeader } from '../shared-components'
import SendIcon from '@material-ui/icons/Send';
import Box from '@material-ui/core/Box';

const Users = (props) => {

  const [users, setUsers] = useState(null);
  const [selectedCheckbox, setSelectedCheckbox] = useState(null);
  const [selectedUsers, setSelectedUsers] = useState(null);
  const pointer = { cursor: 'pointer' };

  const _mapUsersToTable = (user) => {
    const updatedUsers = user[0].length ? user[0].map(item => Object.values(item)) : null;
    return updatedUsers;
  }

  useEffect(() => {
    if (props.usersList[0] !== null) {
      setUsers(_mapUsersToTable(props.usersList));
    }
  }, [props.usersList])


  useEffect(() => {
    let checkedData = [];
    if (users !== null && selectedCheckbox !== null) {
      const selecteData = users.filter((item, index) => selectedCheckbox.filter((check) => {
        if (check === index) {
          checkedData.push(item);
          setSelectedUsers(checkedData);
        }
        if (typeof selectedCheckbox != "undefined" && selectedCheckbox != null
         && selectedCheckbox.length != null && selectedCheckbox.length > 0) {
          console.log("yes");
      }
       
      }))
    }
  }, [users, selectedCheckbox])


  const columns = [
    {
      name: 'Full Name'
    },
    {
      name: 'Email'
    }
  ];

  const onRowSelectionChange = (currentRowsSelected, allRowsSelected, rowsSelected) => {
    console.log('rowsSelected --->',rowsSelected);
    setSelectedCheckbox(rowsSelected)
  }

  const options = {
    filterType: 'checkbox',
    onRowSelectionChange: onRowSelectionChange,
    textLabels: {
      body: {
        noMatch: 'Select Department, Role and Level',
      },
    },
  };
console.log('selectedUsers --->',selectedUsers);
  return (
    <React.Fragment>
      { (typeof selectedCheckbox != "undefined" && selectedCheckbox != null
         && selectedCheckbox.length != null && selectedCheckbox.length > 0) ?
          // <DataTableHeader 
          //  icon={SendIcon}
          // />
          <Box m={2}>
          <SendIcon variant="contained" color="primary" style={pointer}/>
          </Box>

         :''}
    <MUIDataTable
      title="Users"
      data={users !== null ? users : []}
      columns={columns}
      options={options}
    />
    </React.Fragment>
  )

}

export default Users;