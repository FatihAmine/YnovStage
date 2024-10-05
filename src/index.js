import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Login from "./pages/Login";
import Sign from "./pages/Sign";
import Dashboard from "./pages/Dashboard";
import Todo from "./pages/Todo";
import Done from "./pages/Done";
import Submit from "./pages/Submit";
import AbsenceStat from "./pages/AbsenceStat";
import Justification from "./pages/Justification";
import Submitdoc1 from "./pages/Submitdoc1";
import Submitdoc2 from "./pages/Submitdoc2";
import Alldoc from "./pages/Alldoc";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "login",
    element: <Login/>,
  },
  {
    path: "signin",
    element: <Sign/>,
  },
  {
    path: "",
    element: <Dashboard/>,
  },
  {
    path: "todo",
    element: <Todo/>,
  },
  {
    path: "done",
    element: <Done/>,
  },
  {
    path: "submit",
    element: <Submit/>,
  },
  {
    path: "AbsenceStat",
    element: <AbsenceStat/>,
  },
  {
    path: "Justification",
    element: <Justification/>,
  },
  {
    path: "Submitdoc2",
    element: <Submitdoc2/>,
  },
  {
    path: "Submitdoc1",
    element: <Submitdoc1/>,
  },
  {
    path: "Alldoc",
    element: <Alldoc/>,
  },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={router} />
);

reportWebVitals();
