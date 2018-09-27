app.config(function($routeProvider,$locationProvider,LS,SS,CS){
    $locationProvider.hashPrefix('');
    $routeProvider.when("/",{
        template: "*Deleted data will be undefined."

        // templateUrl:"../view/home.html",
        // controller:"homeCtrl"
    }).when(LS,{
        template: " this is local storage"

        // templateUrl:"../view/local.html",
        // controller:"localStrg"
    }).when(SS,{
        // templateUrl:"register.html"
        template: " this is session storage"
    }).otherwise({
        template:"Error Page , No match found" ,
        redirectTo:"/"
    });
})