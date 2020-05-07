import React, { Fragment } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';

import CardContainer from './layout/CardContainer';

const UserServices = ({
  values: {
    location,
    date,
    time,
    name,
    email,
    phone,
    comment,
    locationSubmitted,
    dateAndTimeSubmitted,
    personalDetailsSubmitted,
  } = {},
}) => {
  return (
    <CardContainer header='Your Appointment Details'>
      <ListGroup>
        {locationSubmitted && location && (
          <Fragment>
            <Form.Label>Location</Form.Label>
            <ListGroup.Item style={{ marginBottom: 10 }}>
              {location}
            </ListGroup.Item>
          </Fragment>
        )}
        {dateAndTimeSubmitted && date && (
          <Fragment>
            <Form.Label>Appointment Date</Form.Label>
            <ListGroup.Item style={{ marginBottom: 10 }}>
              {date.toLocaleDateString()}
            </ListGroup.Item>
          </Fragment>
        )}
        {dateAndTimeSubmitted && time && (
          <Fragment>
            <Form.Label>Appointment Time</Form.Label>
            <ListGroup.Item style={{ marginBottom: 10 }}>{time}</ListGroup.Item>
          </Fragment>
        )}
        {personalDetailsSubmitted && name && (
          <Fragment>
            <Form.Label>Full Name</Form.Label>
            <ListGroup.Item style={{ marginBottom: 10 }}>{name}</ListGroup.Item>
          </Fragment>
        )}
        {personalDetailsSubmitted && email && (
          <Fragment>
            <Form.Label>Email Address</Form.Label>
            <ListGroup.Item style={{ marginBottom: 10 }}>
              {email}
            </ListGroup.Item>
          </Fragment>
        )}
        {personalDetailsSubmitted && phone && (
          <Fragment>
            <Form.Label>Phone Number</Form.Label>
            <ListGroup.Item style={{ marginBottom: 10 }}>
              {phone}
            </ListGroup.Item>
          </Fragment>
        )}
        {personalDetailsSubmitted && comment && (
          <Fragment>
            <Form.Label>Comment</Form.Label>
            <ListGroup.Item>{comment}</ListGroup.Item>
          </Fragment>
        )}
      </ListGroup>
    </CardContainer>
  );
};

export default UserServices;
