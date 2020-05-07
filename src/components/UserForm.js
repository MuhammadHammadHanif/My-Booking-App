import React, { Component } from 'react';

import UserServices from './UserServices';
import UserLocation from './UserLocation';
import UserDateTime from './UserDateTime';
import UserPersonalDetails from './UserPersonalDetails';
import Success from './Success';

class UserForm extends Component {
  state = {
    step: 1,
    location: '',
    date: new Date(),
    time: '',
    name: '',
    email: '',
    phone: '',
    comment: '',
    locationSubmitted: false,
    dateAndTimeSubmitted: false,
    personalDetailsSubmitted: false,
  };
  // Procced to next step
  nextStep = (formType) => {
    let value = formType;
    const { step } = this.state;
    this.setState({ step: step + 1, [value]: true });
  };

  // go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  // Handle field change
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // Handle Date change
  handleDateChange = (date) => {
    let Cdate = date;
    this.setState({ date: Cdate });
  };

  render() {
    const { step } = this.state;
    const {
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
    } = this.state;
    const values = {
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
    };
    switch (step) {
      case 1:
        return (
          <div className='container'>
            <div className='row'>
              <div className='col-md-6 col-sm-12 left_block '>
                <UserServices values={values} />
              </div>
              <div className='col-md-6 col-sm-12 right_block space-between'>
                <UserLocation
                  values={values}
                  nextStep={this.nextStep}
                  handleChange={this.handleChange}
                  per
                />
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className='container'>
            <div className='row'>
              <div className='col-md-6 left_block'>
                <UserServices values={values} />
              </div>
              <div className='col-md-6 right_block space-between'>
                <UserDateTime
                  values={values}
                  prevStep={this.prevStep}
                  nextStep={this.nextStep}
                  handleChange={this.handleChange}
                  handleDateChange={this.handleDateChange}
                />
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className='container'>
            <div className='row'>
              <div className='col-md-6 left_block'>
                <UserServices values={values} />
              </div>
              <div className='col-md-6 right_block space-between'>
                <UserPersonalDetails
                  values={values}
                  prevStep={this.prevStep}
                  nextStep={this.nextStep}
                  handleChange={this.handleChange}
                />
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className='container'>
            <div className='row'>
              <div className='col-md-6 left_block'>
                <UserServices values={values} />
              </div>
              <div className='col-md-6 right_block space-between'>
                <Success />
              </div>
            </div>
          </div>
        );
    }
  }
}

export default UserForm;
