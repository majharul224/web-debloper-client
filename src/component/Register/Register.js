
// import { GithubAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { FaGoogle } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';


const Register = () => {
    const {signup,signinGoogle,profileUpdate,signinGithub} = useContext(AuthContext)
  
    // email registion
    const handleSubmit= event =>{
        event.preventDefault()
        const form = event.target
        const name= form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email,password)
        signup(email,password)
        .then(result=>{
            const user = result.user
            profileUpdate(name)
            form.reset()
            
            console.log(user)
        })
        .catch(error=>{
          console.error(error)
        })
            }

            // google registion
            const handleGoogle=()=>{
                signinGoogle()
                .then(result=>{
                    const user = result.user;
                    console.log(user)
                })
                .catch(error=>{
                  console.error(error)
                })
            }

            // github register
            const handleGithub=()=>{
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
                <Form onSubmit={handleSubmit} className ="m-auto">
                <Form.Group className="mb-2 p-4" controlId="formBasicName">
                  <Form.Label>Your full name</Form.Label>
                  <Form.Control type="text" name='name' placeholder="Your full name" />
                </Form.Group>
                <Form.Group className="mb-2 p-4" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-2 p-4" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                {/* <p>{error}</p> */}
                <Button    type="submit">
                  Registison
                </Button><br />
                <Button className="m-3" onClick={handleGoogle}  type="submit">
                <FaGoogle/>  Google
                </Button>
                <Button className="m-3" onClick={handleGithub}  type="submit">
                <FaGoogle/>   Github
                </Button>
              </Form>
            );
};

export default Register;