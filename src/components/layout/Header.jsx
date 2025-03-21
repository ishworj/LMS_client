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
    <Navbar expand="lg" className="bg-light">
      <Container>
        <Navbar.Brand href="/" className="">
          <img src="/logo.png" alt="Logo" height={"50px"} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex gap-3 align-items-center">
            <Button
              onClick={() => {
                setModalShow(true);
              }}
              variant="light"
              className="border border-3 h-50 "
            >
              search for key words{" "}
            </Button>

            <Link className="nav-link d-flex align-items-center" to="/">
              <GiBookshelf className="me-1" />
              Home
            </Link>
            <a
              className="nav-link d-flex align-items-center"
              href="#newArrivals"
            >
              <GiBookshelf className="me-1" />
              New Arrivals
            </a>
            {user?._id ? (
              <>
                <Link className="nav-link" to="/dashboard">
                  Dashboard
                </Link>
                <Link
                  className="nav-link"
                  onClick={() => {
                    dispatch(resetUser());
                    navigate("/");
                    localStorage.removeItem("refreshJWT");
                    sessionStorage.removeItem("accessJWT")
                    window.location.reload();
                  }}
                >
                  Logout
                </Link>
              </>
            ) : (
              <>
                <Link
                  className="nav-link d-flex align-items-center"
                  to="/signup"
                >
                  <div className="bg-primary text-white p-2 fw-bold rounded">
                    Login / join
                  </div>
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>

      <SearchModal show={modalShow} onHide={() => setModalShow(false)} />
    </Navbar>
  );
};

export default Header;
