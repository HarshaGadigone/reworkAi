import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "./Images/logo.png";
import Nav from "react-bootstrap/Nav";


import group from './Images/Fig.png'
import correct from './Images/Group.png'
import { Button } from "react-bootstrap";

const FirstPage = () => {
  return (
    <div style={{ backgroundColor: "#F6F6F6" }}>
      <Container
        fluid
        m='0'
        style={{
          width: "100%",
          marginLeft: "0px",
          height: "auto",
          backgroundColor: "#F6F6F6",
        }}
      >
        <Row>
          <Col sm={12} m="0" style={{ backgroundColor: "#F6F6F6" }}>
            <>
              {["lg"].map((expand) => (
                <Navbar key={expand} expand={expand} >
                  <Container>
                    <Navbar.Brand href="#">
                      {" "}
                      <img src={logo} width="100%" />{" "}
                    </Navbar.Brand>
                    <Navbar.Toggle
                      aria-controls={`offcanvasNavbar-expand-${expand}`}
                    />
                    <Navbar.Offcanvas
                      id={`offcanvasNavbar-expand-${expand}`}
                      style={{ height: "390px" , marginLeft:"75px" }}
                      aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                      placement="end"
                      
                    >
                      <Offcanvas.Header closeButton></Offcanvas.Header>

                      <Offcanvas.Body
                        style={{ width: "630px", justifyContent: "center" }}
                      >
                        <Nav variant="underline" defaultActiveKey="/home">
                          <Nav.Item>
                            <Nav.Link
                              href="/talent"
                              style={{ fontStyle: "Poppins", width: "115px" }}
                            >
                              {" "}
                              Talent Finder{" "}
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link
                              href="/recruiter"
                              style={{ width: "115px" }}
                            >
                              {" "}
                              For Recruiter{" "}
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link
                              eventKey="link-1"
                              style={{
                                color: "#5C27C0",
                                fontWeight: "600",
                                width: "125px",
                              }}
                              active
                            >
                              {" "}
                              For Employers{" "}
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link
                              eventKey="disabled"
                              style={{ width: "105px" }}
                            >
                              About Us
                            </Nav.Link>
                          </Nav.Item>

                          <Nav.Item>
                            <Nav.Link
                              eventKey="disabled"
                              style={{ width: "105px" }}
                            >
                              Company
                            </Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </Offcanvas.Body>
                    </Navbar.Offcanvas>

                    <Offcanvas.Header style={{marginLeft:"20px"}}>
                      <button
                        style={{
                          width: "120px",
                          padding: "10px 20px 10px 20px",
                          border: "2px solid #5C27C0",
                          borderRadius: "10px",
                          color: " #5C27C0",
                          fontWeight: "500",
                          fontSize: "17px",
                          marginRight: "15px",
                          backgroundColor: "#F6F6F6",
                        }}
                      >
                        {" "}
                        Log In{" "}
                      </button>
                      <button
                        style={{
                          width: "150px",

                          padding: "10px 20px 10px 20px",
                          border: "2px solid #5C27C0",
                          borderRadius: "10px",
                          color: " #5C27C0",
                          fontWeight: "500",
                          fontSize: "17px",
                          backgroundColor: "#F6F6F6",
                        }}
                      >
                        {" "}
                        Get Started{" "}
                      </button>
                    </Offcanvas.Header>
                  </Container>
                </Navbar>
              ))}
            </>
          </Col>
        </Row>
        <Row>
          <Col sm={12} style={{ textAlign: "left" }}>
            <Container
              style={{
                color: "#5C27C0",
                fontSize: "54px",
                fontWeight: "600",
                lineHeight: "65.22px",
              }}
            >
              {" "}
              Power Up Your Hiring
           
            </Container>
          </Col>
        </Row>

        <Container >
        <Row>
          <Col sm={6} >

          

            <span style={{ fontWeight: "100",  color: "#5C27C0",
                fontSize: "54px",
                lineHeight: "65.22px", }}> with Rework. </span>
           <br />
           
              <text>
                {" "}
                Empower your business with cutting-edge A.I. technology,
                simplified processes, and top-tier  talent connections. Rework is
                your strategic partner in redefining how you hire{" "}
              </text>
         <br /><br /><br />
         <Row>
         <Container>
          <Button style={{
             backgroundColor: "#5C27C0",
             color: "white",
             Padding: "21px 56px 21px 56px",
             fontSize:'24px',
             borderRadius: "16px",
             width: "300px",
             height: "70px",
          }}>
          Book A Demo
          </Button>
         </Container>
         </Row>
            <br /><br /><br />
          <Row>  
            <Container>

          <ul style={{listStyle:'none', padding: '2px'}}> 
            <li> <img src={correct}/> <text style={{marginLeft:'10px'}}> No credit Required  </text> </li>
            <br />
            <li> <img src={correct}/> <text style={{marginLeft:'10px'}}> Streamlined Recruitment Process </text> </li>

          </ul>

         </Container>
         </Row>
           
          </Col>

          <Col sm={6} >

          <Container>
            <div  >
            <img src={group} width='100%'/>
           
            </div>

          
          </Container>
          </Col>
        </Row>
        </Container>

      
      
        
       
      </Container>
     
    </div>
  );
};

export default FirstPage;