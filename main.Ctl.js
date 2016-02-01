angular.module('myApp')    
    .controller('MainController', function($rootScope, $scope, $state, $http) {
// fotter menus
        $scope.menu1 = ['Download', 'Eurolife.at iPad', 'Downloads'];
    	$scope.menu2 = ['Download'
        ];
        $scope.menu3 = ['Jobs', 'Blog ', 'presse '];
        $scope.menu4 = ['Contact & Support', 'Conditions', 'data protection', 'imprint'];
        $scope.menu5 = ['Twitter', 'Facebook', 'Google+'];

// footer function
        $scope.footer = function(submenu){

        };
        $scope.footerApple = function(){

        };
        $scope.footerAndroid = function(){

        };

    	$scope.goprofile = function() {
          
          $state.go('profileperson');
          $state.go('profileperson.aboutyou');
        };
        $scope.photo = function () {
        	$state.go("discoverhome");
        };
        $scope.goPhoto = function () {
            $state.go('photohome');
        };
// nav bar menu
        var navArr = [
        'discover',
        'events',
        'location',
        'photos',
        'music',
        'hotel',
        'restauraunt',
        'bell',
        'message',
        'gift1',
        'gift2',
        'profilehome' 
        ];
        
        $scope.setNavActive = function(str) {
            if(str == 'photos'){
                // $scope.importGallery();
                $state.go(str);
                angular.forEach(navArr, function(item) {
                $scope[item] = (str == item);
                });
            }
            else{
                $state.go(str);
                angular.forEach(navArr, function(item) {
                $scope[item] = (str == item);
                });
            }         
        };

        $scope.discover = true;

// get gallery list
        $scope.importGallery = function (){
            var dataObj = {
                };
                var res = $http.post($rootScope.url + 'interface/getAllGallerys', dataObj);
                res.success(function(data, status, headers, config) {
                    if($rootScope.develop){
                        alert(data['result']);
                        $rootScope.eventList = data['result'];                        
                    }
                    else{

                    }
                    
                });
                res.error(function(data, status, headers, config) {
                    if($rootScope.develop){
                        alert( "failure message: " + JSON.stringify({data: data}));    
                    }
                    else{
                        
                    }
                });
        };
    });