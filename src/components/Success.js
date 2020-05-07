import React from 'react';

import CardContainer from './layout/CardContainer';

const Success = () => {
  return (
    <CardContainer header='Thank You For Your Submission'>
      <p style={{ textAlign: 'center' }}>
        You will get an email with further instruction.
      </p>
    </CardContainer>
  );
};

export default Success;
