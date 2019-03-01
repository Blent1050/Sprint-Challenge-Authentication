import React, { useState } from 'react';

//State Management
import { Context } from '../Provider/Provider';

//Material UI
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

//Styled Components
import styled from 'styled-components';

function Form() {
  const [username, setFirstName] = useState('');
  const [password, setPassword] = useState('');
  const user = { username, password };

  return (
    <Context.Consumer>
      {context => (
        <FormWrapper method="POST" onSubmit={e => context.loginUser(e, user)}>
          <h2>Login</h2>
          <FormControl>
            <InputLabel htmlFor="username">Name</InputLabel>
            <Input
              id="username"
              required
              value={username}
              onChange={e => setFirstName(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              id="password"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </FormControl>
          <Button type="submit" variant="contained" color="primary">
            Login
          </Button>
          <Button
            onClick={() => context.newUser()}
            variant="contained"
            color="primary"
          >
            New User?
          </Button>
        </FormWrapper>
      )}
    </Context.Consumer>
  );
}

export default Form;

//Styles

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  @media only screen and (max-width: 600px) {
    width: 95%;
  }

  button {
    margin-top: 15px;
  }
`;
