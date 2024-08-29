import React from "react";

const EighthPage = () => {
    return (
      <div className="container" style={{marginTop:'70px'}}>
        <div className="row">
          <div className="col-md-4 col-sm-12 col-12" style={{ textAlign: "left" }}>
            <container>
              <text
                style={{
                  fontFamily: "Garnett Medium",
                  fontSize: "38px",
                  fontWeight: "500",
                  lineHeight: "52.93px",
                  textAlign: "left",
                  color: "#5C27C0",
                  paddingTop:'30px'
                }}
              >
                <b>
                  How Rework AI has <br />
                  been a good{" "}
                </b>
                <span
                  style={{
                    fontFamily: "Garnett Regular",
                    fontSize: "38px",
  
                    lineHeight: "52.93px",
                    textAlign: "left",
                  }}
                >
                  {" "}
                  Hiring platform for Companies{" "}
                </span>
              </text>
            </container>
          </div>
  
          <div className="col-md-7 col-sm-12 col-12" style={{ paddingTop:'30px', textAlign: "left" }}>
            <div style={{ display: "flex", justifyContent:'end' }}>
              <div
                style={{
                  borderRight: "2px solid #5C27C0",
                  width: "200px",
                  height: "200px",
                }}
              >
                <card>
                  <h1 style={{ textAlign: "center", color: "#5C27C0" }}> 80% </h1>
  
                  <text style={{ textAlign: "center", color: "#3B3B3B" }}>
                    {" "}
                    Reduction in your recruitment TAT with the access to a wider
                    talent pool on the platform{" "}
                  </text>
                </card>
              </div>
  
              <div
                style={{
                  borderRight: "2px solid #5C27C0",
                  width: "200px",
                  height: "200px",
                }}
              >
                <card>
                  <h1
                    style={{
                      textAlign: "center",
                      color: "#5C27C0",
                      padding: "0px 1px 0px 1px",
                    }}
                  >
                    {" "}
                    50%{" "}
                  </h1>
  
                  <text style={{ textAlign: "center", color: "#3B3B3B" }}>
                    {" "}
                    Streamline your budgeting and save money while finding the top
                    candidates{" "}
                  </text>
                </card>
              </div>
  
              <div style={{ width: "180px", height: "200px" }}>
                <card>
                  <h1 style={{ textAlign: "center", color: "#5C27C0" }}> 10K </h1>
  
                  <text style={{ textAlign: "center", color: "#3B3B3B" }}>
                    {" "}
                    Certified sourcing partners’ expertise{" "}
                  </text>
                </card>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    );
  };
  
  export default EighthPage;