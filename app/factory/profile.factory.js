angular.module('myApp')    
    .factory('profileFactory', ['$http', function($http) {

    var urlBase = '/api/customers';
    var profileFactory = {};

    profileFactory.getCustomers = function () {
        return $http.get(urlBase);
    };

    profileFactory.getCustomer = function (id) {
        return $http.get(urlBase + '/' + id);
    };

    profileFactory.insertCustomer = function (cust) {
        return $http.post(urlBase, cust);
    };

    profileFactory.updateCustomer = function (cust) {
        return $http.put(urlBase + '/' + cust.ID, cust)
    };

    profileFactory.deleteCustomer = function (id) {
        return $http.delete(urlBase + '/' + id);
    };

    profileFactory.getOrders = function (id) {
        return $http.get(urlBase + '/' + id + '/orders');
    };

    return profileFactory;
}]);