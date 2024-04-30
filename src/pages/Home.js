import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import i1 from "../assets/images/1.jpg";
// import i2 from "../assets/images/2.jpg";
import i3 from "../assets/images/3.jpg";
import i4 from "../assets/images/4.jpg";
import i5 from "../assets/images/5.jpg";
import i6 from "../assets/images/6.jpg";
import i7 from "../assets/images/7.png";

import HaveProject from "../components/HaveProject";
import ClientsWorkedWith from "../components/ClientsWorkedWith";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { SITE_NAME } from "../constants/constant";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <Helmet>
        <title>Home - {SITE_NAME}</title>
        <meta
          name="description"
          content={`Welcome to  ${SITE_NAME}. We help you create professional looking websites. Learn about our services and contact us for more information.`}
        />
      </Helmet>
      <Header />
      <section className="asection services">
        <div className="services-content">
          <h2 className="big-h">Hire Us For</h2>
          <div className="all-services">
            <div className="info">
              <h2 className="mid-h">Design</h2>
              <div className="inner-info">
                Our web design team has ample years of experience in the core
                areas of design to build a website that you need.
              </div>
            </div>
            <div className="info">
              <h2 className="mid-h">Development</h2>
              <div className="inner-info">
                Looking out for customized solutions for your websites? Our team
                will develop and deliver a website that’ll serve your purpose.
              </div>
            </div>
            <div className="info">
              <h2 className="mid-h">Hosting</h2>
              <div className="inner-info">
                We provide you you with hosting assistance.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="asection about">
        <div className="about-content">
          <div className="about-content-info">
            <div className="info">
              <h2 className="big-h black">About Us</h2>
              <div className="inner-info">
                We are a team of web experts with years of experience in website
                building to help businesses grow online.
              </div>
            </div>
            <div className="info">
              <h2 className="mid-h black">Mission.</h2>
              <div className="inner-info">
                Our mission is to empower our clients to use the internet to its
                full potential by providing affordable, effective, custom design
                and solutions.
              </div>
            </div>
            <div className="info">
              <h2 className="mid-h black">Vision.</h2>
              <div className="inner-info">
                Our vision is to become a global leader in providing the best
                and unique web design and development services to improve our
                client’s productivity and business strength.
              </div>
            </div>
          </div>
          <div className="about-img">
            <img src={i7} alt="img" />
          </div>
        </div>
      </section>
      <ClientsWorkedWith />

      <HaveProject />
      <section className=" asection trusted-s">
        <div className="trusted-s-content">
          <div className="trusted">
            <div className="trusted-inner">
              <div className="">
                <h1 className="small-h">Your Trusted Partners</h1>
                <h1 className="big-h">
                  Highly Motivated Team with Innovative Ideas
                </h1>
              </div>
              <div className="trusted-dv">
                We love what we do and therefore come up with the best possible
                solutions to help you set and grow online quickly. We are your
                trusted partners you can count on.
              </div>
            </div>
            <div className="trusted-gallery flex-row flex-space">
              <img src={i5} alt="logo" />
              <img src={i4} alt="logo" />

              <img src={i6} alt="logo" />
            </div>
            <div className="subsc">
              <div className="subsc-inner">
                <div>
                  <h2 className="big-h">Subscribe</h2>
                </div>
                <div className="input">
                  <input type="email" placeholder="Email Address" />
                  <button onClick={() => navigate("/contact")}>
                    I&apos;m Interested
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
