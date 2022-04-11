import React from "react";

const Employee = React.lazy(() => import("./Container/Employee/Employee"));
const Commission = React.lazy(() => import("./Container/Commission/Commission"));
const Salary = React.lazy(() => import("./Container/Salary/Salary"));
const Vendors = React.lazy(() => import("./Container/Vendors/Vendors"));
const Client = React.lazy(() => import("./Container/Clients/Client"));

const routes = [
  // { path: "/", exact: true, name: "Employee" },
  { path: "/employee", name: "Employee", element: Employee },
  { path: "/commission", name: "Commission", element: Commission },
  { path: "/salary", name: "Salary", element: Salary },
  { path: "/vendors", name: "Vendors", element: Vendors },
  { path: "/client", name: "Client", element: Client },
];

export default routes;
