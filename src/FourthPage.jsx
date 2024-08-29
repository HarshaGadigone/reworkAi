import { Col, Container, Row } from "react-bootstrap";
import Group from "./Images/arrow.png";
import contact from "./Images/contact.png";
import reward from "./Images/reward.png";

const FourthPage = () => {
  return (
    <>
    <br /><br /><br />
      <Container>
        <Row>
          <Col
            style={{ height: "100px", paddingTop: "18px 0px 18px 0px" }}
            sm={12}
          >
            <h1
              style={{
                fontWeight: "600",
                fontSize: "38px",
                color: "#5C27C0",
                textAlign: "center",
              }}
            >
              How Our System{" "}
              <span
                style={{
                  fontWeight: "400",
                }}
              >
                Operates{" "}
              </span>
            </h1>
          </Col>
        </Row>
        <br /><br /><br />
        <Row>
          <Col
            style={{
              backgroundColor: "#FFFFFF",
              height: "297px",
              borderRadius: "10px",
              width: "fill(399.33px)",
            }}
            sm={4}
          >
            <Container fluid>
              <Row
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginRight: "-24px",
                }}
              >
                <Col>
                  <div>
                    <h1
                      style={{
                        fontSize: "25px",
                        paddingTop: "30px",
                        fontWeight: "500",
                        color: "#000000",
                        fontFamily: "Poppins",
                      }}
                    >
                      {" "}
                      <b>Upload documents</b>
                    </h1>
                  </div>
                </Col>

                <Col style={{ height: "100px", display: "contents" }}>
                  <div
                    style={{
                      backgroundColor: "#5C27C0",
                      justifyContent: "flex-end",
                      borderRadius: "0px 0px 0px 10px",
                      padding: "7px 5px 7px 5px",
                      boxShadow: " 0px 4px 14px 0px #00000040",
                    }}
                  >
                    <h1>
                      {" "}
                      <img src={Group} />
                    </h1>
                  </div>
                </Col>
              </Row>
            </Container>
            <br />
            <br />
            <Row>
              <Col sm={12} style={{ width: "398px" }}>
                <Container>
                  <p
                    style={{
                      fontWeight: "400",
                      fontSize: "20px",
                      color: "#5B5B5B",
                    }}
                  >
                    Shortlist the most qualified candidate and upload their
                    details for the top companies
                  </p>
                </Container>
              </Col>
            </Row>
          </Col>
          <Col
            style={{
              backgroundColor: "#EFE5FF",
              height: "297px",
              borderRadius: "10px",
              width: "fill(399.33px)",
            }}
            sm={4}
          >
            <Container fluid>
              <Row
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginRight: "-24px",
                }}
              >
                <Col>
                  <div>
                    <h1
                      style={{
                        fontSize: "25px",
                        paddingTop: "30px",
                        fontWeight: "500",
                        color: "#000000",
                        fontFamily: "Poppins",
                      }}
                    >
                      {" "}
                      <b>Upload documents</b>
                    </h1>
                  </div>
                </Col>
              </Row>
            </Container>
            <br />
            <br />
            <Row>
              <Col sm={12} style={{ width: "398px" }}>
                <Container>
                  <p
                    style={{
                      fontWeight: "400",
                      fontSize: "20px",
                      color: "#5B5B5B",
                    }}
                  >
                    Shortlist the most qualified candidate and upload their
                    details for the top companies
                  </p>
                </Container>
              </Col>
              <Col style={{ height: "100px", display: "flex",justifyContent: "flex-end",paddingRight:'0' }}>
                  <div
                    style={{
                      backgroundColor: "#5C27C0",
                      height:'75px',
                      borderRadius: "10px 10px 0px 0px",
                      padding: "7px 5px 0px 5px",
                      boxShadow: " 0px 4px 14px 0px #00000040",
                    }}
                  >
                    <h1>
                      {" "}
                      <img src={contact} />
                    </h1>
                  </div>
                </Col>
                
            </Row>
         
          </Col>
          <Col
            style={{
              backgroundColor: "#FFFFFF",
              height: "297px",
              borderRadius: "10px",
              width: "fill(399.33px)",
            }}
            sm={4}
          >
            <Container fluid>
              <Row
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginRight: "-24px",
                }}
              >
                <Col>
                  <div>
                    <h1
                      style={{
                        fontSize: "25px",
                        paddingTop: "30px",
                        fontWeight: "500",
                        color: "#000000",
                        fontFamily: "Poppins",
                      }}
                    >
                      {" "}
                      <b>Get Rewards</b>
                    </h1>
                  </div>
                </Col>

                <Col style={{ height: "100px", display: "contents" }}>
                  <div
                    style={{
                      backgroundColor: "#5C27C0",
                      justifyContent: "flex-end",
                      borderRadius: "0px 10px 0px 10px",
                      padding: "7px 5px 7px 5px",
                      boxShadow: " 0px 4px 14px 0px #00000040",
                    }}
                  >
                    <h1>
                      {" "}
                      <img src={reward} />
                    </h1>
                  </div>
                </Col>
              </Row>
            </Container>
            <br />
            <br />
            <Row>
              <Col sm={12} style={{ width: "398px" }}>
                <Container>
                  <p
                    style={{
                      fontWeight: "400",
                      fontSize: "23px",
                      color: "#5B5B5B",
                    }}
                  >
                    As soon as the candidate gets <br /> selected you get your
                    benefits
                  </p>
                </Container>
              </Col>
            </Row>
        
          </Col>

          <Container>
           
              <Row>
                <Col sm={12} style={{marginTop:'50px'}}>
                <div style={{textAlign:'center'}}>
              <button style={{
                border:'2px solid #5C27C0',
                backgroundColor:'#F6F6F6',
                padding:'16px 30px 16px 30px',
                borderRadius:'10px',
                boxShadow: '0px 8px 40px 0px #00000038',
                color:'#5C27C0',
                fontSize:'18px',
                fontWeight:'500'

              }}> Get Started </button>
              </div>

                </Col>
              </Row>
            </Container>
        </Row>
      </Container>
    </>
  );
};

export default FourthPage;