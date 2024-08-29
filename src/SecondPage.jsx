import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import gog from "./Images/Logos.png";

function SecondPage() {
  return (
    <Container fluid m="0" style={{background: 'rgba(239, 229, 255, 1)'}}>
      <Row>
        <Col style={{ height: "auto", padding: "30px" }} sm={12}>
          <Container>
            <Col sm={12}>
              <h6
                style={{
                  textAlign: "center",
                  fontSize: "20px",
                  fontWeight: "400",
                  color: "#AD93DF",
                  paddingBottom: "17px",
                }}
              >
                Hire for 1000+ Brands Including
              </h6>
            </Col>
          </Container>

          <img src={gog} width="100%" />
        </Col>
      </Row>
      <Row>
    </Row>
    </Container>
  );
}

export default SecondPage;