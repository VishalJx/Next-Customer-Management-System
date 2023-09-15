import React from "react";
import CustomerTable from "./CustomerTable";

function MainPage(){
  return (
    <div>
      <h1>Customer Management System</h1>
      <div>
        <div></div>
        <div>
          <CustomerTable />
        </div>
      </div>
    </div>
  )
};

export default MainPage;
