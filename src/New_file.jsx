import React from "react";

import  amazon from "./Images/amazon.png"
import micro from "./Images/micro.png"
import google from "./Images/google.png"


// "src\assets\unsplash_MpdLxiIg0P0(2).jpg"

const NeW_file = () => {
  return (
    <div className="row ">
      <br />
      <br />
      <h1 className="text-center my-2">
        <span id="Success">Success</span> Stories
      </h1>
      
      <div className=" col-md-4">
        <div className="card" >
          <img
            src={amazon}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h3 className="card-text">
            Rework has been a great way <br></br> to make the hiring process{" "}
            <br></br> easier and faster.
            </h3>
            <p>
            “We've been able to save money and <br></br> time, and the
            recruiters have been <br></br> able to find the best employers
            leads. <br></br> Highly recommend! “
          </p>
          </div>
        </div>
      </div>
      <div className=" col-md-4">
        <div className="card" >
          <img
            src={google}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h3 className="card-text">
            Rework has been a great way <br></br> to make the hiring process{" "}
            <br></br> easier and faster.
            </h3>
            <p>
            “We've been able to save money and <br></br> time, and the
            recruiters have been <br></br> able to find the best employers
            leads. <br></br> Highly recommend! “
          </p>
          </div>
        </div>
      </div>
      <div className=" col-md-4">
        <div className="card" >
          <img
            src={micro}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h3 className="card-text">
            Rework has been a great way <br></br> to make the hiring process{" "}
            <br></br> easier and faster.
            </h3>
            <p>
            “We've been able to save money and <br></br> time, and the
            recruiters have been <br></br> able to find the best employers
            leads. <br></br> Highly recommend! “
          </p>
          </div>
        </div>
      </div>
        
    </div>
  );
};

export default NeW_file;