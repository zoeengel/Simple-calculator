function result(){
    var x = Number(document.getElementById("no_1").value);
    var y = Number(document.getElementById("no_2").value);
    var z = 0;

    if (document.getElementById('box1').checked){
        z = x + y;
    }
    else if(document.getElementById("box2").checked){
        z = x - y;
    }
    else if(document.getElementById("box3").checked){
        z = x * y;
    }
    else{
        z = x / y;
    }
    document.getElementById("result_area").innerHTML = "Result: "+String(z);
}