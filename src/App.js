import React from "react";
import {
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";
import Posts from"./Posts"
import Graph from "./Graph"



const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Posts /> },
    { path: "dashboard", element: <Graph /> },
    
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
