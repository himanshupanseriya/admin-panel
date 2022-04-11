import React from 'react';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@coreui/coreui-pro/scss/coreui.scss"
import Layout from "./layout/DefaultLayout";
import { BrowserRouter as Router } from "react-router-dom";
import "./Asset/css/index.css"
function App() {
  return (
    <>
      <Router>
        <Layout />
      </Router>
    </>
  );
}

export default App;
