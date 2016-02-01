angular.module('myApp')    
    .factory('photoFactory', ['$http', function($http) {

    var urlBase = '/api/customers';
    var photoFactory = {};

    photoFactory.getCustomers = function () {
        var dataObj = {
                };
                var res = $http.post($rootScope.url + 'interface/getGallerysForPhotographer', dataObj);
                res.success(function(data, status, headers, config) {
                    if($rootScope.develop){
                        alert(data['result']);    
                    }
                    else{

                    }
                    
                    $rootScope.eventList = data['result'];
                    $state.go('photohome');
                });
                res.error(function(data, status, headers, config) {
                    if($rootScope.develop){
                        alert( "failure message: " + JSON.stringify({data: data}));    
                    }
                    
                });
        return $http.get(urlBase);
    };

    photoFactory.getCustomer = function (id) {
        return $http.get(urlBase + '/' + id);
    };

    photoFactory.insertCustomer = function (cust) {
        return $http.post(urlBase, cust);
    };

    photoFactory.updateCustomer = function (cust) {
        return $http.put(urlBase + '/' + cust.ID, cust)
    };

    photoFactory.deleteCustomer = function (id) {
        return $http.delete(urlBase + '/' + id);
    };

    photoFactory.getOrders = function (id) {
        return $http.get(urlBase + '/' + id + '/orders');
    };

    return photoFactory;
}]);