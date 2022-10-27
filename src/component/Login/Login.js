import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';


const Login = () => {
  const { signin } = useContext(AuthContext)
  const naviget = useNavigate()
  const handleSubmit = event => {
    event.preventDefault()
    const form = event.target
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password)
    signin(email, password)
      .then(result => {
        const user = result.user
        form.reset()
        naviget('/')
        console.log(user)
      })
      .catch(error => {
        console.error(error)
      })
  }
  return (
    <div className='w-50 mx-auto'>
      <h2 className='text-success text-center'>Please Login!!</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" />
          <div className="d-grid gap-2 col-6 mx-auto">
       
          <button  className="btn btn-primary" type="submit">LogIn</button>
        </div>
        </Form.Group>
       
      </Form>
    </div>
  );
};

export default Login;