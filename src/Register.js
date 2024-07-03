import React, { useState } from 'react';
import './Register.css';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    fullName: '',
    email: '',
    mobileNumber: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleFullNameInputChange = (event) => {
    setValues({ ...values, fullName: event.target.value });
  };

  const handleEmailInputChange = (event) => {
    setValues({ ...values, email: event.target.value });
  };

  const handleMobileNumberInputChange = (event) => {
    setValues({ ...values, mobileNumber: event.target.value });
  };

  const [valid, setValid] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.fullName && values.email && values.mobileNumber) {
      navigate('/successregister');
      setValid(true);
    }
    setSubmitted(true);
  };

  return (
    <div className="bg">
      <h1 className='heading'>Register Form</h1>
      <div className="wholeform">
        <div className="signup">
          <form onSubmit={handleSubmit}>
            {submitted && valid ? (
              <div className="success-message">Thanks For Registering</div>
            ) : null}
            <label htmlFor="nm">Enter Your Name</label>
            <input
              type="text"
              className="input"
              name="fullName"
              value={values.fullName}
              onChange={handleFullNameInputChange}
            />
            {submitted && values.fullName === '' ? (
              <span>Please Enter a name</span>
            ) : null}
            <label htmlFor="email">Enter Your Email</label>
            <input
              type="email"
              className="input"
              name="email"
              value={values.email}
              onChange={handleEmailInputChange}
            />
            {submitted && values.email === '' ? (
              <span>Please Enter a email</span>
            ) : null}
            <label htmlFor="mblnum">Enter Your Mobile Number</label>
            <input
              type="number"
              className="input"
              name="mobileNumber"
              value={values.mobileNumber}
              onChange={handleMobileNumberInputChange}
            />
            {submitted && values.mobileNumber === '' ? (
              <span>Please Enter a mobile number</span>
            ) : null}
            <button className="btn btn-success submit">Submit</button>
          </form>
          <h3 className='statement'>This Data Is Not Stored In The Database.</h3>
        </div>
      </div>
    </div>
  );
}

export default Register;
