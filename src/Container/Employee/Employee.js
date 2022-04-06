import "@coreui/coreui/dist/css/coreui.min.css";
import React, { useEffect, useState } from "react";
import { getEmployee } from "../../Services/EmployeeApi";
import EmployeeModel from "./EmployeeModel";
import EmployeeTable from "./EmployeeTable";
// import { CDataTable } from "@coreui/react";
import { CBadge, CButton, CCardBody, CCollapse } from "@coreui/react";
import { deleteEmployee } from "../../Services/EmployeeApi";

const Employee = () => {
  const [userData, setUserData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [emplyoeeList, setEmplyoeeList] = useState({});

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
    { key: "delete", label: "" },
  ];
  const onRowClick = (currentRow) => {
    console.log(currentRow);
  };

  const deleteUser = async (id) => {
    await deleteEmployee(id);
    init();
  };

  const scopedSlots = {
    delete: (item, index) => {
      return (
        <>
          <td className="py-2">
            <CButton
              color="primary"
              variant="outline"
              shape="square"
              size="sm"
              onClick={() => {
                deleteUser(item._id);
              }}
            >
              DELETE
            </CButton>{" "}
            <CButton
              color="primary"
              variant="outline"
              shape="square"
              size="sm"
              onClick={() => {
                setShowModal(true);
                setEmplyoeeList(item);
              }}
            >
              EDIT
            </CButton>
          </td>
        </>
      );
    },
  };

  return (
    <>
      <EmployeeModel
        showModal={showModal}
        setShowModal={setShowModal}
        emplyoeeList={emplyoeeList}
        setUserData={setUserData}
      />
      <EmployeeTable
        fields={fields}
        data={userData}
        scopedSlots={scopedSlots}
        onClickFunc={onRowClick}
      />
    </>
  );
};

export default Employee;
