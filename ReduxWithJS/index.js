import Store from "./store.js";
import { reducer } from "./reducer.js";

let counter = document.getElementById("counter");
let input = document.getElementById("input");
let inc = document.getElementById("increment");
let dec = document.getElementById("decrement");
let add = document.getElementById("add");
let sub = document.getElementById("sub");
let div = document.getElementById("div");
let mul = document.getElementById("mul");
let clr = document.getElementById("clr");

let initState = {
  count: 0,
};

let count = new Store(reducer, initState);

counter.innerHTML = count.getState().count;

inc.addEventListener("click", () => {
  count.dispatch({
    type: "Increment",
  });
  counter.innerHTML = count.getState().count;
});

dec.addEventListener("click", () => {
  count.dispatch({
    type: "Decrement",
  });
  counter.innerHTML = count.getState().count;
});

add.addEventListener("click", () => {
  let value = input.value;
  add.innerHTML = "Added " + value;
  count.dispatch({
    type: "Add",
    payload: +value,
  });
  counter.innerHTML = count.getState().count;
});

sub.addEventListener("click", () => {
  let value = input.value;
  sub.innerHTML = "Subtracted " + value;

  count.dispatch({
    type: "Sub",
    payload: +value,
  });
  counter.innerHTML = count.getState().count;
});

mul.addEventListener("click", () => {
  let value = input.value;
  mul.innerHTML = "Multiplied by " + value;

  count.dispatch({
    type: "Mul",
    payload: +value,
  });
  counter.innerHTML = count.getState().count;
});

div.addEventListener("click", () => {
  let value = input.value;
  div.innerHTML = "Divided by " + value;
  count.dispatch({
    type: "Div",
    payload: +value,
  });
  counter.innerHTML = count.getState().count;
});

clr.addEventListener("click", () => {
  add.innerHTML = "Add";
  sub.innerHTML = "Sub";
  mul.innerHTML = "Mul";
  div.innerHTML = "Div";
  input.value = "";

  count.dispatch({
    type: "Clr",
  });
  counter.innerHTML = count.getState().count;
});
