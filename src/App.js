import React, { Fragment } from 'react';

import Navbar from './components/layout/Navbar';
import UserForm from './components/UserForm';

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <UserForm />
    </Fragment>
  );
};

export default App;
