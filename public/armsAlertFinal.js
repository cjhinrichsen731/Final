angular.module('armsAlert', ['ngRoute']);


angular.module('armsAlert')
.config(Router);



Router.$inject=['$routeProvider'];



            function Router($routeProvider) {
                
             ($routeProvider)
                    // .when('/', {
                    //     templateUrl: "/public/enterHome.html",
                    //     controller: 'armsController as aCtrl',
                    // })

                    // .when('/profile', {
                    //     templateUrl: "/public/profileHome.html",
                    //     controller: 'armsController as aCtrl',
                    // })
                    .when('/listings', {
                        templateUrl: "/listingView.html",
                        controller: "armsController as aCtrl"
                    })
               //     .when('/menu', {
               //         templateUrl: "/views/menu.html",
               //         controller: 'armsController as aCtrl',
               //     });

                $routeProvider.otherwise({
                    redirectTo: '/'
                });
            };
                
        angular.module('armsAlert')
        .controller('armsController', controllerFunction);

        $inject=['http']

        function controllerFunction($http) {
            var aCtrl = this;
            
            //aCtrl.storage=localStorage()
            window.aCtrl = aCtrl;
                aCtrl.listings = [];
                aCtrl.getListings = function () {
                return $http.get('/listingRoute')
                }

            aCtrl.saveData = function() {
                var dataToSave = {
                    "model": aCtrl.model,
                    "lprice": aCtrl.lprice,
                    "hprice": aCtrl.hprice,
                    "location": aCtrl.location,
                   // "distance": aCtrl.distance
                }    
                
                $http.post('/listingView', dataToSave)
                .then(function (res){
                    console.log("RESPONSE: " ,res.data);
                    //aCtrl.dataToSave.push(res.Listing)
                    aCtrl.listings.push(res.body);
                    aCtrl.listingData.push(res.data);
                })
              
                console.log("Attempting to save data...");
                //window.location.href = "/enter";



            }
            aCtrl.listingData = [];
                aCtrl.getListings=function() {
                    console.log('test')
                    $http.get('/listingView').then(function (res) {
                        console.log(res);
                        aCtrl.listingData = res.data;
                    })
               
        }
         aCtrl.getListings();
            
        };






            /*
        aCtrl.saveInput = function () {
                var inputToSave = {
                    "model": aCtrl.model,
                    "lPrice": aCtrl.lPrice,
                    "hPrice": aCtrl.hPrice,
                    "location": aCtrl.location,
                    "distance": aCtrl.distance,
                
                }
                localStorage.setItem("input", JSON.stringify(inputToSave));
                console.log(localStorage.getItem("input"));
                console.log(JSON.parse(localStorage.getItem("input")));
            } 
           */


/*
        angular.module('armsAlert')
        .controller('alertController', alertFunction);




        function alertFunction() {

            console.log("Inside alertController")
            var lCtrl = this;
            window.lCtrl = lCtrl;

            //lCtrl.storage=localStorage()
                     
               
                        
                lCtrl.savedata = function(){
                    var dataToSave2 = {
                        "phoneNumber": lCtrl.phoneNumber,
                        "eMail" : lCtrl.eMail,
                        "facebook": lCtrl.facebook,
                        "armsAlertOnly": lCtrl.armsAlertOnly,
                    }       

                    console.log("phone: ", lCtrl.phoneNumber);
                    console.log("dataToSave2: ", dataToSave2);    

                    localStorage.setItem("Data2", JSON.stringify(dataToSave2));
                    //console.log(localStorage.getItem("Data2"));
                    //console.log(JSON.parse(localStorage.getItem("Data2")));
                
                    console.log("Attempting to save data...");
                    window.location.href = "#/home";
                }
            }
            */
        






            /*
        angular.module('armsAlert')
        .controller('tableController', tableFunction);

        function tableFunction() {
            var tCtrl = this;
            tCtrl.storage=localStorage()
        }
        */