import {createStore} from 'redux';
import {createHTMLElement} from './service';

const htmlContent = 
`<div class="container">
    <div class="mt-2 d-flex flex-column col-md-5 mx-auto">
        <input id="input" type="input" placeholder="Type title" class="py-2" />
        <button id="button" class="btn btn-primary my-2 col-md-3">Submit</button>
    </div>
    <br>
    <hr>
    <div id="cards" class="mt-2 d-flex flex-column justify-content-center col-md-5 mx-auto">
        
    </div>
</div>`;

const card = 
`<div class="my-card d-flex justify-content-between"> 
    <div>
        <input type="checkbox" class="" />
        <span class="">Hello</span>
    </div>
    <button class="btn btn-danger">Delete</button>
</div>`;

//console.log(createElement());
document.querySelector('body').appendChild(createElement());

// Creating element.
function createElement()
{
    const element = createHTMLElement(htmlContent);
    //console.log(element);
    
    // ACTIONS
    element.querySelector('#button').addEventListener('click', function() {
        store.dispatch({type: 'ADD_CARD'});
    })

    return element;
};

// REDUCER
function reducer(state, action)
{
    switch(action.type)
    {
        case 'ADD_CARD':
            //console.log("Increment");
            state.count = state.count + 1;
            return state;
        case 'REMOVE_CARD':
            state.count = state.count - 1;
            return state;
        default:
            return state;
    }
}

var state = 
{
    "cards": 
    [
      {
        "id": 1,
        "title": "card1"
      }   
    ]
};

// STORE (Assigning reducer and state). It's not compulsory to provide "state"
var store = createStore(reducer, state);
function render()
{
    //console.log("In Render");
    //console.log(store.getState());
    document.getElementById('counter').innerHTML = store.getState().count;
}
store.subscribe(render);    // Subscribing, so if state changes, it automatically renders on html
