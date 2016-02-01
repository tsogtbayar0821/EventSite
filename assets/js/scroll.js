var $window          = $(window),
    scrollDistance   = 300,
    scrollSpeed      = 500,
    scrollEffect     = 'swing',
    scrollAmount     = 1,
    smoothScroll;

if (! ('ontouchstart' in document.documentElement) && ! $('body').hasClass('modal-open')) {

        $window.on("mousewheel DOMMouseScroll", function (event) {

            event.preventDefault();

            if (smoothScroll) {

                // Start scrolling while waiting for final scoll amount (user stopped wheeling)
                if (scrollAmount == 1) {
                    var delta = event.originalEvent.wheelDelta / 120 || -event.originalEvent.detail / 3;
                    var finalScroll = $window.scrollTop() - parseInt(delta * (scrollDistance * scrollAmount));

                    $('html, body').stop().animate({ scrollTop: finalScroll }, scrollSpeed, scrollEffect);
                }

                // Increase scroll amount
                scrollAmount++;

                // Clear current timeout
                clearTimeout(smoothScroll);
            }

            // Set animated scroll
            smoothScroll = setTimeout(function() {

                var delta = event.originalEvent.wheelDelta / 120 || -event.originalEvent.detail / 3;
                var scrollTop = $window.scrollTop();
                var finalScroll = scrollTop - parseInt(delta * (scrollDistance * scrollAmount));

                // Reset scroll amoount
                scrollAmount = 1;

                $('html, body').stop().animate({ scrollTop: finalScroll },
                    (scrollSpeed*scrollAmount),
                    scrollEffect
                );

                // Clear timeout holder
                smoothScroll = null;

            }, 100);

        });
}