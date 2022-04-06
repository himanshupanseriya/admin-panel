import "@coreui/coreui/dist/css/coreui.min.css";
import { CCard, CCardHeader } from "@coreui/react";
import React, { useEffect, useState } from "react";
import { getEmployee } from "../../Services/EmployeeApi";
import EmployeeModel from "./EmployeeModel";
import EmployeeTable from "./EmployeeTable";
// import { CDataTable } from "@coreui/react";
// import { CBadge, CButton, CCardBody, CCollapse } from "@coreui/react";

const Employee = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    init();
  }, []);
  
  const init = async () => {
    let getTableData = await getEmployee();
    setUserData(getTableData.data);
  };

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
  const onRowClick = (currentRow) => {
    console.log(currentRow);
  };
  
  return (
    <>
      <CCard>
        <CCardHeader className="d-flex justify-content-between align-items-center">
          <EmployeeModel />
        </CCardHeader>
        <EmployeeTable fields={fields} data={userData} onClickFunc={onRowClick} />
      </CCard>
    </>
  );
};

export default Employee;
