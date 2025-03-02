import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { GiBookshelf } from "react-icons/gi";
import { TbLogin } from "react-icons/tb";
import { FaUserEdit } from "react-icons/fa";
import CustomInput from "../custom-input/CustomInput.jsx";

const searchInputs = [
  {
    name: "search",
    required: true,
    placeholder: "search by keywords",
    type: "text",
    className: " border border-primary rounded-4  text-center",
  },
];

export const Header = () => {
  return (
    <Navbar expand="lg" className="bg-light">
      <Container>
        <Navbar.Brand href="#home" className="">
          <img src="/logo.png" alt="Logo" height={"50px"}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex gap-3">
            <Form className="mx-3">
              {searchInputs.map((input, index) => (
                <CustomInput key={index} {...input} />
              ))}
            </Form>
            <Link className="nav-link d-flex align-items-center" to="/">
              <GiBookshelf className="me-1" />
              Home
            </Link>
            <Link className="nav-link d-flex align-items-center" to="/signup">
              <div
                className="bg-primary text-white p-2 fw-bold rounded" >
                Login / join
              </div>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
