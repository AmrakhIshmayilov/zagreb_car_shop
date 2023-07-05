import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "animate.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Spinner from "./components/Spinner/Spinner";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Suspense fallback={<Spinner />}>
    <Router>
      <App />
    </Router>
  </Suspense>
);
