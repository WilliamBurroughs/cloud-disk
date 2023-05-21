import React from "react";
import "./App.scss";
import { Routes, Route, useNavigate } from "react-router-dom";
import Registration from "./components/Registration/Registration";
import Authorization from "./components/Authorization/Authorization";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { auth } from "./actions/user";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import Disk from "./components/Disk/Disk";

function App() {
  const isAuth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();
  const redirect = useNavigate();

  useEffect(() => {
    dispatch(auth());
  }, [dispatch]);
  return (
    <div className="App">
      <div className="wrap">
        <Navbar />
        <div className="main__container">
          <Routes>
            {!isAuth ? (
              <>
                <Route path="/registration" element={<Registration />} />
                <Route path="/login" element={<Authorization />} />
                {/* {redirect("/login")} */}
              </>
            ) : (
              <>
                <Route path="/" element={<Disk />} />
                {redirect("/")}
              </>
            )}
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
