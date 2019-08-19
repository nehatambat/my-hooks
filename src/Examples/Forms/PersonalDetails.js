import React from "react";
import Paper from "@material-ui/core/Paper";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

const PersonalDetails = props => {
  return (
    <div className="detailsContainer">
      <h1>Personal Details</h1>
      <Paper className="detailsForm">
        <FormControl>
          <InputLabel htmlFor="designation">Designation</InputLabel>
          <Input
            id="designation"
            name="designation"
            type="text"
            value={props.employee.designation}
            onChange={props.handleChange}
          />
        </FormControl>
        <br />
        <FormControl>
          <InputLabel htmlFor="primarySkill">Primary Skill</InputLabel>
          <Input
            id="primarySkill"
            name="primarySkill"
            type="text"
            value={props.employee.primarySkill}
            onChange={props.handleChange}
          />
        </FormControl>
        <br />
        <FormControl>
          <InputLabel htmlFor="yearOfExperience">Year Of Experience</InputLabel>
          <Input
            id="yearOfExperience"
            name="yearOfExperience"
            type="number"
            value={props.employee.yearOfExperience}
            aria-describedby="my-helper-text"
            onChange={props.handleChange}
          />
        </FormControl>
        <br />
        <br />
        <div className="formBtn">
          <Button
            type="submit"
            variant="contained"
            onClick={() => props.navigateToStep(1)}
          >
            Back
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={() => props.navigateToStep(3)}
          >
            Next
          </Button>
        </div>
      </Paper>
    </div>
  );
};

export default PersonalDetails;
