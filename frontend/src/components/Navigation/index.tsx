import "../../style/NavBar.css"
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPlus,
  faSignInAlt,
  faSignOutAlt,
  faHome,
  faGift,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {

  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('currentUserFirstName');

  const logout = () => {
    console.log("LogOut");
    localStorage.clear();
    //navigate('/');
  };

  const guestLinks = (
    <>
      <Navbar variant="dark" bg="dark" expand="lg" id="navbar">
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
      <Navbar variant="dark" expand="lg" id="navbar">
        <Container fluid >
          <Navbar.Brand style={{ marginLeft: "15px" }} href="/">
            <FontAwesomeIcon icon={faGift} />{' '}Present
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-dark-example" />
          <Navbar.Collapse id="navbar-dark-example" >
            <Nav className="me-auto" >
              <Link to={"/"} className="nav-link" style={{ color: "white" }}>
                <FontAwesomeIcon icon={faHome} /> Home
              </Link>
            </Nav>
            <Nav>
              <Link to={"/my-account"} className="nav-link" style={{ color: "white" }} >
                <FontAwesomeIcon icon={faUserCircle} /> My Account
              </Link>
              <Link onClick={logout} className="nav-link" style={{ color: "white" }} to={"/"}>
                <FontAwesomeIcon icon={faSignOutAlt} /> Log Out
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