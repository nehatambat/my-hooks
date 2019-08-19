import React from "react";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const Confirmation = props => {
  let { employee } = props;
  return (
    <div>
      <h1>Confirmation</h1>
      <p>Please confirm your details</p>

      <List>
        <ListItem>
          <ListItemText
            primary="Full Name:"
            secondary={employee.firstName + " " + employee.lastName}
          />
        </ListItem>
        <ListItem>
          <ListItemText primary="Email:" secondary={employee.email} />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Designation"
            secondary={employee.designation}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Primary Skill"
            secondary={employee.primarySkill}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Year of Experience"
            secondary={employee.yearOfExperience}
          />
        </ListItem>
      </List>
      <br />
      <br />
      <div className="formBtn">
        <Button
          type="submit"
          variant="contained"
          onClick={() => props.navigateToStep(2)}
        >
          Back
        </Button>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={() => {
            props.onSubmit();
          }}
        >
          Confirm & Add Employee
        </Button>
      </div>
    </div>
  );
};

export default Confirmation;
