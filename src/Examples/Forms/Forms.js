import React, { useState } from "react";
import "../../css/main.css";
import { generateRandomId } from "../../components/helpers";
import { fields } from "../../components/constants";
import UserDetails from "./UserDetails";
import PersonalDetails from "./PersonalDetails";
import Confirmation from "./Confirmation";
import Success from "./Success";

const Forms = props => {
  const [employee, setEmployee] = useState(fields);
  const [step, setStep] = useState(1);

  const handleChange = event => {
    setEmployee({
      ...employee,
      [event.target.name]: event.target.value.trim()
    });
  };

  const onSubmit = event => {
    // Validate for empty form fields
    if (employee.firstName.trim() === "" || employee.lastName.trim() === "") {
      return;
    }

    //Generate random Id
    let newId = generateRandomId();

    // Add Employee to Employee List
    props.addEmployee({ ...employee, id: newId });

    // Display Success message to User
    navigateToStep(4);

    // Reset Form Fields
    resetFormFields();
  };

  // Reset Form Fields
  const resetFormFields = () => {
    setEmployee(fields);
  };

  // Proceed to next step
  const navigateToStep = step => {
    setStep(step);
  };

  switch (step) {
    case 1:
      return (
        <UserDetails
          employee={employee}
          navigateToStep={navigateToStep}
          handleChange={handleChange}
        />
      );

    case 2:
      return (
        <PersonalDetails
          employee={employee}
          navigateToStep={navigateToStep}
          handleChange={handleChange}
        />
      );

    case 3:
      return (
        <Confirmation
          employee={employee}
          navigateToStep={navigateToStep}
          onSubmit={onSubmit}
        />
      );

    case 4:
      return <Success />;

    default:
      return (
        <UserDetails
          employee={employee}
          navigateToStep={navigateToStep}
          handleChange={handleChange}
        />
      );
  }
};

export default Forms;
