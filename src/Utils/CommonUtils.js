import React  from 'react';
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
