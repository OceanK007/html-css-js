import $ from 'jquery';

export function getData()
{
    var fetchedData = null;
    $.ajax
    ({
        url: '../../db.json',
        //dataType: 'json',
        async: false,   // To make it asynchronous
        //data: myData,
        success: function(data) 
        {
            fetchedData = data;
        }
    });
   
    //console.log(fetchedData);

    return fetchedData;
}