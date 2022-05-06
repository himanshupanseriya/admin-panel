import React from "react";

const NextPrevious = (props) => {
  const {
    previousHandel,
    nextHandle,
    previousButtonText,
    nextButtonText,
    onSaveEmployee,
    onUpdateEmployee
  } = props;

  const previousHandelFun = () => {
    previousHandel();
  };

  const nextHandleFun = () => {
    if (nextButtonText == "Next") {
      nextHandle();
    } else if (nextButtonText == "Save") {
      onSaveEmployee();
    } else if (nextButtonText == "Update") {
      onUpdateEmployee();
    }
  };
  return (
    <>
      <button
        className="btn btn-danger"
        style={{ width: 100, color: "White" }}
        onClick={previousHandelFun}
      >
        {previousButtonText ?? "Previous"}
      </button>
      <button
        className="btn btn-success"
        style={{ width: 100, color: "White" }}
        onClick={nextHandleFun}
      >
        {nextButtonText}
      </button>
    </>
  );
};

export default NextPrevious;
