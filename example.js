// Reducer
const counter = (state = 0, actions) => {
  switch (actions.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

// Store to hold state of the app
const store = Redux.createStore(counter);

// The only way to mutate the internal state is to dispatch an action.
$("#inc").click(() => store.dispatch({ type: "INCREMENT" }));
$("#dec").click(() => store.dispatch({ type: "DECREMENT" }));

// Use subscribe() to update the UI in response to state changes.
store.subscribe(() => {
  $("#num").html(store.getState());
});

///////////////////////// Object Reducer Example ////////////////////////////////////
const updateNameReducer = (state = {}, actions) => {
  // use destructiong for easy access to action properties
  // and also provide default values
  let { first_name = "rodener", last_name = "dajes" } = actions;

  switch (actions.type) {
    case "UPDATE_FIRST_NAME":
      return Object.assign({}, state, { first_name: first_name });
    case "UPDATE_LAST_NAME":
      return Object.assign({}, state, { last_name: last_name });
    default:
      return state;
  }
};

const updateNameStore = Redux.createStore(updateNameReducer);

$("#firstNameInput").on("input", e => {
  updateNameStore.dispatch({
    type: "UPDATE_FIRST_NAME",
    first_name: e.target.value
  });
});
$("#lastNameInput").on("input", e => {
  updateNameStore.dispatch({
    type: "UPDATE_LAST_NAME",
    last_name: e.target.value
  });
});

updateNameStore.subscribe(() => {
  let { first_name, last_name } = updateNameStore.getState();

  $("#firstName").html(first_name);
  $("#lastName").html(last_name);
  console.log(updateNameStore.getState());
});
