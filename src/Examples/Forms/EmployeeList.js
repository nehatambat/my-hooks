import React from "react";
import "../../css/main.css";

const EmployeeList = props => {
  return (
    <div className="employeeListContainer">
      {props.employeeList.map(employee => {
        return (
          <div key={employee.id}>
            <h5>{employee.firstName + " " + employee.lastName}</h5>
          </div>
        );
      })}
    </div>
  );
};

export default EmployeeList;
