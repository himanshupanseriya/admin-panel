import React from "react";

export const RequiredField = () => {
  return (
    <p
      className="reqValidator"
      style={{
        color: "red",
        marginBottom: 0,
        fontSize: 9,
      }}
    >
      This field is required
    </p>
  );
};

export const deleteById = ([...array], id) => {
  return array.filter((e) => e._id !== id);
};

export const addData = ([...array], data) => {
  array.push(data);
  return array;
};

export const editData = ([...array], data) => {
  let index = array.findIndex((e) => e._id === data._id);
  array.splice(index, 1, data);
  return array;
};
