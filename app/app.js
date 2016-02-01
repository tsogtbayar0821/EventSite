angular.module('myApp', ['ui.router', 'uiSlider', 'ui.bootstrap', 'ui.slider'])

.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
    // discover routing
        .state('discover', {
            url: "/",
            templateUrl: "app/discover/discover.home.html",
            controller: 'discoverController',
        })
        .state('discover.main', {
            url: "/discover.main",
            templateUrl: "app/discover/discover.home.main.html",
            controller: 'discoverController',
        })
        .state('discover.radar', {
            url: "/discover.radar",
            templateUrl: "app/discover/discover.home.radar.html",
            controller: 'discoverController',
        })
        .state('discover.each', {
            url: "/discover.each",
            templateUrl: "app/discover/discover.home.each.html",
            controller: 'discoverController',
        })
        // photo routing
        .state('photos', {
            url: "/photos",
            templateUrl: "app/photos/photos.home.html",
            controller: 'photoController',
        })
        .state('photohomeeffectgrid', {
            url: "/photohomeeffectgrid",
            templateUrl: "app/photos/photo.home.effectgridshow.html",
            controller: 'photoController',
        })
        .state('photohomeeffectgrid.carousel', {
            url: "/photohomeeffectgrid.carousel",
            templateUrl: "app/photos/photo.home.effectgridshow.carousel.html",
            controller: 'photoController',
        })
        .state('photohomeeffectgrid.grid', {
            url: "/photohomeeffectgrid.grid",
            templateUrl: "app/photos/photo.home.effectgridshow.grid.html",
            controller: 'photoController',
        })

    // select slider
    .state('photohomeeffectgrid.1', {
            url: "/photohomeeffectgrid.1",
            templateUrl: "assets/slider/1/slider1.html",
            controller: 'photoController',
        })
        .state('photohomeeffectgrid.2', {
            url: "/photohomeeffectgrid.2",
            templateUrl: "assets/slider/2/slider2.html",
            controller: 'photoController',
        })
        .state('photohomeeffectgrid.3', {
            url: "/photohomeeffectgrid.3",
            templateUrl: "assets/slider/3/slider3.html",
            controller: 'photoController',
        })
        .state('photohomeeffectgrid.4', {
            url: "/photohomeeffectgrid.4",
            templateUrl: "assets/slider/4/slider4.html",
            controller: 'photoController',
        })
        .state('photohomeeffectgrid.5', {
            url: "/photohomeeffectgrid.5",
            templateUrl: "assets/slider/5/slider5.html",
            controller: 'photoController',
        })
        .state('photohomeeffectgrid.6', {
            url: "/photohomeeffectgrid.6",
            templateUrl: "assets/slider/6/slider6.html",
            controller: 'photoController',
        })

    // slider routing end

    // profile		  
    .state('profilehome', {
        url: "/profilehome",
        templateUrl: "app/profile/profile.home.html",
        controller: 'profileController',
    })

    .state('profilehome.About You', {
            url: "/profilehome.aboutyou",
            templateUrl: "app/profile/patials/profile.aboutyou.html",
            controller: 'profileController',
        })
        .state('profilehome.Start page', {
            url: "/profilehome.Start page",
            templateUrl: "app/profile/patials/profile.startpage.html",
            controller: 'profileController',
        })
        .state('profilehome.Message', {
            url: "/profilehome.Message",
            templateUrl: "app/profile/patials/profile.message.html",
            controller: 'profileController',
        })
        .state('profilehome.Friends', {
            url: "/profilehome.friends",
            templateUrl: "app/profile/patials/profile.friends.html",
            controller: 'profileController',
        })
        .state('profilehome.Your Contacts', {
            url: "/profilehome.contacts",
            templateUrl: "app/profile/patials/profile.contacts.html",
            controller: 'profileController',
        })
        .state('profilehome.Favourits', {
            url: "/profilehome.favourits",
            templateUrl: "app/profile/patials/profile.favourits.html",
            controller: 'profileController',
        })
        .state('profilehome.Visitor', {
            url: "/profilehome.visitor",
            templateUrl: "app/profile/patials/profile.visitor.html",
            controller: 'profileController',
        })
        .state('profilehome.Who like you', {
            url: "/profilehome.wholikeyou",
            templateUrl: "app/profile/patials/profile.wholikeyou.html",
            controller: 'profileController',
        })
        .state('profilehome.Who you pleasest', {
            url: "/profilehome.whoyoupleasest",
            templateUrl: "app/profile/patials/profile.whoyoupleasest.html",
            controller: 'profileController',
        })
        .state('profilehome.Explained to favourits', {
            url: "/profilehome.explainedtofavourits",
            templateUrl: "app/profile/patials/profile.explainedtofavourits.html",
            controller: 'profileController',
        })
        .state('profilehome.Match', {
            url: "/profilehome.match",
            templateUrl: "app/profile/patials/profile.match.html",
            controller: 'profileController',
        })
        // event routing
        .state('events', {
            url: "/events",
            templateUrl: "app/events/events.home.html",
            controller: 'eventsController',
        })
        // location routing
        .state('location', {
            url: "/location",
            templateUrl: "app/location/location.home.html",
            controller: 'locationController',
        })

    // hotel routing
    .state('hotel', {
        url: "/hotel",
        templateUrl: "app/hotel/hotel.home.html",
        controller: 'hotelController',
    })

    // music routing
    .state('music', {
        url: "/music",
        templateUrl: "app/music/music.home.html",
        controller: 'musicController',
    })

    // restauraunt
    .state('restauraunt', {
            url: "/restauraunt",
            templateUrl: "app/restauraunt/restauraunt.home.html",
            controller: 'restaurauntController',
        })
        //bell 
        .state('bell', {
            url: "/bell",
            templateUrl: "app/bell/bell.home.html",
            controller: 'bellController',
        })
        // message
        .state('message', {
            url: "/message",
            templateUrl: "app/message/message.home.html",
            controller: 'messageController',
        })
        // gift1
        .state('gift1', {
            url: "/gift1",
            templateUrl: "app/gift1/gift1.home.html",
            controller: 'gift1Controller',
        })
        // gift2
        .state('gift2', {
            url: "/gift2",
            templateUrl: "app/gift2/gift2.home.html",
            controller: 'gift2Controller',
        })
        // profile
        .state('profile', {
            url: "/profile",
            templateUrl: "app/profile/profile.home.html",
            controller: 'profileController',
        })
        // 
        .state('state2.list', {
            url: "/list",
            templateUrl: "partials/state2.list.html",
            controller: function($scope) {
                $scope.things = ["A", "Set", "Of", "Things"];
            }
        });

    $urlRouterProvider.otherwise('/');

})
