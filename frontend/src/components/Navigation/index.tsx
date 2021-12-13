import "../../style/NavBar.css"
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPlus,
  faSignInAlt,
  faSignOutAlt,
  faHome,
  faGift,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";

const Navigation = () => {

  const navigate = useNavigate();
  const isLoggedIn = localStorage.length > 0;

  const logout = () => {
    localStorage.clear();
    navigate('/')
  };

  const guestLinks = (
    <>
      <Navbar variant="dark" bg="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand style={{ marginLeft: "15px" }} href="/">
            <FontAwesomeIcon icon={faGift} />{' '}Present
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-dark-example" />
          <Navbar.Collapse id="navbar-dark-example">
            <Nav className="me-auto">
              <Link to={"/"} className="nav-link">
                <FontAwesomeIcon icon={faHome} /> Home
              </Link>
            </Nav>
            <Nav>
              <Link to={"/register"} className="nav-link">
                <FontAwesomeIcon icon={faUserPlus} /> Register
              </Link>
              <Link to={"/login"} className="nav-link">
                <FontAwesomeIcon icon={faSignInAlt} /> Login
              </Link>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );

  const userLinks = (
    <>
      <Navbar variant="dark" bg="dark" expand="lg" >
        <Container fluid >
          <Navbar.Brand style={{ marginLeft: "15px" }} href="/">
            <FontAwesomeIcon icon={faGift} />{' '}Present
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-dark-example" />
          <Navbar.Collapse id="navbar-dark-example" >
            <Nav className="me-auto" >
              <Link to={"/"} className="nav-link" style={{color: "white"}}>
                <FontAwesomeIcon icon={faHome} /> Home
              </Link>
              {/* <NavDropdown
                id="nav-dropdown-dark-example"
                title="Class Options"
                menuVariant="dark"
              >
                <NavDropdown.Item href="/create-class">Create a Class</NavDropdown.Item>
                <NavDropdown.Item href="/">Join a Class</NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            <Nav>
              <Link to={"/login"} className="nav-link" style={{color: "white"}}>
                <FontAwesomeIcon icon={faSignOutAlt} /> Login
              </Link>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );

  return (
    <>
      {isLoggedIn ? userLinks : guestLinks}
    </>
  );
};
export default Navigation