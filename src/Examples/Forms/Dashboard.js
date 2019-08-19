import React, { useState } from "react";
import Forms from "./Forms";
import EmployeeList from "./EmployeeList";

const Dashboard = () => {
  const [employeeList, setEmployeeList] = useState([]);

  const addEmployee = employee => {
    // Add employee to employee list
    setEmployeeList([...employeeList, employee]);
  };

  return (
    <div className="formContainer">
      <Forms className="employeeForm" addEmployee={addEmployee} />
      <EmployeeList employeeList={employeeList} />
    </div>
  );
};

export default Dashboard;
