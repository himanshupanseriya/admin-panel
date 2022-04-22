import React, { useState, useEffect } from "react";
import CIcon from "@coreui/icons-react";
import { CCard, CCardHeader } from "@coreui/react";
import { cilChevronLeft, cilChevronRight } from "@coreui/icons";
import CommissionModel from "./CommissionModel";
import CommissionTable from "./CommissionTable";
import "../../Asset/css/CommissionModel.css";
import { CButton } from "@coreui/react";
import { cilPencil, cilTrash, cilWindowRestore } from "@coreui/icons";
import { getCommissionData } from "../../Services/CommissionApi";
import { useDispatch, useSelector } from "react-redux";
import { commissionDate } from "../../Redux/Actions/CommissionAction";
import WarningModel from "../../Components/WarningModel";
import { commissionDataDelete } from "../../Redux/Actions/CommissionAction";
import moment from "moment";
const InitialEmployee = {
  employee_id: "",
  fname: "",
  lname: "",
  email: "",
  mobile: "",
  commission: "",
  tich: "",
  commission_date: moment().format("YYYY-MM-DD"),
};
const Commission = () => {
  const dispatch = useDispatch();
  const [empCommission, setEmpCommission] = useState([]);
  const [deleteModel, setDeleteModel] = useState(false);
  const [emvCommissionAdd, setEmvCommissionAdd] = useState(InitialEmployee);
  const [showModal, setShowModal] = useState(false);
  const [commissionId, setCommissionId] = useState(0);

  useEffect(() => {
    init();
  }, []);

  const useCommissionData = useSelector(
    (state) => state.commissionReducer.commissionData
  );

  const init = async () => {
    dispatch(commissionDate());
  };

  const sureWantDelete = (sureToDelete) => {
    if (sureToDelete) {
      dispatch(commissionDataDelete(commissionId));
    }
  };

  const fields = [
    { key: "fname", label: "First Name" },
    { key: "lname", label: "Last Name" },
    { key: "email", label: "Email" },
    { key: "mobile", label: "Mobile" },
    { key: "commission", label: "Commission" },
    { key: "tich", label: "Tich" },
    { key: "delete", label: "" },
  ];

  const scopedSlots = {
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
                setEmvCommissionAdd(item);
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
                setCommissionId(item._id);
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
          <CommissionModel
            showModal={showModal}
            setShowModal={setShowModal}
            setEmvCommissionAdd={setEmvCommissionAdd}
            emvCommission={emvCommissionAdd}
          />
        </CCardHeader>
        <CommissionTable
          fields={fields}
          data={useCommissionData}
          scopedSlots={scopedSlots}
        />
      </CCard>
    </>
  );
};

export default Commission;
