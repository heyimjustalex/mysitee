//start script after the page loads
document.addEventListener("DOMContentLoaded", main);
document.addEventListener("DOMContentLoaded",  animation_main);


//main, menu right now
function main()
{
    let toggle = document.querySelector('.toggle');
    let menu = document.querySelector('.main-menu');

    function toggleMenu()
    {        

        if(menu.classList.contains("active"))
        {               
            menu.classList.remove("active");
            toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";

        }
        else
        {
            menu.classList.add("active");
            toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
        }

    }

    
    toggle.addEventListener('click', toggleMenu, false);
    //zlapanie wszystkich elementow klasy item 
    let items = document.querySelectorAll('.main-item');
    let subitems = document.querySelectorAll('.subitem');


    //funkcja wywolywana do rozwijania submenu

    function toggleItem()
    {
        //alert("toggling");
        /// przypadek nr 1 kiedy this (zlapany item ktory ma submenu) juz zawiera active i trzeba go zamknac
        if (this.classList.contains("submenu-active")) 
        {
            this.classList.remove("submenu-active");
        } 
        ///przypadek 2 kiedy otwarte jest inne menu zamykamy je i otwieramy kliknietye
        else if (menu.querySelector(".submenu-active")) 
        {
            menu.querySelector(".submenu-active").classList.remove("submenu-active");
            this.classList.add("submenu-active");

        }
        /// kiedy nic nie jest otwarte i musimy otworzyc
        else 
        {
            this.classList.add("submenu-active");
        }
    }

    function stickyMenu()
    {
        $(window).scroll(function() {

            if ($(window).scrollTop() > 40) 
            {
                $('.menu').addClass('stickymenu');
            } 
            else 
            {
                $('.menu').removeClass('stickymenu');
            }
        });

    }

    stickyMenu();


    //przeiterowanie po elementach ktore maja klase item i dodanie tym ktore maja submenu event listenera
    for(let item of items)
    {
        if(item.querySelector('.submenu'))
        {
            item.addEventListener('click',toggleItem,false);
            item.addEventListener('keypress', toggleItem,false);            

        }
    }

    //zeby zamykal menu jak wybierze sie opcje

    for(let subitem of subitems)
    {
        subitem.addEventListener('click',toggleMenu,false);
    }


    toggle.addEventListener('click', toggleMenu, false);


}



