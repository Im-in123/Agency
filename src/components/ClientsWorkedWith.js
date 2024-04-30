import React from "react";
import logo from "../assets/images/logo/logo.png";

function ClientsWorkedWith(props) {
  return (
    <section className="asection choose">
      <div className="choose-content" style={{ paddingTop: props?.top && 0 }}>
        {/* <h1
          className="big-h center-text"
          style={{
            marginTop: props?.top && 0,
            paddingTop: props?.top && "3rem",
          }}
        >
          Clients We Worked With
        </h1> */}
        {/* <div className="flex flex-row client-logos flex-space">
          <img src={logo} alt="logo" />
          <img src={logo} alt="logo" />
          <img src={logo} alt="logo" />
          <img src={logo} alt="logo" />
        </div> */}
        <h1 className="big-h black why-h">Why Choose Us?</h1>
        <div className="flex flex-col why">
          <div className="b choose-sub">
            We are the right term for your business. We have the expertise and
            knowledge to offer impartial advice and services at an honest price.
          </div>
          <div className="choose-sub">
            With us you’ll feel heard. We listen to our client requirements and
            then select the right solution that fits. We care for your business
            as our own. We take a sincere interest in it and genuinely want to
            help your company reach its potential.
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClientsWorkedWith;
