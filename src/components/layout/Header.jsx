import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { GiBookshelf } from "react-icons/gi";
import SearchModal from "../../modals/SearchModal.jsx";
import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { resetUser } from "../../features/users/userSlice.js";
import { BsClockHistory } from "react-icons/bs";
import { IoIosDesktop } from "react-icons/io";
import { FaRegMessage } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

const searchInputs = [
  {
    placeholder: "search by keywords",
    className: " border border-primary rounded-4  text-center",
  },
];

export const Header = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const { user } = useSelector((store) => store.userInfo);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img src="/logo.png" alt="Logo" height="50" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto fw-bold">
              <Nav.Link
                href="#home"
                className="d-flex align-items-center gap-2"
              >
                <BsClockHistory /> Opening Hours
              </Nav.Link>
              <Nav.Link
                href="#features"
                className="d-flex align-items-center gap-2"
              >
                <IoIosDesktop /> Book a Study Space
              </Nav.Link>
              <Nav.Link
                href="#contact"
                className="d-flex align-items-center gap-2"
              >
                <FaRegMessage /> Contact Us
              </Nav.Link>
              <Nav.Link
                href="#library"
                className="d-flex align-items-center gap-2"
              >
                <FaRegUserCircle />
                {user?._id ? (
                  <>
                    <Link className="nav-link p-0" to="/dashboard">
                      My Library
                    </Link>
                    <Link
                      className="nav-link text-danger"
                      onClick={() => {
                        dispatch(resetUser());
                        navigate("/");
                        localStorage.removeItem("refreshJWT");
                        sessionStorage.removeItem("accessJWT");
                      }}
                    >
                      Logout
                    </Link>
                  </>
                ) : (
                  <Link className="nav-link p-0" to="/signin">
                    My Library
                  </Link>
                )}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="bg-black text-white nav-second ">
        <div className="container p-3 d-flex flex-wrap justify-content-center gap-3">
          <Link
            className="nav-link d-none d-sm-flex align-items-center "
            to="/"
          >
            Home
          </Link>

          <Link className="nav-link d-flex align-items-center" to="/">
            Resources
          </Link>
          <a className="nav-link d-flex align-items-center" href="#newArrivals">
            New Arrivals
          </a>
          <Link className="nav-link d-flex align-items-center" to="/">
            About Us
          </Link>
          <Link className="nav-link d-flex align-items-center" to="/">
            Visit Us
          </Link>

          <Button
            onClick={() => {
              setModalShow(true);
            }}
            variant="light"
            className="p-1  d-flex align-items-center"
          >
            <CiSearch className="d-sm-none" />
            <span className="d-none d-sm-inline">Search for key words</span>
          </Button>
        </div>
      </div>
      <SearchModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default Header;
