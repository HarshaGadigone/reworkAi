import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Rectangle from "./Images/disc.png";
import './styless/module.scss'

function SixthPage() {
  return (
    <div style={{ backgroundColor: "#F6F6F6", height: "100%" }}>
      <Container>
        <Row>
          <Col style={{ backgroundColor: "#F6F6F6" }} sm={8}>
            <Container>
              <Row>
                <h1
                  style={{
                    fontSize: "330%",
                    marginTop: "8%",
                   
                    color: "#5C27C0",
                  }}
                >
                  Discover the Future of{" "}
                  <span style={{ fontFamily: "serif" }}>
                    Talent <br /> Assessment!
                  </span>
                </h1>
                <p
                  style={{
                    fontSize: "130%",
                    marginTop: "6%",
                   
                  }}
                >
                  Facing challenges in traditional hiring? <br /> Uncover the
                  costs, pitfalls, and the game-changing role of Generative AI
                  in <br /> recruitment.
                </p>

                <strong style={{ fontSize: "130%"}}>
                  🔍 Inside this Whitepaper:
                </strong>
                <ul style={{ fontSize: "130%"}}>
                  <li>Manual vs. Machine-based hiring: Costs & Challenges.</li>
                  <li> The truth about "Interview as a Service."</li>
                  <li>
                    Generative AI: The simple explanation. Optimize Your Hiring
                    Process Today!
                  </li>
                </ul>
              </Row>
            </Container>
            <Container>
              <Row>
                <Col sm={12}>
                  <button className={"styless.btn"}>
                    {" "}
                    Download Now for Smarter Recruitment
                  </button>
                </Col>
              </Row>
            </Container>
          </Col>

          <Col style={{ backgroundColor: "#F6F6F6" }} sm={4}>
            <img
              style={{ height: "90%", marginTop: "10%"}}
              src={Rectangle}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SixthPage;