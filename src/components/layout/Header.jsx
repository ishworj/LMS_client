import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
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

window.addEventListener("scroll", function () {
  var stickyDiv = document.querySelector(".makeSticky");

  if (window.scrollY > 70) {
    stickyDiv.style.position = "fixed";
    stickyDiv.style.top = "0";
    stickyDiv.style.width = "100%";
  } else {
    stickyDiv.style.position = "static";
  }
});

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
            <nav className="ms-auto d-flex  text-dark gap-1 gap-sm-3 text-center">
              <Link
                to="/time"
                className="nav-link d-flex flex-column flex-sm-row align-items-center gap-sm-2 text-center"
              >
                <BsClockHistory  /> Opening Hours
              </Link>
              <Link
                to="/booking"
                className="nav-link d-flex flex-column flex-sm-row align-items-center gap-2"
              >
                <IoIosDesktop /> Book a Study Space
              </Link>
              <Link
                to="/contact"
                className="nav-link d-flex flex-column flex-sm-row align-items-center gap-2"
              >
                <FaRegMessage /> Contact Us
              </Link>
              <div className="d-flex flex-column flex-sm-row align-items-center gap-2">
                <FaRegUserCircle />
                {user?._id ? (
                  <>
                    <Link to="/dashboard" className=" nav-link p-0">
                      My Library
                    </Link>
                    <Link
                      className=" nav-link text-danger"
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
                  <Link to="/signin" className="nav nav-link p-0">
                    My Library
                  </Link>
                )}
              </div>
            </nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="bg-black text-white makeSticky">
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
