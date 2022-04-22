import React from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import AppContent from "../Components/Content";
import Footer from "../Components/Footer";

const DefaultLayout = () => {
  const sidebarShow = useSelector((state) => state.changeState.sidebarShow);

  return (
    <div>
      <Sidebar title={"ZECHROME"} />
      <div
        className="wrapper d-flex flex-column min-vh-100 "
        style={{
          paddingLeft: sidebarShow ? "256px" : "10px",
          transition: "0.3s ease",
        }}
      >
        <Header />
        <div className="body flex-grow-1 mt-4" style={{paddingTop : "65px"}}>
          <AppContent />
        </div>
        <Footer/>
      </div>
    </div>
  );
};

export default DefaultLayout;
