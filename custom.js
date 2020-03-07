// Reducer
const colorizeState = (state = {
    red:60,
    blue:250,
    green:20,
    random:null,
    change:null,
}, actions) => {
    switch (actions.type) {
        case "CHANGE":
            return state = "random";
        case "GREEN":
            return state = {
                red:0,
                blue:0,
                green:250,
                random:null,
                change:null,
            };
        case "DISABLE":
            return state = "disable";
        default:
            return state;
    }
};

// Store to hold state of the app
const store = Redux.createStore(colorizeState);

// The only way to mutate the internal state is to dispatch an action.
$("#change").click(() => store.dispatch({ type: "CHANGE" }));
$("#green").click(() => store.dispatch({ type: "GREEN" }));
$("#disable").click(() => store.dispatch({ type: "DISABLE" }));

// Use subscribe() to update the UI in response to state changes.
store.subscribe(() => {
    let state = store.getState();
    $("#my-widget1").colorize(state);
    $("#my-widget2").colorize(state);
    $("#my-widget3").colorize(state);

});
