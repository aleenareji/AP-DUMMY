import React, { useState, useEffect } from 'react';
import { DatePicker } from '../shared-components';
import Grid from '@material-ui/core/Grid';
import emailjs from 'emailjs-com';

const SendNotification = () => {

    const [h1Date, setH1Date] = useState(new Date());
    const [h2Date, setH2Date] = useState(new Date());
    const onH1HandleChange = (date) => {
        setH1Date(date);
    }
    const onH2HandleChange = (date) => {
        setH2Date(date);
    }

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_gms5g9d', e.target, 'user_FZ8H6qcFe9rERoGsx9YkU')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }


    return (
        <Grid>
            <Grid className="row">

                <Grid className="col-6">
                    <DatePicker
                        value={h1Date}
                        onChange={onH1HandleChange}
                        label="H1 date"
                    />
                </Grid>
                <Grid className="col-6">
                    <DatePicker
                        value={h2Date}
                        onChange={onH2HandleChange}
                        label="H2 date"
                    />
                </Grid>

            </Grid>
            <Grid className="row">
                <form  onSubmit={sendEmail}>
                    <Grid className="col">
                        <p1>Send Notification</p1>

                    </Grid>
                    <Grid className="col">
                        <label className="form-group">Enter your Message:</label>
                    </Grid>
                    <Grid className="col-6">
                        <textarea name="message" />
                    </Grid>
                    <Grid className="col">
                        <input type="submit" value="Send" />
                    </Grid>

                </form>

            </Grid>
        </Grid>





    )

}

export default SendNotification;