import React from "react";
import "./menu.css";
import opd from "../../assets/images/opd photo.jpg";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import {
  FcAbout,
  FcBiotech,
  FcBusinessContact,
  FcHome,
  FcPortraitMode,
  FcReadingEbook,
  FcVideoProjector,
  FcVoicePresentation,
} from "react-icons/fc";
type Props = {};

const Menus = (props: Props) => {
  const sidebarToggle = useSelector((state: RootState) => state.sidebar.value);

  return (
    <>
      {sidebarToggle ? (
        <>
          <div className="navbar-profile-pic">
            <img src={opd} alt="portfolio" />
          </div>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <FcHome />
                Home
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <FcAbout />
                About
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <FcPortraitMode />
                Work experience
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <FcBiotech />
                Tech Stack
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <FcReadingEbook />
                Education
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <FcVideoProjector />
                Projects
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <FcVoicePresentation />
                Testimonial
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <FcBusinessContact />
                Contact
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <FcHome title="Home" />
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <FcAbout title="About" />
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <FcPortraitMode title="Work experience" />
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <FcBiotech title="Tech Stack" />
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <FcReadingEbook title="Education" />
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <FcVideoProjector title="Project" />
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <FcVoicePresentation title="Testimonial " />
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <FcBusinessContact title="Contact" />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Menus;
