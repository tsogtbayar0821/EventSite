angular.module('myApp')
  .run( function ($rootScope) {
    $rootScope.test = [
      	{url:'',
      	style:'',
      	info:''}
      ];
      $rootScope.globaluploadimage = [];
      $rootScope.url = "http://192.168.1.17/Laravel/";
      $rootScope.galleryID;

      // event list
      $rootScope.eventList = [];
      // gallery
      $rootScope.gallery;
      $rootScope.galleryStyle;
      // show message for development
      $rootScope.develop = false;
      // refresh flag for get gallery
      $rootScope.getgallery = false;
    });

   
