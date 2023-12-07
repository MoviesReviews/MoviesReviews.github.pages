import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/authContext';

function NavbarMenu() {
    const authContext = useContext(AuthContext)

    return (
        <Navbar collapseOnSelect expand="lg" className={`bg - body - tertiary' ${styles['navbar-container']}`}  >
            <Container>
                <Navbar.Brand as={Link} to='/' href="#home">Movie Reviews</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Menu" id="collasible-nav-dropdown" className={styles.main}>
                            <NavDropdown.Item as={Link} to='/movie-reviews' className={styles.link}>Reviews</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to='/users' className={styles.link}>Users</NavDropdown.Item>
                            <NavDropdown.Divider />
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <h1>Hello, {authContext.username}</h1>

                        {authContext.isAuthenticated &&
                            <div>
                                <Nav.Link as={Link} to='/create-review' className={`${styles.link} ${styles.main}`}>Write Review</Nav.Link>
                                <Nav.Link as={Link} to='/logout' className={`${styles.link} ${styles.main}`}>Logout</Nav.Link>
                            </div>
                        }
                        {!authContext.isAuthenticated &&
                            <div>
                                <Nav.Link as={Link} to='/login' className={`${styles.link} ${styles.main}`}>Login</Nav.Link>
                                <Nav.Link as={Link} to='/register' className={`${styles.link} ${styles.main}`}>Register</Nav.Link>
                            </div>
                        }
                    </Nav>


                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}

export default NavbarMenu

{/* <div className="inside-container top-bar">
<div className="row">
    <div className="col-md-4 top-bar-left order-2 order-md-12">
        <a href="mailto:info@webdomus.net">Menu</a>
    </div>
    <div className="col-md-4 logo order-1 order-md-12 ownLogo">
        Movie Reviews
    </div>
    <div className="col-md-4 top-bar-right order-3 order-md-12">
        <a href="tel:+39.0874.484661">Login</a>
    </div>
</div>
</div> */}