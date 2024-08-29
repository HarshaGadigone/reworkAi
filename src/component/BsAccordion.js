import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
import './accordion.css';

const BsAccordion =() => {  


    return(
        <div className="container">
            <div>
            <h2 className="heding" id="a1"> Frequently asked <span>Questions</span> </h2>
            </div> 
            <div id="a2">
            <p > We have Compiled the most commonly asked question about our Platform for your information and to enhance your overall experience.</p>
            </div>

            <div className="container2">    
              <Accordion defaultActiveKey="0" className="mt-5 p-3" id="a3">

              <Accordion.Item eventKey="0"  className="item" id="a3">
             <Accordion.Header id="a4">How can I Get started with Rework AI?</Accordion.Header>
                <Accordion.Body >
                Lorem ipsum dolor sit amet consectetur. Porta velit ultricies feugiat tortor odio. Scelerisque habitant quam pharetra adipiscing id ipsum et lectus malesuada.
              </Accordion.Body>
              </Accordion.Item>
             <Accordion.Item eventKey="1" className="item">
             <Accordion.Header>How can I Get started with Rework AI?</Accordion.Header>
                 <Accordion.Body></Accordion.Body>
             </Accordion.Item>
             <Accordion.Item eventKey="2" className="item">
             <Accordion.Header>How can I Get started with Rework AI?</Accordion.Header>
                 <Accordion.Body></Accordion.Body>
             </Accordion.Item>
             <Accordion.Item eventKey="3" className="item">
             <Accordion.Header>How can I Get started with Rework AI?</Accordion.Header>
                 <Accordion.Body></Accordion.Body>
             </Accordion.Item>
             <Accordion.Item eventKey="4" className="item">
             <Accordion.Header>How can I Get started with Rework AI?</Accordion.Header>
                 <Accordion.Body></Accordion.Body>
             </Accordion.Item>
             <Accordion.Item eventKey="5" className="item">
             <Accordion.Header>How can I Get started with Rework AI?</Accordion.Header>
                 <Accordion.Body></Accordion.Body>
             </Accordion.Item>
             <Accordion.Item eventKey="6" className="item">
             <Accordion.Header>How can I Get started with Rework AI?</Accordion.Header>
                 <Accordion.Body></Accordion.Body>
             </Accordion.Item>
             <Accordion.Item eventKey="7" className="item">
             <Accordion.Header>How can I Get started with Rework AI?</Accordion.Header>
                 <Accordion.Body></Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="8" className="item">
             <Accordion.Header>How can I Get started with Rework AI?</Accordion.Header>
                 <Accordion.Body></Accordion.Body>
            </Accordion.Item>

    </Accordion>
      </div>
    </div>
    )
}
export default BsAccordion;