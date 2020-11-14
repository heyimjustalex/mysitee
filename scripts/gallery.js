document.addEventListener("DOMContentLoaded",  restoreCounter);
document.addEventListener("DOMContentLoaded",  gallery_sliding);

var counter_gall_session;



function gallery_sliding()
{
    let button1 = document.getElementById("button1");
    let button2 = document.getElementById("button2");

    let photo_num = 0;
    let timer1=0,timer2=0,timer3=0;


    button1.addEventListener("click", setPrev,false);
    button2.addEventListener("click", setNext,false);

    //przeiterowanie po elementach ktore maja klase item i dodanie tym ktore maja submenu event listenera


    function change_photo()
    {    

        counter_gall_session++;
        sessionStorage.setItem("gall_sess_counter",counter_gall_session);
        document.getElementById("counter-gall").innerHTML=counter_gall_session.toString();
        // alert("chanin");
        clearTimeout(timer3);
        // alert("chanin2");
        photo_num++;
        if (photo_num>6) photo_num=1;   



        let file = "<img src=\"img/gallery" + photo_num + ".jpg\" />";  

        document.getElementById("bigphoto").innerHTML=file;
        $("#bigphoto").fadeIn(300);


        timer1=setTimeout(()=>change_photo(),5000);
        timer2=setTimeout(()=>hide_photo(),4700);
    }
    change_photo();

    function setPhoto(photo_no)
    {
        //alert(photo_no);

        clearTimeout(timer1);
        clearTimeout(timer2);
        photo_num = photo_no - 1;
        hide_photo();
        clearTimeout(timer3);
        timer3 = setTimeout(()=>change_photo(), 300); 

    }  


    let smallphotos = document.querySelectorAll('.smallphoto');
    for (let i = 1; i <= smallphotos.length; i++) {
        //alert(i);
        smallphotos[i-1].addEventListener('click', () =>setPhoto(i));
    }
    /*
    for(let smallphoto of smallphotos)
    {    i++;
         alert(i);
         smallphoto.addEventListener('click',()=>setPhoto(i));

     // addEventListener('click',setPhoto(i),false);

    }
    */


    function setNext()
    {
        //  alert("setnex");
        clearTimeout(timer1);
        clearTimeout(timer2);

        hide_photo();
        clearTimeout(timer3);
        timer3 = setTimeout(()=>change_photo(), 300); 
    }

    function setPrev()
    {
        clearTimeout(timer1);
        clearTimeout(timer2);

        hide_photo();
        clearTimeout(timer3);
        timer3 = setTimeout(()=>change_photo_prev(), 300); 
    }



    function hide_photo()
    {
        // alert("hide");
        $("#bigphoto").stop();
        $("#bigphoto").fadeOut(300);
    }


    function change_photo_prev()
    {

        clearTimeout(timer3);
        photo_num--;
        if (photo_num<1) photo_num=6;    



        let file = "<img src=\"img/gallery" + photo_num + ".jpg\" />";  

        document.getElementById("bigphoto").innerHTML=file;
        $("#bigphoto").fadeIn(300);


        counter_gall_session++;
        sessionStorage.setItem("gall_sess_counter",counter_gall_session);
        document.getElementById("counter-gall").innerHTML=counter_gall_session.toString();

        timer1=setTimeout(()=>change_photo(),5000);
        timer2=setTimeout(()=>hide_photo(),4700);



    }
}

function restoreCounter()
{    
    counter_gall_session = sessionStorage.getItem("gall_sess_counter");
    if(counter_gall_session==null)
    {
        counter_gall_session=-1;
    }
    document.getElementById("counter-gall").innerHTML=counter_gall_session.toString();
}

