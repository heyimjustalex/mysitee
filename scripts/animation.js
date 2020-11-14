function animation_main()
{
    $(window).scroll(function()
                     {
        if($(this).scrollTop()>300 && $(window).width() > 1000) $('.scrollup').fadeIn();
        else $('.scrollup').fadeOut();		
    }
                    );

    function scrollAnimation(from,  to)
    {
        $(from).click(
            function() 
            {
                $([document.documentElement, document.body]).animate({
                    scrollTop: $(to).offset().top
                }, 500);
            });

    }
    scrollAnimation("#scroll-icon-script","#container")

    scrollAnimation("#aboutme-submenu","#aboutme-h1-anchor");

}
