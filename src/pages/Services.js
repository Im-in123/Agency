import React from "react";
import { Link } from "react-router-dom";
import ClientsWorkedWith from "../components/ClientsWorkedWith";
import Footer from "../components/Footer";
import HaveProject from "../components/HaveProject";
import Header from "../components/Header";
import { SITE_NAME, LIVE_URL } from "../constants/constant";
import { Helmet } from "react-helmet";

function Services() {
  return (
    <div>
      <Helmet>
        <title>Services - {SITE_NAME}</title>
        <meta
          name="description"
          content={`Explore our services and discover how we can help you achieve your goals at ${SITE_NAME}. ${LIVE_URL}`}
        />
      </Helmet>
      <Header name="Services" />
      <section className="serv-page">
        <div className="serv-page-content">
          <h1 className="big-hh center-text">How can we help you?</h1>
          <div className="s-grid">
            <div className="s-grid-inner">
              <h2 className="small-hh">Creative Design</h2>
              <div>
                Our team of professional graphic and web designers will help you
                with unique and creative logo and website designs that will
                match your business.
              </div>
              <Link to="/contact">Get in Touch</Link>
            </div>
            <div className="s-grid-inner s-grid-inner-mid">
              <h2 className="small-hh">Research & Development</h2>
              <div>
                We help you develop the right website with a good user interface
                built after a lot of research in the industry to help you make
                the best out of it.
              </div>
              <Link to="/contact">Get in Touch</Link>
            </div>
            <div className="s-grid-inner">
              <h2 className="small-hh">Hosting</h2>
              <div>
                We assist you with hosting on the best hosting providers
              </div>
              <Link to="/contact">Get in Touch</Link>
            </div>
          </div>
        </div>
      </section>
      <ClientsWorkedWith top="small" />
      <HaveProject />
      <Footer />
    </div>
  );
}

export default Services;
