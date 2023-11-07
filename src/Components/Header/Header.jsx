import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import InputGroup from 'react-bootstrap/InputGroup';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/images/AdwatLogo.png";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FaBars, FaSistrix } from "react-icons/fa";

import "./Header.css";

function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //navbar scroll when active state
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    // console.log(window.scrollY)
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });
  return (
    <>
      <div className="header position " sticky="to">
        <div className={navbar ? "navbar active " : "header"}>
          <div className="container">
            <div className="row row-padding">
              <div className="col-lg-4 col-md-3 col-sm-6">
                <Button className="header-menu" onClick={handleShow}>
                  <div className="row frame">
                    <div className="col">
                      <p>Menu</p>
                    </div>
                    <div className="col">
                      <div className="icon-bar">
                        <FaBars />
                      </div>
                    </div>
                  </div>
                </Button>

                <Offcanvas
                  show={show}
                  onHide={handleClose}
                  style={{ background: "#100F2F" }}
                >
                  <div className="container">
                    <div className="row">
                      <div className="">
                        <Offcanvas.Header
                          closeButton
                          className="btn-close-white"
                        >
                          <div className="col-lg-4">
                            <div style={{ textAlign: "left" }}>
                              <Navbar.Brand href="/">
                                <img src={logo} alt="" />
                              </Navbar.Brand>
                            </div>
                          </div>
                        </Offcanvas.Header>
                      </div>
                    </div>
                  </div>
                  <Offcanvas.Body>
                    <Nav className="">
                      <Nav.Link href="/">Home</Nav.Link>
                      <Nav.Link href="about">About Us</Nav.Link>
                      <Nav.Link href="portfolio">Portfolio</Nav.Link>
                      <Nav.Link href="services">Our Services</Nav.Link>
                      <Nav.Link href="careers">Careers</Nav.Link>
                      <Nav.Link href="contact">Contact Us</Nav.Link>
                    </Nav>
                  </Offcanvas.Body>
                </Offcanvas>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="" style={{ textAlign: "center" }}>
                  <Navbar.Brand href="/">
                    <img src={logo} alt="" />
                  </Navbar.Brand>
                </div>
              </div>
              <div className="col-lg-4 col-md-5">
                <Form inline="" className="header-form">
                  <Row>
                    <Col className="header-search-style">
                      <Form.Control
                        type="text"
                        placeholder="Search"
                        className=""
                      />
                    </Col>
                    <Col style={{ padding: "0" }}>
                      <Button type="submit" className="header-submit-btn">
                        <FaSistrix />
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
