/* eslint-disable jsx-a11y/label-has-associated-control, react/button-has-type, jsx-a11y/control-has-associated-label, react/self-closing-comp */
import { Text } from '@chakra-ui/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

function Form() {
  const [userInfo, setUserInfo] = useState();
  // const { register, handleSubmit, errors } = useForm();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setUserInfo(data);

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
              {errors.username && (
                <Text my="5px" color="red" fontWeight="bold" className="error">
                  Enter your username
                </Text>
              )}
              <input
                type="text"
                name="username"
                placeholder="Username"
                {...register('username', { required: true, maxLength: 20 })}
              />
            </div>

            <div className="field">
              {errors.email && (
                <Text my="5px" color="red" fontWeight="bold" className="error">
                  Enter your email
                </Text>
              )}
              <input
                type="email"
                name="email"
                placeholder="Email"
                {...register('email', { required: true, maxLength: 20 })}
              />
            </div>
            <div className="field">
              {errors.password && (
                <Text my="5px" color="red" fontWeight="bold" className="error">
                  Enter your password
                </Text>
              )}
              <input
                type="password"
                name="password"
                placeholder="Password"
                {...register('password', { required: true, maxLength: 20 })}
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
