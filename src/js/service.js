import {getCards} from './dbcalls';

export function createHTMLElement(htmlString) 
{
    const template = document.createElement('template');
    template.innerHTML = htmlString;
    return template.content.firstElementChild;
}

export function getLastElementId(parentContainerId)
{
    // var lastElementId = 0;
    // var lastElement = document.getElementById(parentContainerId).lastElementChild;
    // if(lastElement != null)
    // {
    //     lastElementId = lastElement.id;
    // }

    // return lastElementId;

    var data = getCards();
    var lastCardId = data.cards[data.cards.length-1].id;
    console.log(lastCardId);
    return lastCardId;
}
