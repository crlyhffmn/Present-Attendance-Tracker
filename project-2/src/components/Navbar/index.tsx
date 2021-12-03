import "../../style/NavBar.css"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <a className="navbar-brand text-light" style={{ marginLeft: "15px" }} href="/home">Present</a>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link text-light" href="/home">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div className="collapse navbar-collapse " id="Account">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item ">
            <a className="nav-link text-light"  style={{marginRight: "15px"}} href="/login">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
export default Navbar