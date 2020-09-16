import React from 'react';
import Typography from '@material-ui/core/Typography';
import { AddButton } from '../shared-components';
import IconButton from '@material-ui/core/IconButton';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import AddCircleIcon from '@material-ui/icons/AddCircle';
const DataTableHeader = props => {
  const title = props.title || 'title';
  const buttonIcon = props.icon || 'plus';
  const onClicked = () => {
    props.onClick();
  };
  return (
    <div className="tableHeader">
      {/* <div>
        <Typography variant="h5" gutterBottom>
          <b>{title}</b>
        </Typography>
      </div> */}
      <div>
        <IconButton onClick={onClicked}>
          <AddCircleIcon color="primary" fontSize="large" />
        </IconButton>
      </div>
    </div>
  );
};

export default DataTableHeader;
