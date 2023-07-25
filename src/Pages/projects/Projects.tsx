import React from "react";
import "./projects.css";
import abstract from "../../assets/images/AbstractWaves.png";
import arrow from "../../assets/images/Arrow.png";
import sparkles from "../../assets/images/Sparkles.png";

type Props = {};

const Projects = (props: Props) => {
  return (
    <>
      <div className="container project">
        <h2 className=" col-12 text-center mb-1 mt-3 text-uppercase">
          Top recent projects
        </h2>
        <hr />
        <p className="pb-3 text-center">
          Here is my top 3 recent project with live links and source code
        </p>
        <div className="row" id="ads">
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge"> Full Stack</span>
                <img src={abstract} alt="project1" />
              </div>
              <div className="card-image-overlay mt-3 mx-auto">
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">React</span>
                <span className="card-detail-badge">MongoDb</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title mx-auto">
                  <h5 className="text-uppercase">OM shopping website</h5>
                </div>
                <a
                  href="https://github.com/opdhiraj/react_backend"
                  className="ad-btn"
                >
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge"> Full Stack</span>
                <img src={sparkles} alt="project1" />
              </div>
              <div className="card-image-overlay mt-3 mx-auto">
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">React</span>
                <span className="card-detail-badge">MongoDb</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title mx-auto">
                  <h5 className="text-uppercase">Test website</h5>
                </div>
                <a
                  href="https://github.com/opdhiraj/redux-cart"
                  className="ad-btn"
                >
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge"> Full Stack</span>
                <img src={arrow} alt="project1" />
              </div>
              <div className="card-image-overlay mt-3 mx-auto">
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">React</span>
                <span className="card-detail-badge">MongoDb</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title mx-auto">
                  <h5 className="text-uppercase">Test2 website</h5>
                </div>
                <a
                  href="https://github.com/opdhiraj/react_frontend"
                  className="ad-btn"
                >
                  View
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
