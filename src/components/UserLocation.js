import React, { Fragment } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import CardContainer from './layout/CardContainer';

const UserLocation = ({ values, handleChange, nextStep }) => {
  const next = (e) => {
    e.preventDefault();
    nextStep('locationSubmitted');
  };

  return (
    <Fragment>
      <CardContainer header='Select Location'>
        <Form>
          <Form.Group controlId='formControlsSelect'>
            <Form.Control
              as='select'
              onChange={(e) => handleChange(e)}
              defaultValue={values.location}
              name='location'
            >
              <option value='0'>* Location</option>
              <option value='Developer'>Developer</option>
              <option value='Junior Developer'>Junior Developer</option>
              <option value='Senior Developer'>Senior Developer</option>
              <option value='Manager'>Manager</option>
              <option value='Student or Learning'>Student or Learning</option>
              <option value='Instructor'>Instructor or Teacher</option>
              <option value='Intern'>Intern</option>
              <option value='Other'>Other</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </CardContainer>
      <div className='py'>
        <div className='text-right' style={{ marginRight: -8 }}>
          <Button
            disabled={
              values.location === '* Location' || values.location === ''
            }
            onClick={next}
            variant='primary'
          >
            Next
          </Button>
        </div>
      </div>
    </Fragment>
  );
};

export default UserLocation;
