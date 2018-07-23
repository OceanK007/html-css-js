// REDUCER
function reducer(state, action)
{
    switch(action.type)
    {
        case 'INCREMENT':
            //console.log("Increment");
            state.count = state.count + 1;
            return state;
        case 'DECREMENT':
            state.count = state.count - 1;
            return state;
        case 'RESET':
            state.count = 0;
            return state;
        default:
            return state;
    }
}

var state = { count: 0 };

// STORE (Assigning reducer and state). It's not compulsory to provide "state"
var store = Redux.createStore(reducer, state);
function render()
{
    //console.log("In Render");
    //console.log(store.getState());
    document.getElementById('counter').innerHTML = store.getState().count;
}
store.subscribe(render);    // Subscribing, so if state changes, it automatically renders on html

// ACTIONS
document.getElementById('add').addEventListener('click', function() {
    store.dispatch({type: 'INCREMENT'});
})

document.getElementById('minus').addEventListener('click', function() {
    store.dispatch({type: 'DECREMENT'});
})

document.getElementById('reset').addEventListener('click', function() {
    store.dispatch({type: 'RESET'});
})