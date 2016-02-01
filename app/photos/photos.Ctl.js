angular.module('myApp')
    .controller('photoController', function($rootScope, $scope, $state, $http, $interval) {
//    .controller('photoController', function($rootScope, $scope, $state, $http) {
        $scope.name = "";
        $scope.place = "";
        $scope.hidden = "";
        $scope.photos = ['a', 'b']
        $scope.submenus = ['Menu', 'Top Location', 'Nightlife', 'Street Shot', 'Gastromomie', 'Sehenswurdigeiten'];
        $scope.popularphotos = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
        $scope.items = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];

        $scope.datepicker = function(type){
            console.log("type", type);
        }
        $scope.gogrid = function(){
            $state.go('photohomeeffectgrid');
            $state.go('photohomeeffectgrid.carousel');
        }
        $scope.gogrideffectshow = function () {
            $state.go('photohomeeffectgrid.grid');
        }
        $scope.gocarousel = function(){
            $state.go('photohomeeffectgrid.carousel');
        }

        $scope.changeMainImageUrl = function(){
            for(i = 0; i < $rootScope.eventList.length; i++ ){
                if($rootScope.eventList[i].mainImageUrl == ""){
                    $rootScope.eventList[i].mainImageUrl = './images/logo_ico.png';
                }
            }
        }

        $scope.selectedSliders = ['photohomeeffectgrid.1', 'photohomeeffectgrid.2',
            'photohomeeffectgrid.3', 'photohomeeffectgrid.4',
            'photohomeeffectgrid.5', 'photohomeeffectgrid.6'
        ];

        $scope.showgallery = function() {

            $state.go($scope.selectedSliders[$rootScope.galleryStyle]);
            // for test
            // $state.go($scope.selectedSliders[2]);
        };

        $scope.setActive = function(type) {
            $scope.active = type;
        };
        $scope.isActive = function(type) {
            return type === $scope.active;
        };
        $scope.active = $scope.submenus[0];

        // view style select
        var navArr = [
            'amod',
            'bmod'
        ];

        $scope.setNavActive = function(str) {

            angular.forEach(navArr, function(item) {

                $scope[item] = (str == item);
            });
        };
        $scope.bmod = true;

        // grid show
        $scope.gogridshow = function(galleryID) {
            // initial $rootScope.test
            $rootScope.test = [];
            //gallery id input 
            $rootScope.galleryID = galleryID;
            // get photo url
            var dataObj = {
                'galleryId': galleryID
            };
            var res = $http.post($rootScope.url + 'interface/getImagesForGallery', dataObj);
            res.success(function(data, status, headers, config) {
                if ($rootScope.develop) {
                    alert('get Images Success!', data['result']);
                } else {

                }
                $scope.photoUrl = data['result'];

                // get style
                var reqObj = {
                    'photoGalleryId': $rootScope.galleryID
                };
                var res = $http.post($rootScope.url + 'interface/getMainSettingForGallery', reqObj);
                res.success(function(data, status, headers, config) {
                    if ($rootScope.develop) {
                        alert("get gallerystyle success", data['result']);
                    } else {

                    }
                    $scope.mainSetting = data['result'];
                    $rootScope.galleryStyle = $scope.mainSetting.setAs;

                    // insert photo url
                    for (var i = 0; i <= $scope.photoUrl.length - 1; i++) {
                        $scope.tem = $scope.photoUrl[i].url;
                        $scope.tem = $scope.tem.substring(1);
                        $rootScope.test.push({
                            url: $scope.tem
                        });
                    }
                    $scope.initial();
                    $state.go('photohomeeffectgrid');
                    $state.go('photohomeeffectgrid.grid');
                });
                res.error(function(data, status, headers, config) {
                    if ($rootScope.develop) {
                        alert("failure message: " + JSON.stringify({
                            data: data
                        }));
                    } else {

                    }
                });
            });
            res.error(function(data, status, headers, config) {
                if ($rootScope.develop) {
                    alert("failure message: " + JSON.stringify({
                        data: data
                    }));
                } else {

                }
            });
        };

        //get gallery list 
        $scope.importGallery = function() {
            var dataObj = {};
            var res = $http.post($rootScope.url + 'interface/getAllGallerys', dataObj);
            res.success(function(data, status, headers, config) {
                if ($rootScope.develop) {
                    alert(data['result']);
                } else {

                }
                $rootScope.eventList = data['result'];
                $scope.changeMainImageUrl();
                console.log('------------search_items--------------', data['result']);
            });
            res.error(function(data, status, headers, config) {
                if ($rootScope.develop) {
                    alert("failure message: " + JSON.stringify({
                        data: data
                    }));
                } else {

                }
            });
        };

        // get gallery stylingOption
        $scope.getGalleryStyle = function() {
            var reqObj = {
                'photoGalleryId': $rootScope.galleryID
            };
            var res = $http.post($rootScope.url + 'interface/getMainSettingForGallery', reqObj);
            res.success(function(data, status, headers, config) {
                $scope.mainSetting = data['result'];
                $rootScope.galleryStyle = $scope.mainSetting.setAs;
            });
            res.error(function(data, status, headers, config) {
                if ($rootScope.develop) {
                    alert("failure message: " + JSON.stringify({
                        data: data
                    }));
                } else {

                }
            });
        };

        // slideback
        $scope.slideback = function() {
                $state.go('photos');
                $scope.importGallery();
            }

        // initial
        $scope.selectedimgs = [];
        $scope.initial = function() {
            for (var i = 1; i <= $rootScope.test.length - 1; i++) {
                $scope.selectedimgs[i - 1] = $rootScope.test[i].url;
            }
        };
        $scope.initial();
        if(!$rootScope.getgallery){
          $scope.importGallery();
          $rootScope.getgallery = true;
        }
        
        // $scope.callAtInterval = function () {
        //     var myDate = new Date();
        //     $scope.hidden = myDate.getTime();
        // }
        // $interval($scope.callAtInterval, 500);

    })
    // .filter('getOrders', function() {
    //   return function (items, scope) {
    //    var filtered = [];
    //     for (var i = 0; i < items.length; i++)
    //     {
    //         var item = items[i];
    //         var curDate = new Date(item.dateTime);
    //         if (searchDate.getTime() > curDate.getTime())
    //         {
    //             if (scope.name == "" || (scope.name != "" && item.name.search(scope.name) != -1))
    //             {
    //                 if (scope.place == "" || (scope.place != "" && item.place.search(scope.place) != -1))
    //                 {
    //                     filtered.push(item);
    //                 }    
    //             }
                
    //         }
    //         else
    //         {
    //         }
    //     }
        
    //     return filtered;
    //   }
    // });