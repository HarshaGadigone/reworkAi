import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styless from './LastPage.module.scss'

const LastPage=()=> {
  return (
    <Container>
      <Row>
        <Col style={{marginTop:"80px"}} sm={12}>
            <h1 style={{fontFamily: "Poppins",
                     fontSize: "45px",
                     fontWeight: "600",
                     lineHeight: "58.51px",
                     textAlign: "justify",
                     color: "#5C27C0"}}>
        Optimize Your Hiring Strategy with Rework's Exclusive Hiring Audit</h1>
        </Col>
        
      </Row>
      <Row>
      <Col sm={12}>
      <p style={{fontFamily: "Poppins",
                 fontSize: "20px",
                 fontWeight: "400",
                 lineHeight: "27px",
                 textAlign: "left",
                 marginTop:"20px",
                 
                 }}> 
    Discover the strengths and opportunities in your current hiring process. Our comprehensive Hiring Audit evaluates your strategy, identifies areas for improvement, and tailors a roadmap for success. Elevate your recruitment game with data-driven insights – because the right talent deserves the right approach.</p>
      </Col>
      </Row>

      <Row>
      <Col style={{textAlign:'left'}} sm={12}>
      <button className={styless.btn}  > 
            Request Your Free hiring Audit</button>
      </Col>
      </Row>
    </Container>
  );
}

export default LastPage;