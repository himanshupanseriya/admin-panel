// import { CBadge, CButton, CCardBody, CCollapse } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import React, { useState } from "react";
import EditEmployee from "../Model/EditEmployee";
import DataTable from "./DataTable";
// import { CDataTable } from "@coreui/react";

const Employee = () => {
  const fields = [
    // { key: "id", label: "No.", _style: { width: "5%" } },
    { key: "fname", label: "First Name" },
    { key: "lname", label: "Last Name" },
    { key: "mobile", label: "Mobile" },
    { key: "email", label: "Email" },
    { key: "dob", label: "Date of Birth" },
    { key: "salary", label: "Salary" },
    { key: "address", label: "Address" },
    { key: "status", label: "status" },
  ];
  const onRowClick = () => {
    alert("Row Clicked");
  };
  let data = [
    {
      _id: "624aea2664be0ff25403fe1f",
      fname: "monik",
      lname: "patel",
      address: "surat",
      status: false,
      __v: 0,
      _id: "624aea2664be0ff25403fe1f",
    },
    {
      _id: "624aea5464be0ff25403fe23",
      fname: "raj",
      lname: "cool",
      address: "surat",
      status: false,
      __v: 0,
      _id: "624aea5464be0ff25403fe23",
    },
  ];
  return (
    <>
      <EditEmployee />
      <DataTable fields={fields} data={data} onClickFunc={onRowClick} />
    </>
  );
};

export default Employee;
