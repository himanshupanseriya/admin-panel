import React from "react";

const Employee = () => import("./Components/employe");
const Commision = () => import("./Components/commision");
const Vendros = () => import("./Components/vendros");
const Client = () => import("./Components/client");

const Routes = [
  { path: "/", exact: true, name: "Employee" },
  { path: "/employee", name: "Employee", element: Employee },
  { path: "/commision", name: "Commision", element: Commision },
  { path: "/vendros", name: "Vendros", element: Vendros },
  { path: "/client", name: "Client", element: Client },
];

export default Routes;
