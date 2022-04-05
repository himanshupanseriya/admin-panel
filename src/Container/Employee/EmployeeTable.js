import React from "react";
import { CCardBody, CButton } from "@coreui/react";
import CDataTable from "./CDataTable";
import { deleteEmployee } from "../Services/EmployeeApi";

class DataTable extends React.Component {
  render() {
    const {
      fields,
      data,
      onClickFunc,
      customObj,
      headerComp,
      scopedSlots,
      underTableSlot,
      showAddForm,
    } = this.props;
    return (
      <div>
        <CCardBody>
          <CDataTable
            items={data}
            fields={fields}
            columnFilter
            tableFilter
            cleaner
            itemsPerPageSelect
            itemsPerPage={20}
            hover
            sorter
            pagination
            onRowClick={onClickFunc}
            customObj={customObj}
            headerComp={headerComp}
            showAddForm={showAddForm}
            border
            underTableSlot={underTableSlot}
            scopedSlots={{
              delete: (item, index) => {
                return (
                  <td className="py-2">
                    <CButton
                      color="primary"
                      variant="outline"
                      shape="square"
                      size="sm"
                      onClick={() => {
                        deleteEmployee(data[index]._id);
                        
                      }}
                    >
                      DELETE
                    </CButton>
                    {"  "}
                    <CButton
                      color="primary"
                      variant="outline"
                      shape="square"
                      size="sm"
                      onClick={() => {
                        // toggleDetails(index);
                      }}
                    >
                      VIEW
                    </CButton>
                  </td>
                );
              },
            }}
          ></CDataTable>
        </CCardBody>
      </div>
    );
  }
}
export default EmployeeTable;
