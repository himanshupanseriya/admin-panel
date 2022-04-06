import "@coreui/coreui/dist/css/coreui.min.css";
import { CCard, CCardHeader } from "@coreui/react";
import React, { useEffect, useState } from "react";
import { getEmployee } from "../../Services/EmployeeApi";
import EmployeeModel from "./EmployeeModel";
import EmployeeTable from "./EmployeeTable";
// import { CDataTable } from "@coreui/react";
import { CBadge, CButton, CCardBody, CCollapse } from "@coreui/react";
import { deleteEmployee } from "../../Services/EmployeeApi";
import CIcon from "@coreui/icons-react";
import { cilPencil, cilTrash } from "@coreui/icons";

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
    // { key: "Index", label: "Index" },
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
    // Index:(item,index)=>{
    //   return(
    //     <>
    //     <td>
    //       {index+1}
    //     </td>
    //     </>
    //   )
    // },

    delete: (item, index) => {
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
                setShowModal(true);
                setEmplyoeeList(item);
              }}
            >
              {/* EDIT */}
              <CIcon icon={cilPencil}></CIcon>
            </CButton>
            <CButton
              color="danger"
              variant="outline"
              shape="square"
              size="sm"
              onClick={() => {
                deleteUser(item._id);
              }}
            >
              {/* DELETE */}
              <CIcon icon={cilTrash}></CIcon>
            </CButton>
          </td>
        </>
      );
    },
  };

  return (
    <>
      <CCard>
        <CCardHeader className="d-flex justify-content-between align-items-center">
          <EmployeeModel
            showModal={showModal}
            setShowModal={setShowModal}
            emplyoeeList={emplyoeeList}
            setUserData={setUserData}
            init={init}
          />
        </CCardHeader>
        <EmployeeTable
          init={init}
          fields={fields}
          data={userData}
          scopedSlots={scopedSlots}
          onClickFunc={onRowClick}
        />
      </CCard>
    </>
  );
};

export default Employee;
