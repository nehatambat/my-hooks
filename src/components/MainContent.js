import React from "react";
import Example from "../Examples/Counter/Example";
import TodoList from "../Examples/TodoList/TodoList";

const MainContent = ({ selectedExample }) => {
  function displaySelectedExample() {
    switch (selectedExample) {
      case 1:
        return <Example />;
      case 2:
        return <TodoList />;
      default:
        return <Example />;
    }
  }

  return <div className="mainContent">{displaySelectedExample()}</div>;
};

export default MainContent;
