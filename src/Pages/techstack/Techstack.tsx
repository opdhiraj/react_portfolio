import React from "react";
import { TechstackList } from "../utils/TechstackList";
import "./techstack.css";

type Props = {};

const Techstack = (props: Props) => {
  return (
    <>
      <div className="container techstack">
        <h2 className=" col-12 text-center mb-1 mt-3 text-uppercase">
          Techstack
        </h2>
        <hr />
        <p className="pb-3 text-center">
          ➡️ Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
          nostrum.
        </p>
        <div className="row">
          {TechstackList.map((tech) => (
            <div key={tech._id} className="col-md-3">
              <div className="card m-2">
                <div className="card-content">
                  <div className="card-body">
                    <div className="media d-flex justify-content-center">
                      <div className="align-self-center">
                        <tech.icon className="tech-icon" />
                      </div>
                      <div className="media-body">
                        <h5>{tech.name}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Techstack;
