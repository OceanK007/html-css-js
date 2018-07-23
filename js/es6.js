// using ES6 modules
// import expect, {createSpy, spyOn, isSpy} from 'expect';

// using CommonJS modules
// var expect = require('expect')
// var createSpy = expect.createSpy
// var spyOn = expect.spyOn
// var isSpy = expect.isSpy

// REDUCER
const reducer = (state, action) =>
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

const { createStore } = Redux;
// Equivalent to : var createStore = Redux.createStore;
// Equivalent to : import createStore from 'redux';

var state = { count: 0 };

// STORE (Assigning reducer and state). It's not compulsory to provide "state"
const store = createStore(reducer, state);

const render = () => 
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

// Test expect 
// expect(counter(0,{type:'INCREMENT'})).toEqual(1);

// expect(counter(1,{type:'INCREMENT'})).toEqual(2);

// expect(counter(2,{type:'DECREMENT'})).toEqual(1);

// expect(counter(1,{type:'DECREMENT'})).toEqual(0);

// expect(counter(1,{type:'SOMETHING_ELSE'})).toEqual(1);

// expect(counter(undefined, {})).toEqual(0);

