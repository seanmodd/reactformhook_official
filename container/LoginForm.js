/* eslint-disable jsx-a11y/label-has-associated-control, react/button-has-type, jsx-a11y/control-has-associated-label, react/self-closing-comp */
import { Text } from '@chakra-ui/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useUserContext } from '../context/useContext';

function Form() {
  const [userInfo, setUserInfo] = useState();
  const { logIn } = useUserContext();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // setUserInfo(data);
    logIn(data);
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
              <Text my="5px" color="red" fontWeight="bold" className="error">
                {errors.username?.message}
              </Text>
              <input
                type="text"
                name="username"
                placeholder="Username"
                {...register('username', {
                  required: 'Username is absolutely required!',
                  maxLength: 20,
                })}
              />
            </div>

            <div className="field">
              <Text my="5px" color="red" fontWeight="bold" className="error">
                {errors.email?.message}
              </Text>

              <input
                type="email"
                name="email"
                placeholder="Email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: 'this is not a valid email',
                  },
                  maxLength: 20,
                })}
              />
            </div>
            <div className="field">
              <Text my="5px" color="red" fontWeight="bold" className="error">
                {errors.password?.message}
              </Text>
              <input
                type="password"
                name="password"
                placeholder="Password"
                {...register('password', {
                  required: 'Password is required.',
                  maxLength: {
                    value: 12,
                    message: 'Password is too long',
                  },
                  minLength: {
                    value: 6,
                    message: 'Password is too short',
                  },
                })}
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
