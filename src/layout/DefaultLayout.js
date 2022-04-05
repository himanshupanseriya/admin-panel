import React from "react";
import Header from "../Components/header";
import Sidebar from "../Components/sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import AppContent from "../Components/content"

const DefaultLayout = () => {
  const sidebarShow = useSelector((state) => state.sidebarShow);

  return (
    <div>
      <Sidebar />
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
