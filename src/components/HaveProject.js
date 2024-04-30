import React from "react";
import { Link } from "react-router-dom";

import i3 from "../assets/images/3.jpg";

function HaveProject() {
  return (
    <section className=" asection build-s">
      <div className="build-s-content">
        <div className="flex flex-row other-project">
          <div className="flex flex-col other-project-1">
            <h2 className="mid-h center-text">Have a Project on mind?</h2>
            <div className="center-text black">
              We can help you bring your ideas to life. Let’s talk about what we
              can build and raise together.
            </div>
            <Link to="/contact">
              <span>Connect with us! &nbsp;</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path d="m600-200-57-56 184-184H80v-80h647L544-704l56-56 280 280-280 280Z" />
              </svg>
            </Link>
          </div>
          <div className="other-img">
            <img src={i3} alt="img" />
          </div>
        </div>
        <div className="build">
          <div className="build-inner">
            <div className="">
              <h1 className="white big-h">
                Let us together build a flourishing business
              </h1>
            </div>
            <div className="white">
              When connected with us, you aren’t growing your business alone. We
              have your back and put in our best to contribute to the growth of
              your entire team and organization. So, if you are looking for the
              right agency that’ll help you build a good online presence and
              bring in more conversions and revenue, we are right here!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HaveProject;
