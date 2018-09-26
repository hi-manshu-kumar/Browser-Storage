window.addEventListener("load", bindEvents);


function bindEvents(){
    console.log("hi there");
    // window.getElementById('add').addEventListener("click", storeLocal);
    document.getElementById('add').addEventListener("click", storeLocal);
    document.getElementById('fetch').addEventListener("click", fetchLocal);

    document.getElementById("addS").addEventListener("click", storeSession);
    document.getElementById("fetchS").addEventListener("click", fetchSession);

    document.getElementById("addC").addEventListener("click", storeCache);
    document.getElementById("fetchS").addEventListener("click", fetchCache);
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

function storeSession(){
    console.log("session storing data");
    var temp = document.getElementById("inputtxtS").value;

    sessionStorage.myvalue = temp ;
}

function fetchSession(){
    console.log("fetching session storage", sessionStorage.myvalue);

    document.getElementById("outputtxtS").value = sessionStorage.myvalue;
}
