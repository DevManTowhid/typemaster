document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const inputValue = document.getElementById('word').value;
    console.log('Form submitted with input:', inputValue);

    // You can now perform further actions like sending data to a server
});
function getSelectedValue() {
    // Get the select element by its ID
    const selectwords = document.getElementById('words');
    const selecttime = document.getElementById('time');
    // Get the selected option's value
    const selectedValue = selectElement.value;
    return [selectwords.value , selecttime.value];
    
}
function increasehour(hours){
    if (hours == "11"){
        return "00";
    }
    else{
        const hours = Number(hours[1]);
        hours = hours + 1;
        return String(hours);
    }
}
function increaseminute(minutes){
    if (minutes == "59"){
        return "00";
    }
    else{
        const minutes = Number(minutes);
        minutes = minutes + 1;
        return String(minutes);
    }
}
function increaesTime(hours,minutes){
    if (minutes == "59"){
        minutes = "00";
        hours = increasehour(hours);
    } else {
        minutes = increaseminute(minutes);
    }
    return [hours, minutes];
}


function timeStringIncrease(time){
    let hours = parseInt(time.split(":")[0]);
    let minutes = parseInt(time.split(":")[1]);
    console.log(hours,minutes);
    ;
    const [newhours,newminutes] = increaesTime(hours,minutes)
    const newTime = `${newhours}:${newminutes}`;
    return newTime;

}

function startTimer(){
    let i = 0 ;
    const timer = document.getElementById('timer');
    const timeValue = timer.innerHTML;
    
    console.log(timeValue);
    setTimeout(() => {
        console.log("1 second interval")
    }, 1000);
    timer.innerHTML = timeStringIncrease(timeValue);




}
