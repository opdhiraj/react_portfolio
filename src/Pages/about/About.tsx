import React from "react";
import opd from "../../assets/images/opd photo.jpg";
import "./about.css";
type Props = {};

const About = (props: Props) => {
  return (
    <>
      <div className="about">
        <div className="row">
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12  about-img">
            <img src={opd} alt="profile_pic" />
          </div>
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
            <h1>About us</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloremque eos facilis, quae nemo molestiae quos veniam laudantium
              numquam facere, asperiores odit odio, nobis minima doloribus
              explicabo. Facilis laboriosam reiciendis hic repellendus
              voluptatibus? Velit quos non ab eaque error! Quibusdam, optio
              nobis eos eum corrupti deserunt adipisci? Quia, Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Magnam voluptas impedit at
              tenetur laboriosam accusantium repellendus non, reiciendis
              repudiandae assumenda odio consequatur provident quas! Ad ab
              dolorum iusto quos error.
            </p>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default About;
