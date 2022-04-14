import { CCard, CCardBody, CCardHeader } from "@coreui/react";
import React, { useState } from "react";
import CDataTable from "../../Components/CDataTable";
import SalaryModel from "./SalaryModel";
import moment from "moment";

const initialSalary = {
  employee_id:"",
  fname: "",
  lname: "",
  mobile: "",
  email: "",
  salary_month: moment().format("YYYY-MM"),
  paid_salary: "",
};
function Salary() {
  const [salary, setSalary] = useState(initialSalary);
  const [showModal, setShowModal] = useState(false);
  const fields = [
    { key: "fname", label: "First Name" },
    { key: "lname", label: "Last Name" },
    { key: "email", label: "Email" },
    { key: "mobile", label: "Mobile" },
    { key: "salary_month", label: "Month" },
    { key: "paid_salary", label: "Paid Salary" },
    { key: "paid_date", label: "Paid Date" },
  ];
  return (
    <>
      <CCard>
        <CCardHeader className="d-flex align-items-center">
          <SalaryModel
            salary={salary}
            setSalary={setSalary}
            initialSalary={initialSalary}
            showModal={showModal}
            setShowModal={setShowModal}
          />
        </CCardHeader>
        <CCardBody>
          <CDataTable fields={fields} />
        </CCardBody>
      </CCard>
    </>
  );
}

export default Salary;
