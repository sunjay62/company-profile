import React from "react";
import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import About from "../../components/about/About";
import Business from "../../components/business/Business";
import Business2 from "../../components/business2/Business2";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";
import Milestone from "../../components/milestone/Milestone";
import Marquee from "../../components/marquee/Marquee";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <section id="home">
        <Hero
          cName="hero"
          heroImg="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          title="Specialist of Network Solution"
          text="Let's Join to Partnership With us"
          buttonText="Contact Us"
          url="#contact"
          btnClass="show"
        />
      </section>
      <section id="about">
        <div className="aboutSection">
          <About />
        </div>
      </section>
      <section>
        <div className="milestoneSection">
          <Milestone />
        </div>
      </section>
      <section>
        <div className="marqueeSection">
          <Marquee />
        </div>
      </section>
      <section id="business">
        <div className="businessSection">
          <Business2 />
        </div>
      </section>
      <section id="contact">
        <div className="contactSection">
          <Contact />
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
