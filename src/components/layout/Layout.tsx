import React from "react";
import Home from "../../Pages/Home/Home";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import "./layout.css";
import { useDispatch, useSelector } from "react-redux";
import { sidebarActions } from "../../store/sidebarSlice";
import { RootState } from "../../store";
import Menus from "../menus/Menus";

const Layout = () => {
  const dispatch = useDispatch();
  const sidebarToggle = useSelector((state: RootState) => state.sidebar.value);

  //to handle toogle

  const handleToggle = () => {
    dispatch(sidebarActions.toogleSidebar());
  };
  return (
    <>
      <div className="sidebar-section">
        <div className={sidebarToggle ? "sidebar-toggle sidebar" : "sidebar"}>
          <div className="sidebar-toggle-icons">
            <p onClick={handleToggle}>
              {sidebarToggle ? (
                <AiOutlineDoubleLeft size={30} />
              ) : (
                <AiOutlineDoubleRight size={30} />
              )}
            </p>
          </div>
          <Menus />
        </div>
        <div className="container">
          <Home />
        </div>
      </div>
    </>
  );
};

export default Layout;
