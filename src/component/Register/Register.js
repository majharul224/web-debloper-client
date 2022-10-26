
// import { GithubAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { BsGithub,BsGoogle} from 'react-icons/bs';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';


const Register = () => {
  const { signup, signinGoogle, profileUpdate, signinGithub } = useContext(AuthContext)

  // email registion
  const handleSubmit = event => {
    event.preventDefault()
    const form = event.target
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password)
    signup(email, password)
      .then(result => {
        const user = result.user
        profileUpdate(name)
        form.reset()

        console.log(user)
      })
      .catch(error => {
        console.error(error)
      })
  }

  // google registion
  const handleGoogle = () => {
    signinGoogle()
      .then(result => {
        const user = result.user;
        console.log(user)
      })
      .catch(error => {
        console.error(error)
      })
  }

  // github register
  const handleGithub = () => {
    signinGithub()
      .then((result) => {
        // // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        // const credential = GithubAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;

        // The signed-in user info.
        const user = result.user;
        console.log(user)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // // The email of the user's account used.
        // const email = error.customData.email;
        // // The AuthCredential type that was used.
        // const credential = GithubAuthProvider.credentialFromError(error);
        //
        console.error(error)
      });

  }
  return (
    <div className='w-50 mx-auto'>
      <h2 className='text-success text-center'>Please Register!!</h2>
      <Form onSubmit={handleSubmit} className="m-auto">
        <Form.Group className="mb-2 " controlId="formBasicName">
          <Form.Label>Your full name</Form.Label>
          <Form.Control type="text" name='name' placeholder="Your full name" />
        </Form.Group>
        <Form.Group className="mb-2 " controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-2 " controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control className="mb-4" type="password" name="password" placeholder="Password" />
        </Form.Group>
        <div className="d-grid gap-2 col-6 mx-auto">
        <p className='text-center'><Link to='/login'>please login</Link></p>
          <button className="btn btn-primary mb-4" type="submit"> Registison</button>
        </div>
      </Form>
      <div className="d-grid gap-2 col-6 mx-auto">
        <p className='text-center'>------- 0 ------</p>
          <button onClick={handleGoogle} class="btn btn-primary" type="submit"> <BsGoogle/> Google SignIn</button>
          <button onClick={handleGithub} class="btn btn-primary" type="submit">
            <BsGithub/>  Github SignIn</button>
        </div>
    </div>

  );
};

export default Register;