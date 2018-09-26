window.addEventListener("load", bindEvents);


function bindEvents(){
    console.log("hi there");
    // window.getElementById('add').addEventListener("click", storeLocal);
    document.getElementById('add').addEventListener("click", storeLocal);
    document.getElementById('fetch').addEventListener("click", fetchLocal);
}

function storeLocal(){
    console.log("local storing done");
    var hi = document.getElementById("inputtxt").value;
    
    localStorage.myvalue = hi ;
}

function fetchLocal(){
    console.log("fetching local stored data ", localStorage.myvalue);
    // var inputFeild = 
    document.getElementById("outputtxt").value = localStorage.myvalue;
}