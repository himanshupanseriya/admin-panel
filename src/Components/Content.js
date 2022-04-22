import React, { Suspense, useEffect } from "react";
import {
  BrowserRouter as Routes,
  Redirect,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import { CContainer, CSpinner } from "@coreui/react";

// routes config
import contentRoutes from "../routes";
import { employeeData } from "../Redux/Actions/EmployeeAction";
import { useDispatch } from "react-redux";

const Content = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    let pathName = location.pathname;
    pathName = pathName.substring(1);
    let first = pathName.charAt(0);
    let upper = first.toUpperCase();
    pathName = pathName.substring(1);
    document.title = `${upper + pathName}`;
  }, [location.pathname]);

  return (
    <CContainer>
      <Suspense fallback={<CSpinner color="primary" />}>
        <Switch>
          {contentRoutes.map((route, idx) => {
            return (
              route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                >
                  <route.element />
                </Route>
              )
            );
          })}
          <Route path="/">
            <Redirect to="/employee" replace />
          </Route>
        </Switch>
      </Suspense>
    </CContainer>
  );
};

export default React.memo(Content);
