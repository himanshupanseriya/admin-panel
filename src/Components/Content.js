import React, { Suspense, useEffect } from 'react'
import { BrowserRouter as Routes, Redirect, Route, Switch, useLocation } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'

// routes config
import contentRoutes from '../routes'

const Content = () => {
  const location = useLocation()
  useEffect(()=>{
    let pathName = location.pathname;
    pathName = pathName.substring(1)
    let first = pathName.charAt(0);
    let upper = first.toUpperCase();
    pathName = pathName.substring(1)
    document.title = `${upper + pathName}`;
  },[location.pathname])
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
                  // element={}
                ><route.element />
                  </Route>
              )
            )
          })}
          <Route path="/" element={<Redirect to="/employee" replace />} />
        </Switch>
      </Suspense>
    </CContainer>
  )
}

export default React.memo(Content)
