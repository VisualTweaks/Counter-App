function add(){
    var counter = document.getElementById("counter");
    var value = parseInt(counter.value);
    if(document.getElementById("minus").disabled){
        document.getElementById("minus").disabled = false;
    }
    else{
        value++;
        counter.value = value;
    }
}
function minus(){
    var counter = document.getElementById("counter");
    var value = parseInt(counter.value);
    if(value == 0){
        document.getElementById("minus").disabled = true;
    }
    else{
        value = value - 1;
        counter.value = value;
    }
}