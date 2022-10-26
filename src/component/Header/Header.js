import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import img from '../../image/img.png'

const Header = () => {
  const { user, signout } = useContext(AuthContext)
  // console.log(user)
    

   
    // console.log(user.email)
    const handleSignOut = () => {
        // console.log("helle")
        signout()
            .then(() => {
                console.log("signout")
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
    <Navbar collapseOnSelect className='mb-4' expand="lg" bg="primary" variant="dark">
      <Container>
      <img src={img} alt="Logo" width="50" height="24" className="d-inline-block align-text-top mx-4"/>
        <Navbar.Brand >W.D learning</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/course'>Courses</Nav.Link>
            <Nav.Link as={Link} to='/faq'>FAQ</Nav.Link>
            <Nav.Link as={Link} to='/blogs'>Blogs</Nav.Link>
            <Nav.Link as={Link} to='/register'>Register</Nav.Link>
            <>
                {
                    user?.email ?
                  <>
                      <span>{user?.displayName}</span>
                    <button onClick={handleSignOut} className="btn btn-sm">Log out</button>
                  </>
                    : <>
                    <Link to='/login'>
                        <button className='btn btn-sm'>Log In</button>
                    </Link>
                    </>
                }
                </>
          {user?.photoURL ? 
            <Image
            style={{height:'30px'}}
             roundedCircle src={user?.photoURL}
             title={user.displayName}
             ></Image> 
             : <FaUserAlt></FaUserAlt>
            } 
                {/* <>
                {
                    user?.uid ?
                  <>
                      <span>{user?.displayName}</span>
                    <button onClick={handleSignOut} className="btn btn-sm">Log out</button>
                  </>
                    : <>
                    <Link to='/login'>
                        <button className='btn btn-sm'>Log In</button>
                    </Link>
                    </>
                }
                </> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default Header;