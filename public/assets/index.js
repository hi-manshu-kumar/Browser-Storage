window.addEventListener("load", bindEvents);


function bindEvents() {
    console.log("hi there");
    // window.getElementById('add').addEventListener("click", storeLocal);
    document.getElementById('add').addEventListener("click", storeLocal);
    document.getElementById('fetch').addEventListener("click", fetchLocal);

    document.getElementById("addS").addEventListener("click", storeSession);
    document.getElementById("fetchS").addEventListener("click", fetchSession);

    document.getElementById("addC").addEventListener("click", storeCache);
    document.getElementById("fetchC").addEventListener("click", fetchCache);

    document.getElementById("deleteLS").addEventListener("click", deleteLs);
    document.getElementById("deleteSS").addEventListener("click", deleteSs);
    document.getElementById("deleteCS").addEventListener("click", deleteCs);

}

function storeLocal() {
    console.log("local storing done");
    var hi = document.getElementById("inputtxt").value;

    localStorage.myvalue = hi;
}

function fetchLocal() {
    console.log("fetching local stored data ", localStorage.myvalue);
    // var inputFeild = 
    document.getElementById("outputtxt").value = localStorage.myvalue;
}

function storeSession() {
    console.log("session storing data");
    var temp = document.getElementById("inputtxtS").value;

    sessionStorage.myvalue = temp;
}

function fetchSession() {
    console.log("fetching session storage", sessionStorage.myvalue);

    document.getElementById("outputtxtS").value = sessionStorage.myvalue;
}

function storeCache() {
    console.log("Cache storing done");
    var temp = document.getElementById("inputtxtc").value;

    document.cookie = `myvalue = ${temp}`;
}

function fetchCache() {
    var x = document.cookie.split('=');

    console.log("fetching cache data", x[1]);

    document.getElementById("outputtxtC").value = x[1];

}

function deleteLs() {
    localStorage.clear();
    alert("local storage deleted...")
}

function deleteSs() {
    sessionStorage.clear();
    alert("Session Storage deleted...");
}

function deleteCs() {
    var d = new Date();
    d.setTime(d.getTime() - (1000 * 60 * 60 * 24));
    var expires = "expires=" + d.toGMTString();
    window.document.cookie = "myvalue" + "=" + "; " + expires;

    alert("Cache storage deleted...");
}
/* <html>
<head>
	<title>Cookie!!!</title>
	<script type="text/javascript">
		function createCookie(cookieName,cookieValue,daysToExpire)
        {
          var date = new Date();
          date.setTime(date.getTime()+(daysToExpire*24*60*60*1000));
          document.cookie = cookieName + "=" + cookieValue + "; expires=" + date.toGMTString();
        }
		function accessCookie(cookieName)
        {
          var name = cookieName + "=";
          var allCookieArray = document.cookie.split(';');
          for(var i=0; i<allCookieArray.length; i++)
          {
            var temp = allCookieArray[i].trim();
            if (temp.indexOf(name)==0)
            return temp.substring(name.length,temp.length);
       	  }
        	return "";
        }
		function checkCookie()
        {
          var user = accessCookie("testCookie");
          if (user!="")
        	alert("Welcome Back " + user + "!!!");
          else
          {
            user = prompt("Please enter your name");
            num = prompt("How many days you want to store your name on your computer?");
            if (user!="" && user!=null)
            {
            createCookie("testCookie", user, num);
            }
          }
        }
	</script>
</head>
<body onload="checkCookie()"></body>
</html>*/