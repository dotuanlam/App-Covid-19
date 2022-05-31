import React from "react";
import ReactDOM from "react-dom/client";
import Loading from "./components/Loading/Index";
import App from "./App";
import PageNotFound from "./pages/pageNotFound/index";
import AuthRoute from "./components/AuthRoute/index";
import reportWebVitals from "./reportWebVitals";
import GlobalCovid19 from "./components/GlobalCovid19";
import CountriesCovid19 from "./components/CountriesCovid19";
import Signin from "./pages/Signin/index";
import Signup from "./pages/Signup/index";
import ListCountries from "./components/ListCountries";
import PrivateRoute from "./components/PrivateRoute/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<AuthRoute />}>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<App />}>
            <Route path="global" element={<GlobalCovid19 />} />
            <Route path="list-countries" element={<ListCountries />} />
            <Route
              path="/list-countries/:name"
              element={<CountriesCovid19 />}
            />
          </Route>
        </Route>
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
