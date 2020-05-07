import React, { Fragment } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import CardContainer from './layout/CardContainer';

const UserDateTime = ({
  values,
  handleChange,
  nextStep,
  prevStep,
  handleDateChange,
}) => {
  const next = (e) => {
    e.preventDefault();
    nextStep('dateAndTimeSubmitted');
  };
  const prev = (e) => {
    e.preventDefault();
    prevStep();
  };
  return (
    <div>
      <CardContainer header='Date & Time'>
        <div className='row'>
          <div className='col-md-12 col-sm-12'>
            <div className='react-calendar'>
              <Calendar
                onChange={(e) => handleDateChange(e)}
                defaultValue={values.date}
              />
            </div>
          </div>
          <div className='col-md-12 right_block py'>
            <Form>
              <Form.Group controlId='formControlsSelect'>
                <Form.Control
                  as='select'
                  onChange={(e) => handleChange(e)}
                  defaultValue={values.time}
                  name='time'
                >
                  <option value='0'>* Time</option>
                  <option value='09:00 AM'>09:00 AM</option>
                  <option value='12:00 PM'>12:00 PM</option>
                  <option value='14:00 PM'>14:00 PM</option>
                  <option value='18:00 PM'>18:00 PM</option>
                </Form.Control>
              </Form.Group>
            </Form>
          </div>
        </div>
      </CardContainer>
      <div className='py'>
        <div className='text-right' style={{ marginRight: -8 }}>
          <Button variant='secondary' onClick={prev}>
            Prev
          </Button>
          <Button
            disabled={values.time === ''}
            onClick={next}
            variant='primary'
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserDateTime;
