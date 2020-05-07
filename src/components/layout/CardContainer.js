import React from 'react';

import Card from 'react-bootstrap/Card';

const CardContainer = (props) => {
  return (
    <Card className='rounded shadow bg-white'>
      <Card.Body>
        <Card.Title className='text-center py'>
          <h3>{props.header}</h3>
        </Card.Title>
        {props.children}
      </Card.Body>
    </Card>
  );
};

export default CardContainer;
