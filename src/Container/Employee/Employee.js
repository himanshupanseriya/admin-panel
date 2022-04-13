import { CCard, CCardHeader } from "@coreui/react";
import React, { useEffect, useState } from "react";
import { getEmployee } from "../../Services/EmployeeApi";
import EmployeeModel from "./EmployeeModel";
import EmployeeTable from "./EmployeeTable";
import { CButton } from "@coreui/react";
import { deleteEmployee } from "../../Services/EmployeeApi";
import CIcon from "@coreui/icons-react";
import { cilPencil, cilTrash, cilWindowRestore } from "@coreui/icons";
import WarningModel from "../../Components/WarningModel";

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

const Employee = () => {
  const [userData, setUserData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [employee, setEmployee] = useState(InitialEmployee);
  const [deleteModel, setDeleteModel] = useState(false);
  const [employeeId, setEmployeeId] = useState(0);

  const init = async () => {
    let getTableData = await getEmployee();
    setUserData(getTableData.data);
  };

  useEffect(() => {
    init();
  }, []);

  const fields = [
    { key: "fname", label: "First Name" },
    { key: "lname", label: "Last Name" },
    { key: "mobile", label: "Mobile" },
    { key: "email", label: "Email" },
    { key: "dob", label: "DOB" },
    { key: "salary", label: "Salary" },
    { key: "address", label: "Address" },
    { key: "status", label: "status" },
    { key: "delete", label: "" },
  ];

  const sureWantDelete = async (sureToDelete) => {
    if(sureToDelete){
      await deleteEmployee(employeeId);
      init();
    }
  }
  const scopedSlots = {
    status: (item) => {
      return (
        <td className="text-center">
          {item.status === true ? (
            <span className="badge bg-success rounded-pill py-1 px-2 font-weight-normal">Active</span>
          ) : (
            <span className="badge bg-danger rounded-pill py-1 px-2 font-weight-normal">Inactive</span>
          )}
        </td>
      );
    },
    delete: (item) => {
      return (
        <>
          <td className="py-2 text-center">
            <CButton
              color="warning"
              variant="outline"
              shape="square"
              size="sm"
              className="me-2"
              onClick={() => {
                setEmployee(item);
                setShowModal(true);
              }}
            >
              <CIcon content={cilPencil}></CIcon>
            </CButton>
            <CButton
              color="danger"
              variant="outline"
              shape="square"
              size="sm"
              onClick={() => {
                setDeleteModel(true);
                setEmployeeId(item._id)
              }}
            >
              <CIcon content={cilTrash}></CIcon>
            </CButton>
          </td>
        </>
      );
    },
  };

  return (
    <>
      <WarningModel deleteModel={deleteModel} setDeleteModel={setDeleteModel} sureWantDelete={sureWantDelete} />
      <CCard>
        <CCardHeader className="d-flex align-items-center">
          <EmployeeModel
            showModal={showModal}
            setShowModal={setShowModal}
            employee={employee}
            setEmployee={setEmployee}
            InitialEmployee={InitialEmployee}
            init={() => init()}
          />
        </CCardHeader>
        <EmployeeTable
          fields={fields}
          data={userData}
          scopedSlots={scopedSlots}
        />
      </CCard>
    </>
  );
};

export default Employee;
