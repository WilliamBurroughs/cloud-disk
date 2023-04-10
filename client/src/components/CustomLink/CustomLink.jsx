import React from "react";
import { Link, useMatch } from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
  const match = useMatch(to);

  return (
    <Link to={to} className={match ? "active-link" : ""}>
      {children}
    </Link>
  );
};

export { CustomLink };
