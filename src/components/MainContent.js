import React from "react";
import CounterWithoutUseEffect from "../Examples/Counter/CounterWithoutUseEffect";
import CounterWithUseEffect from "../Examples/Counter/CounterWithUseEffect";
import TodoList from "../Examples/TodoList/TodoList";
import Forms from "../Examples/Forms/Dashboard";

const MainContent = ({ selectedExample }) => {
  // Select hook example to display
  function displaySelectedExample() {
    switch (selectedExample) {
      case 1:
        return <CounterWithoutUseEffect />;
      case 2:
        return <CounterWithUseEffect />;
      case 3:
        return <TodoList />;
      case 4:
        return <Forms />;
      default:
        return <CounterWithoutUseEffect />;
    }
  }

  return <div className="mainContent">{displaySelectedExample()}</div>;
};

export default MainContent;
