// import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export default function DatePicker(props) {
    console.log('props in date picker ------>',props);
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-between">
   
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label={props.label}
          format="MM/dd/yyyy"
          value={props.value}
          onChange={props.onChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
    
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
