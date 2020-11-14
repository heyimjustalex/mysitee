document.addEventListener("DOMContentLoaded",  animation_index_scrollto);

function animation_index_scrollto()
{ 

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
   
    scrollAnimation("#home-item","#container")
    scrollAnimation("#logo-item","#container");

}
