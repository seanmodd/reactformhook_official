/* eslint-disable jsx-a11y/label-has-associated-control, react/button-has-type, jsx-a11y/control-has-associated-label, react/self-closing-comp */
import { useState } from 'react';
import { useForm } from 'react-hook-form';

function Form() {
  const [userInfo, setUserInfo] = useState();
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="back">
      <div className="container">
        <pre>{JSON.stringify(userInfo, undefined, 2)}</pre>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Registration Form</h1>
          <div className="ui divider"></div>
          <div className="ui form">
            <div className="field">
              <label>Username</label>
              <input
                type="text"
                name="username"
                placeholder="Username"
                ref={register}
              />
            </div>
            <div className="field">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                ref={register}
              />
            </div>
            <div className="field">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                ref={register}
              />
            </div>
          </div>
          <div className="space">
            <button className="fluid ui button blue">SUBMIT</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
