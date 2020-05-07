import React, { Fragment } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import CardContainer from './layout/CardContainer';

const UserPersonalDetails = ({ values, handleChange, nextStep, prevStep }) => {
  const next = (e) => {
    e.preventDefault();
    nextStep('personalDetailsSubmitted');
  };
  const prev = (e) => {
    e.preventDefault();
    prevStep();
  };
  return (
    <Fragment>
      <CardContainer header='Personal Details'>
        <Form>
          <Form.Group>
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              name='name'
              value={values.name}
              type='text'
              placeholder='Muhammad Hammad Hanif'
              onChange={(e) => handleChange(e)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name='email'
              value={values.email}
              type='email'
              placeholder='name@example.com'
              onChange={(e) => handleChange(e)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              name='phone'
              value={values.phone}
              type='text'
              placeholder='03312121742'
              onChange={(e) => handleChange(e)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Comment</Form.Label>
            <Form.Control
              name='comment'
              value={values.comment}
              as='textarea'
              rows='3'
              onChange={(e) => handleChange(e)}
            />
          </Form.Group>
        </Form>
      </CardContainer>
      <div className='py'>
        <div className='text-right' style={{ marginRight: -8 }}>
          <Button variant='primary' onClick={prev}>
            Prev
          </Button>
          <Button
            disabled={
              values.name === '' || values.phone === '' || values.email === ''
            }
            onClick={next}
            variant='success'
          >
            Submit
          </Button>
        </div>
      </div>
    </Fragment>
  );
};

export default UserPersonalDetails;
