import React from "react";
import { Routes, Route } from "react-router-dom";
import Registration from "./components/Registration/Registration";
import Authorization from "./components/Authorization/Authorization";
import { Layout } from "./components/Layout/Layout";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={null} />
            <Route path="registration" element={<Registration />} />
            <Route path="login" element={<Authorization />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
