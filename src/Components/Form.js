import React, { useState } from 'react';
import SideInfo from './SideInfo';

function Form({ addStudent }) {
  const [obj, setObj] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    power: '',
    email: '',
  });

  const handleChange = (e) => {
    setObj({ ...obj, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    console.log('submit');
    e.preventDefault();
    addStudent(obj);
  };

  return (
    <div className="form-page">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="card mt-4">
              <form onSubmit={(e) => handleSubmit(e)}>
                <div className="card-header">Fill out this form</div>
                <div className="card-body">
                  <div className="row mt-1">
                    <div className="col-lg-12">
                      <input
                        required
                        className="form-control"
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                        value={obj.firstName}
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                  </div>
                  <div className="row mt-1">
                    <div className="col-lg-12">
                      <input
                        required
                        className="form-control"
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                        value={obj.lastName}
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                  </div>
                  <div className="row mt-1">
                    <div className="col-lg-12">
                      <input
                        required
                        className="form-control"
                        type="text"
                        placeholder="Mobile"
                        name="mobile"
                        value={obj.mobile}
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                  </div>
                  <div className="row mt-1">
                    <div className="col-lg-12">
                      <input
                        required
                        className="form-control"
                        type="text"
                        placeholder="Power"
                        name="power"
                        value={obj.power}
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                  </div>
                  <div className="row mt-1">
                    <div className="col-lg-12">
                      <input
                        required
                        className="form-control"
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={obj.email}
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <div className="row">
                    <div className="col-lg-3">
                      <button
                        className="btn btn-secondary form-control"
                        type="submit"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <SideInfo />
    </div>
  );
}

export default Form;
