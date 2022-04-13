import { cilCaretRight } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { CButton } from "@coreui/react";
import React from "react";

function Client() {
  return (
    <>
      <div>Client</div>
      <CButton color="info" className="me-2">
        <CIcon content={cilCaretRight} width={20} />
        button
      </CButton>
      <CButton color="danger" className="me-2">
        <CIcon content={cilCaretRight} width={20} />
        button
      </CButton>
      <CButton color="success" className="me-2">
        <CIcon content={cilCaretRight} width={20} />
        button
      </CButton>
      <CButton color="warning" className="me-2">
        <CIcon content={cilCaretRight} width={20} />
        button
      </CButton>
      <CButton color="info" className="me-2">
        <CIcon content={cilCaretRight} width={20} />
        button
      </CButton>
    </>
  );
}

export default Client;
