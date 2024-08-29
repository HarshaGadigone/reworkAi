import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Card, CardBody } from 'react-bootstrap';
import correct from './Images/correct.png';
import wrong from './Images/wrong.png';


const FifthPage=()=> {
  return (
    <Container >
      <Row>
        <Col style={{marginTop:'30px'}} sm={12}>
            <h1 className={".heading"}>
            Choose Your Simple,
            <span className={".span"} >Transparent Pricing</span> </h1>
        </Col>
        </Row>

        <Row  style={{display:"flex" ,justifyContent:"space-between"}}>
        <Col style={{marginTop:'80px',}} sm={4}>
            <Card style={{ borderRadius:'3%'}} >
                <CardBody>
                  <p className={".monthHead"}>1 Month</p>
                    <br />
                  <h1 className={".moneyHead"}>₹199.00
                  <span className={".spanMoney"}>/month</span></h1>
                    <br />
                  <h1 className={".subDet"}>Suitable for companies with<br/>  5-10 openings</h1>
                    <br/>
                  <div > 
                  <ul style={{listStyle:'none', textAlign:'justify',lineHeight: '35px',marginLeft: '38px'}}>
                       
                  <li> <img src={correct} className={".correct"} /> 10 interview-ready candidates </li>
                    <li> <img src={correct} className={".correct"} /> Unlimited job postings</li> 
                    <li> <img src={correct} className={".correct"} /> Receive pre-vetted profiles <br/> <span style={{ paddingLeft: "28px"}}>within 48 hours</span> </li>
                    <li> <img src={wrong} className={".correct"} /> Dedicated account manager </li>
                    <li> <img src={wrong} className={".correct"} /> Assistance with interview <br/> <span style={{paddingLeft: "28px"}}>scheduling</span> </li>
                    <li> <img src={wrong} className={".correct"} /> Custom reports </li>

                    </ul>
                    </div>
                    <br/>
                    <button className={".buttonCOM"}>  Get Started</button>
                </CardBody>
            </Card>
       </Col>
        
        
   <Col style={{marginTop:'80px',}} sm={4}>
    <Card style={{ borderRadius:'3%',}}>
        <CardBody style={{background: 'rgba(92, 39, 192, 1)',borderRadius:'3%'}}>
          <p className={".monthHead"} style={{color:"rgba(246, 246, 246, 1)"}}>3 Month</p>
          <br />
             <h1 style={{color:"rgba(246, 246, 246, 1)"}} className={".moneyHead"}>₹149.00 
              <span style={{color: "rgba(246, 246, 246, 1)"}}
                className={".spanMoney"}>/month</span></h1>
                 <br />
              <h1 style={{color: "rgba(246, 246, 246, 1)"}} className={".subDet"}>Suitable for companies with<br/>  5-10 openings</h1>
                 <br/>
              
          <div > 
              <ul style={{listStyle:'none',
                          textAlign:'justify',
                          lineHeight: '35px',
                          marginLeft: '38px',
                          color:"rgba(246, 246, 246, 1)"
                          }}>
                       
               <li> <img src={correct} className={".correct"} /> 10 interview-ready candidates </li>
               <li> <img src={correct} className={".correct"} /> Unlimited job postings</li> 
               <li> <img src={correct} className={".correct"} /> Receive pre-vetted profiles <br/> <span style={{ paddingLeft: "28px"}}>within 48 hours</span> </li>
               <li> <img src={wrong} className={".correct"} /> Dedicated account manager </li>
               <li> <img src={wrong} className={".correct"} /> Assistance with interview <br/> <span style={{paddingLeft: "28px"}}>scheduling</span> </li>
               <li> <img src={wrong} className={".correct"} /> Custom reports </li>

              </ul>
            </div>
                <br/>
            <button style={{backgroundColor: 'white', color:'rgba(92, 39, 192, 1)'}} className={".buttonCOM"}>  Get Started</button>
       </CardBody>
      </Card>
    
  </Col>
        
  <Col style={{marginTop:'80px'}} sm={4}>
       <Card style={{ borderRadius:'3%'}}>
          <CardBody>
               <p className={".monthHead"}>6 Month</p>
               <br />
               <h1 className={".moneyHead"}>₹169.00
                 <span className={".spanMoney"}>/month</span></h1>
                 <br />
                <h1 className={".subDet"}>Suitable for companies with<br/>  5-10 openings</h1>
                  <br/>
                    
                <div > 
                  <ul style={{listStyle:'none', textAlign:'justify',lineHeight: '35px',marginLeft: '38px'}}>
                       
                    <li> <img src={correct} className={".correct"} /> 10 interview-ready candidates </li>
                    <li> <img src={correct} className={".correct"} /> Unlimited job postings</li> 
                    <li> <img src={correct} className={".correct"} /> Receive pre-vetted profiles <br/> <span style={{ paddingLeft: "28px"}}>within 48 hours</span> </li>
                    <li> <img src={wrong} className={".correct"} /> Dedicated account manager </li>
                    <li> <img src={wrong} className={".correct"} /> Assistance with interview <br/> <span style={{paddingLeft: "28px"}}>scheduling</span> </li>
                    <li> <img src={wrong} className={".correct"} /> Custom reports </li>

                  </ul>
                </div>
                  <br/>
                <button className={".buttonCOM"}>  Get Started</button>
                </CardBody>
            </Card>
        </Col>

        <Col style={{marginTop:'90px'}} sm={12}>
               <button className={".buttonDomo"}> Book demo</button>    
        </Col>
      </Row>
    
    </Container>
  );
}

export default FifthPage;