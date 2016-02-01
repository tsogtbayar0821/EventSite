angular.module('myApp')    
    .factory('environFactory', ['$http', function($http) {

    var urlBase = '/api/customers';
    var environFactory = {};

    environFactory.getCustomers = function () {
        return $http.get(urlBase);
    };

    environFactory.getCustomer = function (id) {
        return $http.get(urlBase + '/' + id);
    };

    environFactory.insertCustomer = function (cust) {
        return $http.post(urlBase, cust);
    };

    environFactory.updateCustomer = function (cust) {
        return $http.put(urlBase + '/' + cust.ID, cust)
    };

    environFactory.deleteCustomer = function (id) {
        return $http.delete(urlBase + '/' + id);
    };

    environFactory.getOrders = function (id) {
        return $http.get(urlBase + '/' + id + '/orders');
    };

    return environFactory;
}]);