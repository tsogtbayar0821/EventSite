angular.module('myApp')
    .controller('discoverController', function($rootScope, $scope, $state) {
        
    	$scope.onusers = ["A", "Set", "Of", "q", "w", "e", "rt", "rgd", "f", "cbcfbh"];
        $scope.items = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
        
        var selstate = [
            'environment',
            'liveradio'
        ];
        $scope.friends = ['a', 'b', 'c', 'd', 'e'];
        // each routing
        $scope.goeach = function(){
            $state.go('discover.each');
        };
        $scope.demoVals = {
            sliderExample3:     14,
            sliderExample4:     14,
            sliderExample5:     50,
            sliderExample8:     0.34,
            sliderExample9:     [-0.52, 0.54],
            sliderExample10:    [-0.12, 0.34],
            sliderExample14a:   50,
            sliderExample14b:   50,
            sliderExample15:    [30, 60]
        };
        // each carousel
        $scope.myInterval = 3000;
        $scope.slides = [
            {
                image: 'http://lorempixel.com/1000/600/'
            },
            {
                image: 'http://lorempixel.com/1000/600/food'
            },
            {
                image: 'http://lorempixel.com/1000/600/sports'
            },
            {
                image: 'http://lorempixel.com/1000/600/people'
            }
        ];
        $scope.selectState = function(str) {

            if(str == 'environment'){
                $state.go('discover.main');

            }
            else{
                $state.go('discover.radar');                
            };
            angular.forEach(selstate, function(item) {

                $scope[item] = (str == item);
            });
        };
        $scope.environment = true;

    	$scope.profile = function() {
          
          $state.go('profileperson');
          $state.go('profileperson.aboutyou');
        };
        $scope.photo = function () {
        	$state.go("photohome");
        };

        $scope.user1 = {
            x:100,
            y:200
        };
        $scope.user2 = {
            x:200,
            y:200
        };
        var users1 = [];
        users1.push($scope.user1);          
        $scope.users = users1;

        $scope.insert = function(user){
            $scope.point = {'top':user.x, 'right':user.y}

        }
        // init
        
    });
