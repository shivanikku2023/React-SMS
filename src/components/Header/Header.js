import React from "react";
import TopNavList from "../TopNavList/TopNavList";

const Header = () => {
  return (
    <header>
        <div className="row border border-danger">
          <div className="col-4">Logo</div>
          <div className="col-8">School Management System</div>
        </div>
        <div className="row">
          <div className="col">
            <TopNavList />
          </div>
        </div>
      </header>
  );
};

export default Header;
