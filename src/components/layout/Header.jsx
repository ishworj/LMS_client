import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { MdLocalLibrary } from "react-icons/md";
import { GiBookshelf } from "react-icons/gi";
import { TbLogin } from "react-icons/tb";
import { FaUserEdit } from "react-icons/fa";

export const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" className="fs-1">
          <MdLocalLibrary />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex gap-3">
            <Link className="nav-link d-flex align-items-center" to="/">
              <GiBookshelf />
              Home
            </Link>
            <Link className="nav-link" to="/signup">
              <FaUserEdit />
              Signup
            </Link>
            <Link className="nav-link" to="/signin">
              <TbLogin />
              Signin
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
