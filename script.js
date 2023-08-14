$(document).ready(function () {
    // declaration
    let items = document.querySelectorAll('.sec-5 .sec-5-item')
    let items_sec8 = document.querySelectorAll('.sec-8 .sec-8-item')
    // end of declaration

    // on scroll animation
    window.onscroll = function () {
        var scrollposition = parseInt(document.documentElement.scrollTop);
        console.log(scrollposition);

        if (scrollposition > 180) {
            $('.navbar').addClass('fixed-top');
        }
        else
        {
            $('.navbar').removeClass('fixed-top');
        }

        if (scrollposition > 330) {
            $('.sec-1').addClass('sec-active');
        }
        else
        {
            $('.sec-1').removeClass('sec-active');
        }

        if (scrollposition > 1180) {
            $('.sec-2').addClass('sec-active');
        }
        else
        {
            $('.sec-2').removeClass('sec-active');
        }

        if (scrollposition > 2370) {
            $('.sec-3').addClass('sec-active');
        }
        else
        {
            $('.sec-3').removeClass('sec-active');
        }

        if (scrollposition > 2860) {
            $('.sec-ban-2').addClass('sec-active');
        }
        else
        {
            $('.sec-ban-2').removeClass('sec-active');
        }

        if (scrollposition > 3260) {
            $('.sec-4').addClass('sec-active');
        }
        else
        {
            $('.sec-4').removeClass('sec-active');
        }

        // if (scrollposition > 3920) {
        //     $('.sec-5').addClass('sec-active');
        // }
        // else
        // {
        //     $('.sec-5').removeClass('sec-active');
        // }

        if (scrollposition > 4460) {
            $('.sec-6').addClass('sec-active');
        }
        else
        {
            $('.sec-6').removeClass('sec-active');
        }

        if (scrollposition > 5240) {
            $('.sec-7').addClass('sec-active');
        }
        else
        {
            $('.sec-7').removeClass('sec-active');
        }

        // if (scrollposition > 5750) {
        //     $('.sec-8').addClass('sec-active');
        // }
        // else
        // {
        //     $('.sec-8').removeClass('sec-active');
        // }

        if (scrollposition > 6400) {
            $('.sec-footer').addClass('sec-active');
        }
        else
        {
            $('.sec-footer').removeClass('sec-active');
        }
    }

    // section 5 carousel.
    items.forEach((el) => {
        const minPerSlide = 4
        let next = el.nextElementSibling
        for (var i = 1; i < minPerSlide; i++) {
            if (!next) {
                // wrap carousel by using first child
                next = items[0]
            }
            let cloneChild = next.cloneNode(true)
            el.appendChild(cloneChild.children[0])
            next = next.nextElementSibling
        }
    })
    // end of section 5 carousel.

    // section 8 carousel.
    items_sec8.forEach((el) => {
        const minPerSlide = 5
        let next = el.nextElementSibling
        for (var i = 1; i < minPerSlide; i++) {
            if (!next) {
                // wrap carousel by using first child
                next = items_sec8[0]
            }
            let cloneChild = next.cloneNode(true)
            el.appendChild(cloneChild.children[0])
            next = next.nextElementSibling
        }
    })
    // end of section 8 carousel.

    $('.gallery-list-item').click(function(){
        let value=$(this).attr('data-bs-filter');
        if(value==='all')
        {
            $('.filter').show(300);
        }
        else
        {
            $('.filter').not('.'+value).hide(300);
            $('.filter').filter('.'+value).show(300);
        }
    });
});