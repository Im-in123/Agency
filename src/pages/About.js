import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import i1 from "../assets/images/1.jpg";
import i2 from "../assets/images/default.jpg";
import { SITE_NAME, LIVE_URL } from "../constants/constant";
import HaveProject from "../components/HaveProject";
import Stars from "../components/Stars";
import Crew from "../components/Crew";
import { Helmet } from "react-helmet";

function About() {
  return (
    <div>
      <Helmet>
        <title>About Us - {SITE_NAME}</title>
        <meta
          name="description"
          content={`Learn more about ${SITE_NAME}, our mission, quality of service and values. ${LIVE_URL} `}
        />
      </Helmet>
      <Header name="About" />
      <section className="abt-page">
        <div className="abt-page-content">
          <div className="two-tin">
            <div className="two-tin-img">
              <img src={i1} alt="i1" />
            </div>
            <div className="two-tin-other">
              <div className="two-tin-other-1 b black">
                We are a team of web experts with experience in website building
                to help businesses grow online.
              </div>
              <div className="two-tin-other-2">
                If you are looking for the best website design or development
                services to grow your business online, we are here to help. We
                are a team of certified experts with tremendous experience in
                web design and development, who’ll walk with you all through.
              </div>
              <div className="two-tin-other-3">
                <h1 className="mid-h">Our Core Values</h1>
                <ul>
                  <li>Committed to delivering the best</li>
                  <li>Honest and transparent services</li>
                  <li>We care for your business just like ours</li>
                  <li>Keep learning and adapting to new technologies</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="abt-page-clients">
        <div className="abt-page-clients-content">
          <Crew />
          <h1 className="big-h black">What Our Clients Say</h1>
          <div className="abt-grid">
            <div className="abt-item">
              <div className="star-rate">
                <Stars stars={5} />
              </div>
              <div className="abt-txt">
                I can't express how delighted I am with the results delivered by{" "}
                {SITE_NAME}. We approached them with a complex project,
                involving multiple property listings and intricate search
                functionality. They not only met but exceeded our expectations.
                The website they developed is not only visually stunning but
                also incredibly user-friendly. Their team's technical expertise
                and attention to detail are unmatched. Since the launch, our
                website traffic has surged, and we've received numerous
                compliments from clients and partners. If you're looking for a
                web agency that delivers on its promises, {SITE_NAME} is the way
                to go. They've become an integral part of our business growth
                strategy, and we couldn't be happier with the results.
              </div>
              <div className="item-im">
                <img src={i2} alt="profile" />
                <span>David Osei Benson</span>
              </div>
            </div>
            <div className="abt-item">
              <div className="star-rate">
                <Stars stars={5} />
              </div>
              <div className="abt-txt">
                {SITE_NAME} has been instrumental in helping us revamp our
                website and overall online strategy. The team's creativity and
                strategic thinking stood out from the beginning. They took the
                time to understand our brand and goals, which translated into a
                website that perfectly reflects our values and mission. Their
                ongoing support and dedication to our success have been
                remarkable.
              </div>
              <div className="item-im">
                <img src={i2} alt="profile" />
                <span>Henry Adjei</span>
              </div>
            </div>
            <div className="abt-item">
              <div className="star-rate">
                <Stars stars={5} />
              </div>
              <div className="abt-txt">
                I cannot speak highly enough about {SITE_NAME}. From the moment
                we engaged their services, we knew we were in good hands. Their
                team's expertise and attention to detail are second to none.
                They not only created a stunning website for us but also
                provided valuable insights on user experience and SEO
                optimization. Our website traffic has doubled, and our
                conversion rates have skyrocketed. I'm extremely impressed with
                their professionalism and commitment to our success. {SITE_NAME}{" "}
                truly transformed our online presence, and I highly recommend
                their services to anyone looking to elevate their digital game.
              </div>
              <div className="item-im">
                <img src={i2} alt="profile" />
                <span>Pete Scott</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <HaveProject />
      <Footer />
    </div>
  );
}

export default About;
