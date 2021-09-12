import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { React, useRef } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import MobileScreen from "./components/MobileScreen";
import OtpPage from "./components/OtpPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={MobileScreen} />
        <Route path="/otp" component={OtpPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
