import React from "react";
const formRangeUI = (props) => {
  const { modelNumberShow } = props;

  return (
    <>
      <div
        style={{
          background: "#e3e8ec",
          height: "2px",
          width: "80%",
          marginLeft: "7%",
          display: "flex",
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        <div
          className={
            modelNumberShow.firstModal ||
            modelNumberShow.secondModel ||
            modelNumberShow.tiredModal
              ? "btn-primary"
              : ""
          }
          style={{
            height: "35px",
            width: "35px",
            borderRadius: "50%",
            position: "absolute",
            top: "-15px",
            left: "-1%",
            color: "#fff",
            display: "grid",
            placeItems: "center",
          }}
        >
          1
        </div>
        <div
          className={
            modelNumberShow.secondModel || modelNumberShow.tiredModal
              ? "btn-primary"
              : ""
          }
          style={{
            backgroundColor: "#e3e8ec",
            height: "35px",
            width: "35px",
            borderRadius: "50%",
            position: "absolute",
            top: "-15px",
            left: "50%",
            color: "#fff",
            display: "grid",
            placeItems: "center",
            id: "id",
          }}
        >
          2
        </div>
        <div
          className={modelNumberShow.tiredModal ? "btn-primary" : ""}
          style={{
            backgroundColor: "#e3e8ec",
            height: "35px",
            width: "35px",
            borderRadius: "50%",
            position: "absolute",
            top: "-15px",
            left: "100%",
            color: "#fff",
            display: "grid",
            placeItems: "center",
            id: "id",
          }}
        >
          <span>3</span>
        </div>
      </div>
    </>
  );
};

export default formRangeUI;
