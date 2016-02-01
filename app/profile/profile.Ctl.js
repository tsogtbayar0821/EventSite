angular.module('myApp')
    .controller('profileController', function($rootScope, $scope, $state, photoFactory) {
        $scope.friendStyle = {
            'display': 'none'
        };
        $scope.onusers = ["A", "Set", "Of", "q", "w", "e", "rt", "rgd", "f", "cbcfbh"];
        $scope.items = ["A", "Set", "Of", "q", "w", "e", "rt", "rgd", "f", "cbcfbh"];
        $scope.profilemenus = ['Start page', 'Message',
            'Friends', 'Your Contacts', 'Favourits', 'About You'
        ];
        $scope.profilenextmenus = ['Visitor', 'Who like you', 'Who you pleasest',
            'Explained to favourits', 'Match'
        ];
        $scope.uploadimgs = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];
        $scope.youruploadimgs = ['a', 'b', 'c', 'd'];
        $scope.contacts = ['a', 'b', 'c', 'd'];
        // friend
        $scope.proMenus = ['Menu', 'Top Location', 'Nightlife', 'Sehenswurdigeiten', 'Last Menu'];

        $scope.friends = ['a', 'b', 'c'];
        $scope.tables = ['a', 'b', 'c'];
        $scope.m5menus = ['a', 'b', 'c'];
        $scope.m6menus = ['a', 'b', 'c', 'd', 'e'];
        $scope.m7menus = ['a', 'b', 'c'];
        $scope.m9s = ['a', 'b', 'c', 'd', 'e'];
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
        $scope.setFriendActive = function(type) {
            $scope.active = type;
        };
        $scope.isFriendActive = function(type) {
            return type === $scope.active;
        };
        $scope.active = $scope.proMenus[0];


        $scope.setcontactActive = function(type) {
            $scope.conactive = type;
        };
        $scope.iscontactActive = function(type) {

            return type === $scope.conactive;
        };
        $scope.conactive = "a";

        $scope.setActive = function(type) {
            if (type == 'Friends') {
                $scope.friendStyle = {
                    'display': 'block'
                };
            } else {
                $scope.friendStyle = {
                    'display': 'none'
                };
            }
            $state.go('profilehome.' + type);
            $scope.active = type;
        };
        $scope.isActive = function(type) {

            return type === $scope.active;
        };
        $scope.settabActive = function(type) {
            $scope.tabactive = type;
        };
        $scope.istabActive = function(type) {

            return type === $scope.tabactive;
        };
        $scope.tabactive = 'info';
        $scope.profile = function() {

            $state.go('profileperson');
            $state.go('profileperson.aboutyou');
        };
        $scope.photo = function() {
            $state.go("photohome");
        };
        $scope.positions;
        $scope.age = {
            name: 'Potato Master',
            minAge: 25,
            maxAge: 40
        };
        $scope.position = {
            name: 'Potato Master',
            minAge: 10,
            maxAge: 40
        };
        $scope.main = function() {
            $state.go("discover.main");
        };
        $scope.radar = function() {
            $state.go("discover.radar");
        }

        // gauge
        window.addEventListener('load', eventWindowLoaded, false);

        function eventWindowLoaded() {

            // canvas_profile();
            // canvas_rate();
            // console.log('this is initial');

        }

        canvas_profile1(0.5);
        canvas_profile2(0.7);
        canvas_rate();

        function needleRotate(degrees) {
            var $elie = $("#gauge_needle");
            // rotate(10);
            // console.log('rotate');
            //     function rotate(degree) {
            //         $elie.animate({
            //                     '-webkit-transform': 'rotate(' + degree + 'deg)',
            //                     '-moz-transform': 'rotate(' + degree + 'deg)',
            //                     '-ms-transform': 'rotate(' + degree + 'deg)',
            //                     '-o-transform': 'rotate(' + degree + 'deg)',
            //                     'transform': 'rotate(' + degree + 'deg)',
            //                     'zoom': 1
            //         }, 5000);
            //     }
            // console.log($elie);
            $elie.css({
                '-webkit-transform': 'rotate(' + degrees + 'deg)',
                '-moz-transform': 'rotate(' + degrees + 'deg)',
                '-ms-transform': 'rotate(' + degrees + 'deg)',
                '-o-transform': 'rotate(' + degrees + 'deg)',
                'transform': 'rotate(' + degrees + 'deg)',
                'zoom': 1

            });
        }

        needleRotate(-30);

        function canvasSupport() {
            return Modernizr.canvas;
        }

        function calc_coor(x1, x0, y1, y0, x) {
            return (y0 - y1) * x / (x0 - x1) + y1 - (y0 - y1) * x1 / (x0 - x1);
        }

        function canvas_profile1(percentage) {

            if (!canvasSupport()) {
                return;
            } else {
                var theCanvas = document.getElementById("canvas_profile1");
                if (theCanvas) {
                    var context = theCanvas.getContext("2d");
                } else {
                    return;
                }
            }

            var radius = 100;
            var circle = {
                centerX: 80,
                centerY: 70,
                radius: 50,
                angle: 0
            }
            var ball = {
                x: 0,
                y: 0
            };

            drawScreen(percentage);

            function drawScreen(percent) {

                var before_half = 0;
                var after_half = 0;
                var end_point = 0;
                if (percent > 0.5 && percent <= 1) {
                    after_half = percent - 0.25;
                    before_half = 1;
                } else {
                    after_half = 0;
                    before_half = percent - 0.25;
                }

                var greenPart = context.createLinearGradient(0, 0, 0, 100);
                greenPart.addColorStop(0, 'rgb(168,51,207)');
                greenPart.addColorStop(0.5, 'rgb(228,50,151)');
                greenPart.addColorStop(1, 'rgb(160,122,186)');

                var whitePart = context.createLinearGradient(0, 0, 0, 100);
                whitePart.addColorStop(0, 'rgb(113,182,234)');
                whitePart.addColorStop(0.5, 'rgb(117,166,208)');
                whitePart.addColorStop(1, 'rgb(160,122,187)');


                var width = 6;
                context.lineWidth = width;

                // First we make a clipping region for the left half
                context.save();
                context.beginPath();
                context.rect(-width, -width, 50 + 2 * width, 120 + width * 2);
                context.clip();

                // Then we draw the left half
                context.strokeStyle = greenPart;
                context.beginPath();
                context.arc(50 + width, 50 + width, 50, 0, Math.PI * 2 * after_half, false);
                context.stroke();

                context.restore(); // restore clipping region to default

                // Then we make a clipping region for the right half
                context.save();
                context.beginPath();
                context.rect(50 + width, -width, 50 + width, 120 + width * 2);
                context.clip();

                // Then we draw the right half
                context.strokeStyle = whitePart;
                context.beginPath();
                context.arc(50 + width, 50 + width, 50, Math.PI * 2 * (-0.25), Math.PI * 2 * before_half, false);
                context.stroke();

                context.restore(); // restore clipping region to default

                // add the circle to start point
                ball.x = 50 + width + Math.cos(Math.PI * 2 * (-0.25)) * circle.radius;
                ball.y = 50 + width + Math.sin(Math.PI * 2 * (-0.25)) * circle.radius;

                context.fillStyle = "rgb(113,182,234)";
                context.beginPath();
                context.arc(ball.x, ball.y, 3, 0, Math.PI * 2, true);
                context.closePath();
                context.fill();

                context.restore(); // restore clipping region to default

                // add the circle to start point
                ball.x = 50 + width + Math.cos(Math.PI * 2 * (-0.25 + percent)) * circle.radius;
                ball.y = 50 + width + Math.sin(Math.PI * 2 * (-0.25 + percent)) * circle.radius;

                if (percent > 0.75 && percent <= 1) {
                    var r_color = calc_coor(228, 227, 0.75, 1, percent);
                    var g_color = calc_coor(50, 51, 0.75, 1, percent);
                    var b_color = calc_coor(150, 151, 0.75, 1, percent);
                    console.log(r_color);
                    console.log(g_color);
                    console.log(b_color);
                    context.fillStyle = "rgb(r_color,g_color,b_color)";
                } else if (percent > 0.5 && percent <= 0.75) {
                    context.fillStyle = "rgb(113,182,234)";
                } else {

                }

                context.beginPath();
                context.arc(ball.x, ball.y, 3, 0, Math.PI * 2, true);
                context.closePath();
                context.fill();

                context.restore(); // restore clipping region to default
            }
        }

        function canvas_profile2(percentage) {

            if (!canvasSupport()) {
                return;
            } else {
                var theCanvas = document.getElementById("canvas_profile2");
                if (theCanvas) {
                    var context = theCanvas.getContext("2d");
                } else {
                    return;
                }
            }

            var radius = 100;
            var circle = {
                centerX: 80,
                centerY: 70,
                radius: 50,
                angle: 0
            }
            var ball = {
                x: 0,
                y: 0
            };

            drawScreen(percentage);

            function drawScreen(percent) {

                var before_half = 0;
                var after_half = 0;
                var end_point = 0;
                if (percent > 0.5 && percent <= 1) {
                    after_half = percent - 0.25;
                    before_half = 1;
                } else {
                    after_half = 0;
                    before_half = percent - 0.25;
                }

                var greenPart = context.createLinearGradient(0, 0, 0, 100);
                greenPart.addColorStop(0, 'rgb(168,51,207)');
                greenPart.addColorStop(0.5, 'rgb(228,50,151)');
                greenPart.addColorStop(1, 'rgb(160,122,186)');

                var whitePart = context.createLinearGradient(0, 0, 0, 100);
                whitePart.addColorStop(0, 'rgb(113,182,234)');
                whitePart.addColorStop(0.5, 'rgb(117,166,208)');
                whitePart.addColorStop(1, 'rgb(160,122,187)');


                var width = 6;
                context.lineWidth = width;

                // First we make a clipping region for the left half
                context.save();
                context.beginPath();
                context.rect(-width, -width, 50 + 2 * width, 120 + width * 2);
                context.clip();

                // Then we draw the left half
                context.strokeStyle = greenPart;
                context.beginPath();
                context.arc(50 + width, 50 + width, 50, 0, Math.PI * 2 * after_half, false);
                context.stroke();

                context.restore(); // restore clipping region to default

                // Then we make a clipping region for the right half
                context.save();
                context.beginPath();
                context.rect(50 + width, -width, 50 + width, 120 + width * 2);
                context.clip();

                // Then we draw the right half
                context.strokeStyle = whitePart;
                context.beginPath();
                context.arc(50 + width, 50 + width, 50, Math.PI * 2 * (-0.25), Math.PI * 2 * before_half, false);
                context.stroke();

                context.restore(); // restore clipping region to default

                // add the circle to start point
                ball.x = 50 + width + Math.cos(Math.PI * 2 * (-0.25)) * circle.radius;
                ball.y = 50 + width + Math.sin(Math.PI * 2 * (-0.25)) * circle.radius;

                context.fillStyle = "rgb(113,182,234)";
                context.beginPath();
                context.arc(ball.x, ball.y, 3, 0, Math.PI * 2, true);
                context.closePath();
                context.fill();

                context.restore(); // restore clipping region to default

                // add the circle to start point
                ball.x = 50 + width + Math.cos(Math.PI * 2 * (-0.25 + percent)) * circle.radius;
                ball.y = 50 + width + Math.sin(Math.PI * 2 * (-0.25 + percent)) * circle.radius;

                if (percent > 0.75 && percent <= 1) {
                    var r_color = calc_coor(228, 227, 0.75, 1, percent);
                    var g_color = calc_coor(50, 51, 0.75, 1, percent);
                    var b_color = calc_coor(150, 151, 0.75, 1, percent);
                    console.log(r_color);
                    console.log(g_color);
                    console.log(b_color);
                    context.fillStyle = "rgb(r_color,g_color,b_color)";
                } else if (percent > 0.5 && percent <= 0.75) {
                    context.fillStyle = "rgb(113,182,234)";
                } else {

                }

                context.beginPath();
                context.arc(ball.x, ball.y, 3, 0, Math.PI * 2, true);
                context.closePath();
                context.fill();

                context.restore(); // restore clipping region to default
            }
        }

        function canvas_rate() {

            if (!canvasSupport()) {
                return;
            } else {
                var theCanvas = document.getElementById("canvas_rate");
                if (theCanvas) {
                    var context = theCanvas.getContext("2d");
                } else {
                    return;
                }

            }

            var radius = 100;
            var circle = {
                centerX: 80,
                centerY: 70,
                radius: 50,
                angle: 0
            }
            var ball = {
                x: 0,
                y: 0,
                speed: Math.PI / 12
            };

            drawScreen();

            function drawScreen() {

                var greenPart = context.createLinearGradient(0, 0, 0, 100);
                greenPart.addColorStop(1, 'rgb(229,50,151)');
                greenPart.addColorStop(0, 'rgb(174,41,206)');

                var whitePart = context.createLinearGradient(0, 0, 0, 100);
                whitePart.addColorStop(0, 'rgb(91,192,222)');
                whitePart.addColorStop(1, 'rgb(113,182,234)');


                var width = 30;
                context.lineWidth = width;

                // First we make a clipping region for the left half
                context.save();
                context.beginPath();
                context.rect(-width, -width, 35 + 2 * width, 120 + width * 2);
                context.clip();

                // Then we draw the left half
                context.strokeStyle = greenPart;
                context.beginPath();

                context.arc(35 + width, 35 + width, 50, Math.PI * -1, Math.PI * (0), false);
                context.stroke();

                context.restore(); // restore clipping region to default

                // Then we make a clipping region for the right half
                context.save();
                context.beginPath();
                context.rect(35 + width, -width, 50 + width, 120 + width * 2);
                context.clip();

                // Then we draw the right half
                context.strokeStyle = whitePart;
                context.beginPath();
                context.arc(35 + width, 35 + width, 50, Math.PI * (-1), Math.PI * (0), false);
                context.stroke();

                // The circles drawing

                for (var i = 0; i < 24; i++) {

                    ball.x = 35 + width + Math.cos(circle.angle) * circle.radius;
                    ball.y = 35 + width + Math.sin(circle.angle) * circle.radius;

                    circle.angle += ball.speed;

                    if (i == 12 || i == 0) {
                        continue;
                    }

                    context.fillStyle = "#ffffff";
                    context.beginPath();
                    context.arc(ball.x, ball.y, 1, 0, Math.PI * 2, true);
                    context.closePath();
                    context.fill();

                    context.restore(); // restore clipping region to default
                }
            }
        }
        // select
        var menu = {
            init: function() {
                menu.toggleDropdown();
                menu.optionSelection();

                $('.fake_background').on('click', function() {
                    menu.removeSelection();
                });
            },


            toggleDropdown: function() {
                $('#current_selection').on('click', function(event) {
                    event.stopPropagation();
                    var selectionContainer = $('#kind_options');
                    selectionContainer.toggleClass('visible');
                });

                $('#kind_arrow').on('click', function(event) {
                    event.stopPropagation();
                    var selectionContainer = $('#kind_options');
                    selectionContainer.toggleClass('visible');
                });
            },

            removeSelection: function() {
                var selectionContainer = $('#kind_options');
                selectionContainer.removeClass('visible');
            },

            optionSelection: function() {
                var kindOption = $('#kind_options').find('li');
                kindOption.on('click', function(event) {
                    event.stopPropagation();

                    // Remove selection from all items
                    kindOption.removeClass('selected');

                    $(this).addClass('selected');


                    var alertMe = function(data) {
                        //alert( data );
                    };
                    menu.changeSelection(alertMe);
                    menu.removeSelection();
                });
            },

            changeSelection: function(callback) {
                // Get the selected value and display that and the current selection
                var selectedItem = $('#kind_options').find('li.selected');
                var selectedItemText = selectedItem.text();
                var selectionContainer = $('#current_selection');

                selectionContainer.text(selectedItemText);

                if (callback) {
                    callback(selectedItem.attr('data-value'));
                }
            }
        };


        menu.init();
    });
/*message*/
