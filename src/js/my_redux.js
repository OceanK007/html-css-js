import {createStore} from 'redux';
import {createHTMLElement, getLastElementId} from './service';
import {getData} from './dbcalls';
import {htmlContent} from './view';

//console.log(createElement());
document.querySelector('body').appendChild(createElement());

// Creating element
export function createElement()
{
    const element = createHTMLElement(htmlContent);
    //console.log(element);
    
    element.querySelector('#button').addEventListener('click', function() 
    {
        var lastCardId = getLastElementId('card-container');
        var titleRef = document.getElementById('input');
        // console.log(title);
        if(titleRef.value == "")
        {
            alert("Please provide card title");
        }
        else
        {
            // ACTIONS
            store.dispatch({type: 'ADD_CARD', details: {id:Number(lastCardId)+1, title:titleRef.value}});
        }   
        
        titleRef.value = "";
    })

    return element;
};

// Creating card
export function createCard(id, title)
{
    const element = createHTMLElement(`
    <div class="my-card d-flex justify-content-between" id="${id}"> 
        <div>
            <input type="checkbox" class="" />
            <span class="">${title}</span>
        </div>
        <button class="btn btn-danger">Delete</button>
    </div>`);
    //console.log(element);
    
    element.querySelector('button').addEventListener('click', function() 
    {
        // ACTIONS
        store.dispatch({type: 'REMOVE_CARD'});
    })

    return element;
};

// STATE
// var state = 
// {
//     "cards": 
//     [
//       {
//         "id": 1,
//         "title": "card1"
//       }   
//     ]
// };

var state = getData();
// console.log(state);

// STATE ARRAY (FOR UNDO OPERATIONS)
var stateArray = [];

// REDUCER
function reducer(state, action)
{
    console.log(stateArray);
    switch(action.type)
    {
        case 'ADD_CARD':
            console.log("ADD_CARD");
            //console.log(state);
            //console.log(action);
            if(state == null)
            {
                stateArray.push(state);
                return {
                    "cards": 
                    [
                        {
                            "id":action.details.id,
                            "title":action.details.title
                        }
                    ]
                };
            }
            else
            {
                stateArray.push(state);
                return {
                    "cards": 
                    [
                        ...state.cards, 
                        {
                            "id":action.details.id,
                            "title":action.details.title
                        }
                    ]
                };
            }
        case 'REMOVE_CARD':
            
            return state;
        default:
            return state;
    }
}

// STORE (Assigning reducer and state). It's not compulsory to provide "state"
var store = createStore(reducer, state);

// SUBSCRIBING to STORE
store.subscribe(render);    // Subscribing, so if state changes, it automatically renders on html
function render()
{
    console.log("In Render");
    //console.log(store.getState());    
    renderCards(store.getState());
}

// CALLING RENDER TO FETCH INITIAL STATE
render();

// *********************************************
function renderCards(data)
{
    if(data == null)
        return null;

    //console.log("Cards: "+ data.cards);
    var cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = "";

    Array.from(data.cards).forEach(function(element) 
    {
        //console.log(element);
        var card = createCard(element.id, element.title);
        cardContainer.appendChild(card);
    });
}