import { Card, Col, Container, Row } from "react-bootstrap";
import icon from "./Images/icon.png";
import timer from "./Images/timer.png";
import frame from "./Images/frame.png";
import frametime from "./Images/frametime.png";
import ai from "./Images/ai.png";
import book from "./Images/book.png";

const ThirdPage = () => {
  return (
    <>
      <Container style={{backgroundColor:'white'}}>
        <Row>
          <Col style={{ height: "150px" }} sm={12}>
            <h1
              style={{
                color: "#5C27C0",
                textAlign: "center",
                paddingTop: "30px",
                fontWeight: "600",
              }}
            >
              Our Amazing Benefits{" "}
              <span style={{ fontWeight: "400" }}>Helpful For Your Hiring</span>
            </h1>
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            <Card variant="none" style={{ padding: "15px", border:'none' }}>
              <div>
                <img
                  src={icon}
                  style={{
                    width: "50px",
                    height: "50px",
                    marginBottom: "8px",
                    marginLeft: "0px",
                  }}
                />
              </div>
              <div
                style={{
                  width: "Fill (343.67px)",
                  height: "Hug (66px)",
                  gap: "14px",
                  opacity: "0 px",
                }}
              >
                <p style={{
                    fontFamily : 'Garnett Semibold',
                    fontWeight:'600',
                    fontSize:'24px',
                    lineHeight:'33.43px',
                    color:'#5C27C0'
                }}>
                  60% <br /> <span style={{
                    fontFamily : 'Garnett Semibold',
                    fontWeight:'400',
                    fontSize:'24px',
                    lineHeight:'33.43px'
                }}>Cost Reduce</span>
                </p>
              </div>
              <div style={{ width: "343.67px", height: "84px" }}>
                <p>
                  {" "}
                  Zero overhead in the hiring process - promise! Source top
                  quality candidates for some of the best companies
                </p>
              </div>
            </Card>
          </Col>
          <Col sm={4}>
            {" "}
            <Card variant="none" style={{ padding: "15px", border:'none'  }}>
              <div>
                <img src={timer} />
              </div>
              <div
                style={{
                  width: "Fill (343.67px)",
                  height: "Hug (66px)",
                  gap: "14px",
                  opacity: "0 px",
                }}
              >
               <p style={{
                    fontFamily : 'Garnett Semibold',
                    fontWeight:'600',
                    fontSize:'24px',
                    lineHeight:'33.43px',
                    color:'#5C27C0'
                }}>
                 50% Faster<br /> <span style={{
                    fontFamily : 'Garnett Semibold',
                    fontWeight:'400',
                    fontSize:'24px',
                    lineHeight:'33.43px'
                }}>Recruitment by TAT</span>
                </p>
              </div>
              <div style={{ width: "343.67px", height: "84px" }}>
                <p>
                  {" "}
                  Zero overhead in the hiring process - promise! Source top
                  quality candidates for some of the best companies
                </p>
              </div>
            </Card>
          </Col>
          <Col sm={4}>
            <Card variant="none" style={{ padding: "15px", border:'none'  }}>
              <div>
                <img
                  src={frame}
                  style={{
                    width: "50px",
                    height: "50px",
                    marginBottom: "8px",
                    marginLeft: "0px",
                  }}
                />
              </div>
              <div
                style={{
                  width: "Fill (343.67px)",
                  height: "Hug (66px)",
                  gap: "14px",
                  opacity: "0 px",
                }}
              >
                <p style={{
                    fontFamily : 'Garnett Semibold',
                    fontWeight:'600',
                    fontSize:'24px',
                    lineHeight:'33.43px',
                    color:'#5C27C0'
                }}>
                  Highly Contextualized 
 <br /> <span style={{
                    fontFamily : 'Garnett Semibold',
                    fontWeight:'400',
                    fontSize:'24px',
                    lineHeight:'33.43px'
                }}>Interview</span>
                </p>
              </div>
              <div style={{ width: "343.67px", height: "84px" }}>
                <p>
                  {" "}
                  Al models generate highly contextualized interviews for the
                  candidates based on your Company profile, Job description and
                  Candidate's CV.
                </p>
              </div>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
          <Card variant="none"  style={{padding:'15px', border:'none' }}>
        <div >
                <img src={frametime}  style={{width:"50px",height:"50px", marginBottom:"8px", marginLeft: '0px'}} />
        </div>
          <div style={{width:"Fill (343.67px)",
          height: "Hug (66px)",
          gap: "14px",opacity: "0 px"}}>
          <p style={{
                    fontFamily : 'Garnett Semibold',
                    fontWeight:'600',
                    fontSize:'24px',
                    lineHeight:'33.43px',
                    color:'#5C27C0'
                }}>Automated 
            <br/> <span style={{
                    fontFamily : 'Garnett Semibold',
                    fontWeight:'400',
                    fontSize:'24px',
                    lineHeight:'33.43px'
                }}>Scheduling</span></p>
          </div>
          <div >
           <p > Email & WhatsApp based communication for interview scheduling with automated reminders.
           </p>
           </div>

        </Card>
          </Col>
          <Col sm={4}>
          <Card  variant="none"  style={{padding:'15px', border:'none' }}>
          <div >
                <img src={ai}  style={{width:"50px",height:"50px", marginBottom:"8px", marginLeft: '0px'}} />
        </div>
          <div style={{width:"Fill (343.67px)",
          height: "Hug (66px)",
          gap: "14px",opacity: "0 px"}}>
          <p style={{
                    fontFamily : 'Garnett Semibold',
                    fontWeight:'600',
                    fontSize:'24px',
                    lineHeight:'33.43px',
                    color:'#5C27C0'
                }}>AI generated Interviews
          <br/> <span style={{
                    fontFamily : 'Garnett Semibold',
                    fontWeight:'400',
                    fontSize:'24px',
                    lineHeight:'33.43px'
                }}>On what matters</span></p>
          </div>
          <div style={{width:"343.67px",height:"84px"}}>
           <p > 0 manual interventions, completely seamless experience for the candidates.
           </p>
           </div>

        </Card>
          </Col>
          <Col sm={4}>
          <Card  variant="none"  style={{padding:'15px', border:'none' }}>
          <div >
                <img src={book}  style={{width:"50px",height:"50px", marginBottom:"8px", marginLeft: '0px'}} />
        </div>
          <div style={{width:"Fill (343.67px)",
          height: "Hug (66px)",
          gap: "14px",opacity: "0 px"}}>
          <p style={{
                    fontFamily : 'Garnett Semibold',
                    fontWeight:'600',
                    fontSize:'24px',
                    lineHeight:'33.43px',
                    color:'#5C27C0'
                }}>in-built

          <br/> <span style={{
                    fontFamily : 'Garnett Semibold',
                    fontWeight:'400',
                    fontSize:'24px',
                    lineHeight:'33.43px'
                }}>ATS</span></p>
          </div>
          <div style={{width:"343.67px",height:"84px"}}>
           <p > 0 manual interventions, completely seamless experience for the candidates.
           </p>
           </div>

        </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ThirdPage;