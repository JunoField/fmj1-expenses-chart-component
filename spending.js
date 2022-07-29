//runs when loaded, add data to chart
function addData(){
    const MAX_HEIGHT_PX = 148; //max height of bar

    getData().then(data => {
        var max = getMax(data); //get highest value in data
        
        data.forEach(item => {
            var newHeight = (item.amount / max) * MAX_HEIGHT_PX;
            document.getElementById("bar-" + item.day).style.height = (newHeight.toString() + 'px'); //set height of bar to match value proportionally
            document.getElementById("amount-label-" + item.day).innerHTML = "$" + item.amount.toString();
        });
    })
}

//get data from JSON file
async function getData(){
    const response = await fetch('./data.json');
    const data = await response.json();
    return data; //returns data as array
}

//from data get highest value
function getMax(arr){
    var max = 0;
    arr.forEach(item => {
        if (item.amount > max){
            max = item.amount;
        }
    });
    return max;
}


function hoverBar(day){
    document.getElementById("amount-display-" + day).classList.add("amount-display-active");
}

function unHoverBar(day){
    document.getElementById("amount-display-" + day).classList.remove("amount-display-active");
}