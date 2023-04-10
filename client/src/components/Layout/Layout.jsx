import { Outlet } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import "../../App.scss";
import "../../utils/Fonts/fonts.scss";
import { useEffect } from "react";
import { auth } from "../../actions/user";

const Layout = () => {
  const isAuth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(auth());
  }, [dispatch]);
  return (
    <div className="Layout">
      <Navbar />
      <div className="main__container">{!isAuth && <Outlet />}</div>
      <Footer />
    </div>
  );
};

export { Layout };
