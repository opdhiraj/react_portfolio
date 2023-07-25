import React from "react";
import "./home.css";
import Typewriter from "typewriter-effect";
import hello from "../../assets/docs/hello.pdf";
// import om from "../../assets/docs/om.pdf";
import kit from "../../assets/docs/Kit.pdf";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <div className="container-fluid home-container">
        <div className="container home-content">
          <h2> Hi I am a</h2>
          <h1>
            <Typewriter
              options={{
                strings: ["OM ", "PRAKASH ", "DHIRAJ"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>

          <div className="home-buttons col-sm-12 col-xs-12 col-xl-6 col-lg-6 col-xs-12 ">
            <button className="btn btn-hire"> Hire Me</button>
            <a className="btn btn-cv" href={hello} download="hello.pdf">
              My Resume
            </a>
            <a className="btn btn-cv" href={kit} download="kit.pdf">
              My Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
