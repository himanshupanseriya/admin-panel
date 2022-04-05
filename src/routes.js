import React from "react";

const Employee = React.lazy(() => import("./Container/Employee/Employee"))
const Commision = React.lazy(() => import("./Container/Commission/Commision"))
const Vendros = React.lazy(() => import("./Container/Vendors/Vendros"))
const Client = React.lazy(() => import("./Container/Clients/Client"))

const routes = [
  // { path: "/", exact: true, name: "Employee" },
  { path: "/employee", name: "Employee", element: Employee },
  { path: "/commision", name: "Commision", element: Commision },
  { path: "/vendros", name: "Vendros", element: Vendros },
  { path: "/client", name: "Client", element: Client },
];

export default routes;
