import React, { useState, useEffect } from "react";
import CIcon from "@coreui/icons-react";
import { CCard, CCardHeader } from "@coreui/react";
import { cilChevronLeft, cilChevronRight } from "@coreui/icons";
import CommissionModel from "./CommissionModel";
import CommissionTable from "./CommissionTable";
import "../../Asset/css/CommissionModel.css";
import { getEmployeesData } from "../../Services/CommissionApi";

const InitialEmployee = {
  fname: "",
  lname: "",
  mobile: "",
  email: "",
  dob: "",
  salary: "",
  address: "",
  status: "",
};
const Commission = () => {
  const [empCommission, setEmpCommission] = useState([]);
  const [emvCommissionAdd, setEmvCommissionAdd] = useState(InitialEmployee);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    let getTableData = await getEmployee();
    setEmpCommission(getTableData.data);
  };

  const fields = [
    { key: "fname", label: "First Name" },
    { key: "lname", label: "Last Name" },
    { key: "email", label: "Email" },
    { key: "mobile", label: "Mobile" },
    { key: "commission", label: "Commission" },
    { key: "tich", label: "Tich" },
  ];

  return (
    <>
      <CCard>
        <CCardHeader className="d-flex align-items-center">
          <CommissionModel showModal={showModal} setShowModal={setShowModal} />
        </CCardHeader>
        <CommissionTable fields={fields} data={empCommission} />
      </CCard>
    </>
  );
};

export default Commission;
