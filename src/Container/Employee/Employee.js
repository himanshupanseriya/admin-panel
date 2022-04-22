import { CCard, CCardHeader } from "@coreui/react";
import React, { useEffect, useState } from "react";
import {
  searchEmployeesData,
} from "../../Services/EmployeeApi";
import EmployeeModel from "./EmployeeModel";
import EmployeeTable from "./EmployeeTable";
import { CButton } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilPencil, cilTrash } from "@coreui/icons";
import { useDispatch } from "react-redux";
import {
  employeeDataDelete,
} from "../../Redux/Actions/EmployeeAction";
import WarningModel from "../../Components/WarningModel";
import moment from "moment";

const InitialEmployee = {
  firstName: "",
  lastName: "",
  mobile: "",
  email: "",
  dob: "",
  salary: "",
  address1: "",
  address2: "",
  status: "",
  form_entry_date: "",
  process_date: "",
  trial_start_date: "",
  trial_end_date: "",
  employee_start_date: "",
  rejected_date: "",
  employee_code: "",
  profile_photo: "",
  aadharCard_photo: "",
  panCard_photo: "",
};

const Initialfiler = {
  from_date: "",
  to_date: "",
  status_selected: false,
  status_processing: false,
  status_in_trial: false,
  status_pending: false,
  status_rejected: false,
};

const Employee = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [employee, setEmployee] = useState(InitialEmployee);
  const [getData, setGetData] = useState();
  const [deleteModel, setDeleteModel] = useState(false);
  const [employeeId, setEmployeeId] = useState(0);
  const [searchDataObj, setSearchDataObj] = useState(Initialfiler);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    let res = await searchEmployeesData(searchDataObj);
    setGetData(res.data);
  };

  const fields = [
    { key: "firstName", label: "First Name" },
    { key: "lastName", label: "Last Name" },
    { key: "mobile", label: "Mobile" },
    { key: "email", label: "Email" },
    { key: "dob", label: "DOB" },
    { key: "salary", label: "Salary" },
    { key: "address1", label: "Address" },
    { key: "address2", label: "Address2" },
    { key: "status", label: "status" },
    { key: "form_entry_date", label: "Form Entry Date" },
    { key: "process_date", label: "Process Date" },
    { key: "trial_start_date", label: "Trial Start Date" },
    { key: "trial_end_date", label: "Trial End Date" },
    { key: "employee_start_date", label: "Employee Start Date" },
    { key: "rejected_date", label: "Rejected Date" },
    { key: "employee_code", label: "Employee Code" },
    { key: "delete", label: "" },
  ];

  const sureWantDelete = (sureToDelete) => {
    if (sureToDelete) {
      dispatch(employeeDataDelete(employeeId));
    }
  };

  const scopedSlots = {
    dob: (item) => {
      let _date = moment(item.dob).format("DD-MM-YYYY");
      return <td>{_date}</td>;
    },
    form_entry_date: (item) => {
      let _date = moment(item.form_entry_date)?.format("DD-MM-YYYY");
      // let _date = item.form_entry_date?.slice(0, 10);
      return <td>{item.form_entry_date ? _date : "NAN"}</td>;
    },
    process_date: (item) => {
      let _date = moment(item.process_date)?.format("DD-MM-YYYY");
      // let _date = item.process_date?.slice(0, 10);
      return <td>{item.process_date ? _date : "NAN"}</td>;
    },
    trial_start_date: (item) => {
      let _date = moment(item.trial_start_date)?.format("DD-MM-YYYY");
      // let _date = item.trial_start_date?.slice(0, 10);
      return <td>{item.trial_start_date ? _date : "NAN"}</td>;
    },
    trial_end_date: (item) => {
      let _date = moment(item.trial_end_date)?.format("DD-MM-YYYY");
      // let _date = item.trial_end_date?.slice(0, 10);
      return <td>{item.trial_end_date ? _date : "NAN"}</td>;
    },
    employee_start_date: (item) => {
      let _date = moment(item.employee_start_date)?.format("DD-MM-YYYY");
      // let _date = item.employee_start_date?.slice(0, 10);
      return <td>{item.employee_start_date ? _date : "NAN"}</td>;
    },
    rejected_date: (item) => {
      let _date = moment(item.rejected_date)?.format("DD-MM-YYYY");
      // let _date = item.rejected_date?.slice(0, 10);
      return <td>{item.rejected_date ? _date : "NAN"}</td>;
    },
    employee_code: (item) => {
      return <td>{item.employee_code ? item.employee_code : "NAN"}</td>;
    },
    status: (item) => {
      return (
        <>
          <td className="text-center">
            {item.status === "SELECTED" ? (
              <span className="badge bg-success rounded-pill py-1 px-2 font-weight-normal">
                SELECTED
              </span>
            ) : (
              <span
                className={
                  item.status === "REJECTED"
                    ? "badge bg-danger rounded-pill py-1 px-2 font-weight-normal"
                    : "badge bg-warning rounded-pill py-1 px-2 font-weight-normal"
                }
              >
                {item.status}
              </span>
            )}
          </td>
        </>
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
                setEmployee({
                  ...employee,
                  firstName: item.firstName,
                  lastName: item.lastName,
                  mobile: item.mobile,
                  email: item.email,
                  dob: moment(item.dob).format("YYYY-MM-DD"),
                  salary: item.salary,
                  address1: item.address1,
                  address2: item.address2,
                  status: item.status,
                  form_entry_date: moment(item.form_entry_date).format(
                    "YYYY-MM-DD"
                  ),
                  process_date: moment(item.process_date).format("YYYY-MM-DD"),
                  trial_start_date: moment(item.trial_start_date).format(
                    "YYYY-MM-DD"
                  ),
                  trial_end_date: moment(item.trial_end_date).format(
                    "YYYY-MM-DD"
                  ),
                  employee_start_date: moment(item.employee_start_date).format(
                    "YYYY-MM-DD"
                  ),
                  rejected_date: moment(item.rejected_date).format(
                    "YYYY-MM-DD"
                  ),
                  employee_code: item.employee_code,
                  // profile_photo: "",
                  // aadharCard_photo: "",
                  // panCard_photo: "",
                });
                // setEmployee(item);
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
                setEmployeeId(item._id);
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
      <WarningModel
        deleteModel={deleteModel}
        setDeleteModel={setDeleteModel}
        sureWantDelete={sureWantDelete}
      />
      <CCard>
        <CCardHeader className="d-flex align-items-center">
          <EmployeeModel
            showModal={showModal}
            setShowModal={setShowModal}
            employee={employee}
            setEmployee={setEmployee}
            InitialEmployee={InitialEmployee}
            setGetData={setGetData}
            init={init}
          />
        </CCardHeader>
        <EmployeeTable
        searchDataObj={searchDataObj}
          fields={fields}
          data={getData}
          scopedSlots={scopedSlots}
          setGetData={setGetData}
          setSearchDataObj={setSearchDataObj}
        />
      </CCard>
    </>
  );
};

export default Employee;
