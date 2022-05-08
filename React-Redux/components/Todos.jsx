import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodoError, getTodoReq, getTodoSuccess } from "../todo/action";
import Todo from "./Todo";
import TodoInput from "./TodoInput";
import "./main.css";
import { Outlet, useParams } from "react-router-dom";

const Todos = () => {
  const { isLoading, isError, todos } = useSelector((state) => state);

  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getTodoReq());
    fetch("http://localhost:8080/todos")
      .then((res) => res.json())
      .then((data) => dispatch(getTodoSuccess(data)))
      .catch(() => dispatch(getTodoError()));
  }, [dispatch, id]);

  return isLoading ? (
    <h1 style={{ textAlign: "center" }}>Loading....</h1>
  ) : isError ? (
    <h1 style={{ textAlign: "center" }}>Error... Something went wrong</h1>
  ) : (
    <div className="main_container">
      <h1>Todos</h1>
      <TodoInput />
      <br />
      {id ? <Outlet /> : todos.map((item) => <Todo key={item.id} {...item} />)}
    </div>
  );
};

export default Todos;
