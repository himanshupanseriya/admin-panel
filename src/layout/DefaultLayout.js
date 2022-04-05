import React from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import AppContent from "../Components/Content"

const DefaultLayout = () => {
  const sidebarShow = useSelector((state) => state.sidebarShow);

  return (
    <div>
      <Sidebar title={"ZECHROME"} />
      <div
        className="wrapper d-flex flex-column min-vh-100 "
        style={{
          paddingLeft: sidebarShow ? "256px" : "",
          transition: "0.3s ease",
        }}
      >
        <Header />
        <div className="body flex-grow-1 px-3">
          <AppContent />
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
