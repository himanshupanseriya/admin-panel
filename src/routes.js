import React from "react";

const Employee = React.lazy(() => import("./Components/Employee"))
const Commision = React.lazy(() => import("./Components/Commision"))
const Vendros = React.lazy(() => import("./Components/Vendros"))
const Client = React.lazy(() => import("./Components/Client"))

const routes = [
  // { path: "/", exact: true, name: "Employee" },
  { path: "/employee", name: "Employee", element: Employee },
  { path: "/commision", name: "Commision", element: Commision },
  { path: "/vendros", name: "Vendros", element: Vendros },
  { path: "/client", name: "Client", element: Client },
];

export default routes;
