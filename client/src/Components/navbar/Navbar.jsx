import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/authContext';
import { useContext } from 'react';

function NavbarMenu() {
  const authContext = useContext(AuthContext)

    return (
        <Navbar collapseOnSelect expand="lg" className={`bg - body - tertiary' ${styles['navbar-container']}`}  >
            <Container>
                <Navbar.Brand as={Link} to='/' href="#home">Movie Reviews</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className={styles.navbar}>
                    <div className={styles.left}>
                        <Nav className="me-auto">
                            <NavDropdown title="Menu" id="collasible-nav-dropdown" className={styles.main}>
                                <NavDropdown.Item as={Link} to='/movie-reviews' className={styles.link}>Reviews</NavDropdown.Item>
                                {/* <NavDropdown.Item as={Link} to='/users' className={styles.link}>Users</NavDropdown.Item> */}
                                <NavDropdown.Divider />
                            </NavDropdown>
                        </Nav>
                    </div>

                    <div className={styles.right}>

                        {authContext.isAuthenticated &&
                            <Nav>
                                <p className={styles.user}>Logged as: {authContext.username}</p>
                                <Nav.Link as={Link} to='/create-review' className={`${styles.link} ${styles.main}`}>Write Review</Nav.Link>
                                <Nav.Link as={Link} to='/logout' className={`${styles.link} ${styles.main}`}>Logout</Nav.Link>
                            </Nav>
                        }
                        {!authContext.isAuthenticated &&
                            <Nav>
                                <Nav.Link as={Link} to='/login' className={`${styles.link} ${styles.main}`}>Login</Nav.Link>
                                <Nav.Link as={Link} to='/register' className={`${styles.link} ${styles.main}`}>Register</Nav.Link>
                            </Nav>
                        }

                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}

export default NavbarMenu