import React from "react";
import "../../css/main.css";
import Paper from "@material-ui/core/Paper";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormHelperText from "@material-ui/core/FormHelperText";
import Button from "@material-ui/core/Button";

const UserDetails = props => {
  //   useEffect(() => {
  //     document.addEventListener("keydown", handleHitEnter, true);
  //     console.log("neha1");
  //     return () => {
  //       document.removeEventListener("keydown", handleHitEnter, true);
  //       console.log("neha2");
  //     };
  //   }, []);

  //   const handleHitEnter = e => {
  //     const ENTER_KEY_CODE = 13;
  //     if (e.key === "Enter" || e.keyCode === ENTER_KEY_CODE) {
  //       e.stopPropagation();
  //     }
  //   };

  return (
    <div className="detailsContainer">
      <h1>User Details</h1>
      <Paper className="detailsForm">
        <FormControl>
          <InputLabel htmlFor="firstName">FirstName</InputLabel>
          <Input
            id="firstName"
            name="firstName"
            type="text"
            value={props.employee.firstName}
            onChange={props.handleChange}
          />
        </FormControl>
        <br />
        <FormControl>
          <InputLabel htmlFor="lastName">LastName</InputLabel>
          <Input
            id="lastName"
            name="lastName"
            type="text"
            value={props.employee.lastName}
            onChange={props.handleChange}
          />
        </FormControl>
        <br />
        <FormControl>
          <InputLabel htmlFor="email">Email address</InputLabel>
          <Input
            id="email"
            name="email"
            type="email"
            value={props.employee.email}
            aria-describedby="my-helper-text"
            onChange={props.handleChange}
          />
          <FormHelperText id="my-helper-text">
            We'll never share your email.
          </FormHelperText>
        </FormControl>
        <br />
        <br />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={() => props.navigateToStep(2)}
        >
          Next
        </Button>
      </Paper>
    </div>
  );
};

export default UserDetails;
