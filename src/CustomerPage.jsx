import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import Ro from "./Images/Ro.png";


const CustomerPage =()=> {
  return (
<Container>
      <Row >
        <Col style={{marginTop:"40px",textAlign:"justify"}} sm={12}>
        <h1 style={{fontSize: "42px",
                    fontWeight: "600",
                    fontStyle: " Garnett Semibold",
                    color: "#5C27C0",
                   }}>Customer 

            <span style={{color: "black",}}>Testimonials</span> </h1>  

             <p style={{color: "#181818",
                        fontFamily: "Poppins",
                        fontSize: "18px",
                        fontWeight: "400",
                        lineHeight: "27px"}}>What others has say About Us</p>
        </Col>
       </Row>
      
      <Container>
           <Row style={{marginBottom:'0px',}}> 
             <Col style={{marginTop:'40px'}} sm={4}>
                <Card style={{background: "#EFE5FF",
                        width:"100%",
                        padding:"5px ",
                        borderRadius:'20px',
                        marginBottom:'20px',
                        boxShadow: "0px 4px 24px 0px #00000026" }}>
                  <Card.Body>
                  <Card.Text style={{textAlign: "justify",
                                   fontFamily: "Poppins",
                                   fontSize: "18px",
                                   fontWeight: "400",
                                   lineHeight: "27px",}}>
                       "Rework has been a great way to make the hiring process easier and
                        faster. We've been able to save money and time, and the recruiters
                        have been able to find the best employers leads. Highly recommend!"
                   </Card.Text>
             <br /><br /><br />

            <div style={{display:'flex'}}>
                <div>
                    <img style={{borderRadius: "50%",display: "flex", marginBottom:"20px"}} 
                       src={Ro}/>
                </div>

              <div>
                    <h1 style={{fontFamily: "Garnett Regular",
                            fontSize: "24px",
                            fontWeight: "400",
                            lineHeight: "32px",
                            color: "#5C27C0",
                            marginLeft: "-15px",}}>Theresa Webb </h1>
                     <span style={{fontFamily: "Poppins",
                            fontSize: "20px",
                            fontWeight: "500",
                            lineHeight: "20px",
                            marginLeft: "20px",
                            
                    color: "#6A6A6A",}}>HR Manager, Amazon</span>
                </div>
            </div>
           </Card.Body>
         </Card>  
        </Col>
      

     
         <Col style={{marginTop:'40px'}} sm={4}>
           <Card style={{background: "#EFE5FF",
                        width:"100%",
                        padding:"5px ",
                        borderRadius:'20px',
                        marginBottom:"20px",
                        boxShadow: "0px 4px 24px 0px #00000026" 
                         }}>
              <Card.Body>
                <Card.Text style={{textAlign: "justify",
                                   fontFamily: "Poppins",
                                   fontSize: "18px",
                                   fontWeight: "400",
                                   lineHeight: "27px",}}>
                "Rework has been a great way to make the hiring process easier and
                faster. We've been able to save money and time, and the recruiters
                have been able to find the best employers leads. Highly recommend!"
                "Rework has been a great way to make the hiring process easier and
                 faster. We've been able to save money and time, and the recruiters
                 have been able to find the best employers leads. Highly recommend!"
                </Card.Text>
         

              <div style={{display:'flex'}}>
                <div>
                    <img style={{borderRadius: "50%",display: "flex", marginBottom:"30px"}} 
                       src={Ro}/>
                </div>

                <div>
                    <h1 style={{fontFamily: "Garnett Regular",
                            fontSize: "24px",
                            fontWeight: "400",
                            lineHeight: "32px",
                            color: "#5C27C0",
                            marginLeft: "-15px",}}>Theresa Webb </h1>
                     <span style={{fontFamily: "Poppins",
                            fontSize: "20px",
                            fontWeight: "500",
                            lineHeight: "20px",
                            marginLeft: "20px",
                            
                    color: "#6A6A6A",}}>HR Manager, Amazon</span>
                  </div>
              </div>
             </Card.Body>
           </Card>  
        </Col>


        <Col style={{marginTop:'40px'}} sm={4}>
           <Card style={{background: "#EFE5FF",
                        width:"100%",
                        padding:"5px ",
                        borderRadius:'20px',
                        marginBottom:"20px",
                        boxShadow: "0px 4px 24px 0px #00000026" 
                         }}>
              <Card.Body>
                <Card.Text style={{textAlign: "justify",
                                   fontFamily: "Poppins",
                                   fontSize: "18px",
                                   fontWeight: "400",
                                   lineHeight: "27px",}}>
                        "Rework has been a great way to make the hiring process easier and
                        faster. We've been able to save money and time, and the recruiters
                        have been able to find the best employers leads. Highly recommend!"
                
                </Card.Text>
            <br /><br />

              <div style={{display:'flex'}}>
                <div>
                    <img style={{borderRadius: "50%",display: "flex", marginBottom:"30px"}} 
                       src={Ro}/>
                </div>

                <div>
                    <h1 style={{fontFamily: "Garnett Regular",
                            fontSize: "24px",
                            fontWeight: "400",
                            lineHeight: "32px",
                            color: "#5C27C0",
                            marginLeft: "-15px",}}>Theresa Webb </h1>
                     <span style={{fontFamily: "Poppins",
                            fontSize: "20px",
                            fontWeight: "500",
                            lineHeight: "20px",
                            marginLeft: "20px",
                            color: "#6A6A6A",}}>HR Manager, Amazon</span>
                  </div>
              </div>
             </Card.Body>
           </Card>  
        </Col>
    </Row>  
   </Container>


   <Container  >
           <Row >
             <Col style={{marginTop:'0px'}} sm={4}>
                <Card style={{background: "#EFE5FF",
                        width:"100%",
                        padding:"5px ",
                        borderRadius:'20px',
                        marginBottom:"20px",
                        boxShadow: "0px 4px 24px 0px #00000026"  }}>
                  <Card.Body>
                  <Card.Text style={{textAlign: "justify",
                                   fontFamily: "Poppins",
                                   fontSize: "18px",
                                   fontWeight: "400",
                                   lineHeight: "27px",}}>
                       "Rework has been a great way to make the hiring process easier and
                        faster. We've been able to save money and time, and the recruiters
                        have been able to find the best employers leads. Highly recommend!"
                   </Card.Text>
             <br /><br />

            <div style={{display:'flex'}}>
                <div>
                    <img style={{borderRadius: "50%",display: "flex", marginBottom:"30px"}} 
                       src={Ro}/>
                </div>

              <div>
                    <h1 style={{fontFamily: "Garnett Regular",
                            fontSize: "24px",
                            fontWeight: "400",
                            lineHeight: "32px",
                            color: "#5C27C0",
                            marginLeft: "-15px",}}>Theresa Webb </h1>
                     <span style={{fontFamily: "Poppins",
                            fontSize: "20px",
                            fontWeight: "500",
                            lineHeight: "20px",
                            marginLeft: "20px",
                            
                    color: "#6A6A6A",}}>HR Manager, Amazon</span>
                </div>
            </div>
           </Card.Body>
         </Card>  
        </Col>
      

     
         <Col style={{marginTop:'20px'}} sm={4}>
           <Card style={{background: "#EFE5FF",
                        width:"100%",
                        padding:"5px ",
                        borderRadius:'20px',
                        marginBottom:"20px",
                        boxShadow: "0px 4px 24px 0px #00000026"  }}>
              <Card.Body>
                <Card.Text style={{textAlign: "justify",
                                   fontFamily: "Poppins",
                                   fontSize: "18px",
                                   fontWeight: "400",
                                   lineHeight: "27px",}}>
                "Rework has been a great way to make the hiring process easier and
                faster. We've been able to save money and time, and the recruiters
                have been able to find the best employers leads. Highly recommend!"
                
                </Card.Text>
            <br /><br />

              <div style={{display:'flex'}}>
                <div>
                    <img style={{borderRadius: "50%",display: "flex", marginBottom:"30px"}} 
                       src={Ro}/>
                </div>

                <div>
                    <h1 style={{fontFamily: "Garnett Regular",
                            fontSize: "24px",
                            fontWeight: "400",
                            lineHeight: "32px",
                            color: "#5C27C0",
                            marginLeft: "-15px",}}>Theresa Webb </h1>
                     <span style={{fontFamily: "Poppins",
                            fontSize: "20px",
                            fontWeight: "500",
                            lineHeight: "20px",
                            marginLeft: "20px",
                            
                    color: "#6A6A6A",}}>HR Manager, Amazon</span>
                  </div>
              </div>
             </Card.Body>
           </Card>  
        </Col>


        <Col style={{marginTop:'0px'}} sm={4}>
           <Card style={{background: "#EFE5FF",
                        width:"100%",
                        padding:"5px ",
                        borderRadius:'20px',
                        marginBottom:"20px",
                        boxShadow: "0px 4px 24px 0px #00000026"  }}>
              <Card.Body>
                <Card.Text style={{textAlign: "justify",
                                   fontFamily: "Poppins",
                                   fontSize: "18px",
                                   fontWeight: "400",
                                   lineHeight: "27px",}}>
                        "Rework has been a great way to make the hiring process easier and
                        faster. We've been able to save money and time, and the recruiters
                        have been able to find the best employers leads. Highly recommend!"
                
                </Card.Text>
            <br /><br />

              <div style={{display:'flex'}}>
                <div>
                    <img style={{borderRadius: "50%",display: "flex", marginBottom:"30px"}} 
                       src={Ro}/>
                </div>

                <div>
                    <h1 style={{fontFamily: "Garnett Regular",
                            fontSize: "24px",
                            fontWeight: "400",
                            lineHeight: "32px",
                            color: "#5C27C0",
                            marginLeft: "-15px",}}>Theresa Webb </h1>
                     <span style={{fontFamily: "Poppins",
                            fontSize: "20px",
                            fontWeight: "500",
                            lineHeight: "20px",
                            marginLeft: "20px",
                            color: "#6A6A6A",}}>HR Manager, Amazon</span>
                  </div>
              </div>
             </Card.Body>
           </Card>  
        </Col>
    </Row>  
   </Container>


        
      
    </Container>
  );
}

export default CustomerPage;