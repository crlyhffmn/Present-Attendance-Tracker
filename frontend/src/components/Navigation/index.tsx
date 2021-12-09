import "../../style/NavBar.css"
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar variant="dark" bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand style={{ marginLeft: "15px" }} href="/">Present</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Class Options"
              menuVariant="dark"
            >
              <NavDropdown.Item href="/create-class">Create a Class</NavDropdown.Item>
              <NavDropdown.Item href="/">Join a Class</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Account Options"
              menuVariant="dark"
            >
              {/* TO-DO: Conditionally render Login, Logout, my Account*/}
              <NavDropdown.Item href="/login">Log In</NavDropdown.Item>
              <NavDropdown.Item href="/register">Register New Account</NavDropdown.Item>
              <NavDropdown.Item href="/">Log Out</NavDropdown.Item>
              <NavDropdown.Item href="/my-account">My Account</NavDropdown.Item>
            </NavDropdown>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default Navigation