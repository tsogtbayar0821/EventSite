(function() {
  'use strict';
  angular
    .module('filter-slider')
    .directive('filterSlider', tableScore);

  function tableScore() {
    return {
      templateUrl: 'app/shared/score/score.html',
      restrict: 'E',
      controller: tableScoreController,
      controllerAs: 'vm',
      bindToController: true,
       scope: {        
        aa: '='    
      }
    }
  }
  function tableScoreController($scope) {
    var vm = this;
    vm.txt = "this is text";
    vm.stxt = $scope.aa[0].i = 12;
   
  }

})();
















function ctrl($scope, $filter) {
    $scope.id = "bob";			
    $scope.id2 = "bob";
    $scope.value = "10;50";
    $scope.value2 = "12;15";
    $scope.value3 = 30;
    $scope.value4 = "999;1700";			 
    $scope.value5 = 20;
    $scope.value6 = "10;53";
    
    $scope.disable = function() {
        $scope.disabled = !$scope.disabled;
    };			 

    var calculate = function( value ) {
        var hours = Math.floor( value / 60 );
        var mins = ( value - hours*60 );
        return (hours < 10 ? "0"+hours : hours) + ":" + ( mins == 0 ? "00" : mins );
    };
    
    $scope.options = {				
        from: 0,
        to: 40,
        step: 1,
        dimension: ' min'				
    };
    
    $scope.optionsV = {				
        from: 0,
        to: 40,
        step: 0.5,
        dimension: " $",
        round: 1,
        scale: [0, '|', 10, '|', 20, '|' , 30, '|', 40],
        heterogeneity: ['50/100', '75/250'],
        vertical: true,
        callback: function(value, elt) {
            console.log(value);
        }
        // calculate: calculate
    };
    
    $scope.options2 = {				
        from: 1,
        to: 100,
        floor: true,
        step: 1,
        dimension: " km",
        vertical: false,
        callback: function(value, elt) {
            console.log(value);
        }				
    };
    
    $scope.options3 = {				
        from: 1,
        to: 100,
        floor: true,
        step: 1,
        skin: 'blue',
        dimension: " km",
        vertical: false,
        callback: function(value, elt) {
            console.log(value);
        }				
    };
    
    $scope.options4 = {				
        from: 1,
        to: 100,
        floor: true,
        step: 1,
        skin: 'round',
        dimension: " km",
        vertical: false,
        callback: function(value, elt) {
            console.log(value);
        }				
    };
    
    $scope.options5 = {				
        from: 1,
        to: 100,
        floor: true,
        step: 1,
        skin: 'plastic',
        dimension: " km",
        vertical: false,
        callback: function(value, elt) {
            console.log(value);
        }				
    };
    
    $scope.options2Css = {				
        from: 1,
        to: 100,
        floor: true,
        step: 1,
        dimension: " km",
        vertical: false,
        css: {
            background: {"background-color": "silver"},
            before: {"background-color": "purple"},
            default: {"background-color": "white"},
            after: {"background-color": "green"},
            pointer: {"background-color": "red"}
        },
        callback: function(value, elt) {
            console.log(value);
        }				
    };
    
    $scope.optionsVerticalCss = {				
        from: 1,
        to: 100,
        floor: true,
        step: 1,
        dimension: " km",
        vertical: true,
        css: {

        },
        callback: function(value, elt) {
            console.log(value);
        }				
    };
  
    $scope.optionsVertical1 = {				
        from: 1,
        to: 100,
        floor: true,
        step: 1,
        dimension: " km",
        skin: 'blue',
        vertical: true,
        callback: function(value, elt) {
            console.log(value);
        }				
    };

    $scope.optionsVertical2 = {				
        from: 1,
        to: 100,
        floor: true,
        step: 1,
        dimension: " km",
        skin: 'plastic',
        vertical: true,
        callback: function(value, elt) {
            console.log(value);
        }				
    };

    $scope.optionsVertical3 = {				
        from: 1,
        to: 100,
        floor: true,
        step: 1,
        dimension: " km",
        skin: 'round',
        vertical: true,
        callback: function(value, elt) {
            console.log(value);
        }				
    };
    
    $scope.options2V = {				
        from: 1,
        to: 100,
        floor: true,
        step: 10,
        dimension: " km",
        vertical: true				
    };
   
    
    $scope.changeOptions = function() {
        
        $scope.options = {				
            from: 0,
            to: 100,
            step: 1,
            dimension: " $",
            scale: [0, '|', 10, '|', 20, '|' , 30, '|', 40, '|', 50, '|', 60, '|', 80, '|', 90, '|', 100],
            heterogeneity: ['50/100', '75/250']				
        };
        
    };
    
    $scope.changeValue = function() {
        
        $scope.value = "11;15";
        $scope.value2 = "13;15";
        $scope.value3 = 20;
        $scope.value4 = "700;1000";			 
        
    };
    
    
}

var app = angular.module('myApp', ['angularAwesomeSlider']).controller('ctrl', ctrl);
