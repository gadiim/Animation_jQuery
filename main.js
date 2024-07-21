function handleMouseEvent(event, selector) {
    const action = event.type === 'mouseenter' ? 'show' : 'hide';
    toggleDescription(selector, action);
}

function toggleDescription(obj, action) {
    if (action === 'show') {
        $(obj).css('visibility', 'visible').show('slow');
    } else if (action === 'hide') {
        $(obj).hide('slow', function () {
            $(this).css('visibility', 'hidden');
        });
    }
}
$(document).ready(function () {

    // Show
    $('#showButton').on('click mouseenter mouseleave', function (event) {
        if (event.type === 'click') {
            $('#element').show('slow');
        } else {
            handleMouseEvent(event, 'li:first');
        }
    });

    // Hide
    $('#hideButton').on('click mouseenter mouseleave', function (event) {
        if (event.type === 'click') {
            $('#element').hide('slow');
        } else {
            handleMouseEvent(event, 'li:nth-of-type(2)');
        }
    });

    // Fade In
    $('#fadeInButton').on('click mouseenter mouseleave', function (event) {
        if (event.type === 'click') {
            $('#element').fadeIn('slow');
        } else {
            handleMouseEvent(event, 'li:nth-of-type(3)');
        }
    });

    // Fade Out
    $('#fadeOutButton').on('click mouseenter mouseleave', function (event) {
        if (event.type === 'click') {
            $('#element').fadeOut('slow');
        } else {
            handleMouseEvent(event, 'li:nth-of-type(4)');
        }
    });

    // Fade To
    $('#fadeToButton').on('click mouseenter mouseleave', function (event) {
        if (event.type === 'click') {
            $('#element').fadeTo('slow', 0.5);
        } else {
            handleMouseEvent(event, 'li:nth-of-type(5)');
        }
    });

    // Slide Down
    $('#slideDownButton').on('click mouseenter mouseleave', function (event) {
        if (event.type === 'click') {
            $('#element').slideDown('slow');
        } else {
            handleMouseEvent(event, 'li:nth-of-type(6)');
        }
    });

    // Slide Up
    $('#slideUpButton').on('click mouseenter mouseleave', function (event) {
        if (event.type === 'click') {
            $('#element').slideUp('slow');
        } else {
            handleMouseEvent(event, 'li:nth-of-type(7)');
        }
    });

    // Slide Toggle
    $('#slideToggleButton').on('click mouseenter mouseleave', function (event) {
        if (event.type === 'click') {
            $('#element').slideToggle('slow');
        } else {
            handleMouseEvent(event, 'li:nth-of-type(8)');
        }
    });

    // Animate
    $('#animateButton').on('click mouseenter mouseleave', function (event) {
        if (event.type === 'click') {
            $('#element').css({
                'opacity': 0,
                'left': '0px',
                'top': '0px',
                'width': '100px',
                'height': '50px'
            }).animate({
                opacity: 1,
                left: '250px',
                top: '100px',
                width: '200px',
                height: '100px'
            }, 1500);
        } else {
            handleMouseEvent(event, 'li:nth-of-type(9)');
        }
    });

    // Stop
    $('#stopButton').on('click mouseenter mouseleave', function (event) {
        if (event.type === 'click') {
            $('#element').stop();
        } else {
            handleMouseEvent(event, 'li:nth-of-type(10)');
        }
    });

    // Delay
    $('#delayButton').on('click mouseenter mouseleave', function (event) {
        if (event.type === 'click') {
            $('#element').delay(3000).fadeIn('slow');
        } else {
            handleMouseEvent(event, 'li:last');
        }
    });
});
