import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import _ from "lodash";
import Dashboard from "./Dashboard";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { generateRandomId } from "../../helpers";

const TodoList = () => {
  const classes = useStyles();
  const [todoInput, setTodoInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  function handleTodoInput(e) {
    e.preventDefault();
    setTodoInput(e.target.value);
  }

  function handleSumbit(e) {
    e.preventDefault();
    if (todoInput !== "") {
      //Generate random Id
      let newId = generateRandomId();
      //Add todo in todoList
      setTodoList([...todoList, { id: newId, name: todoInput }]);
      console.log("Aded:", todoList);
    }
    //Clear Input
    setTodoInput("");
  }

  function handleDeleteTodo(id) {
    //Remove todo in todoList
    let newTodoList = _.filter(todoList, todo => {
      return todo.id !== id;
    });
    //Update todoList
    setTodoList(newTodoList);
    console.log("Removed:", newTodoList);
  }

  return (
    <div className="todoListContent">
      <TextField
        id="outlined-name"
        label="Name"
        className={classes.textField}
        value={todoInput}
        onChange={handleTodoInput}
        margin="normal"
        variant="outlined"
      />
      <Button variant="contained" color="primary" onClick={handleSumbit}>
        Submit
      </Button>

      <Dashboard todoList={todoList} handleDeleteTodo={handleDeleteTodo} />
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
}));

export default TodoList;
