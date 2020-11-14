
document.addEventListener("DOMContentLoaded",  toolTip_start);

function toolTip_start()
{
    $(function() 
    {
        $("#name").tooltip();
        $("#phone").tooltip();

    });

}


function validateEmail(email) 
{
    const email_regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    return email_regex.test(String(email).toLowerCase());
}

function validateName(name) 
{
    const username_regex = /^[a-zA-Z0-9]+$/;

    return username_regex.test(String(name));
}      


function validateForm()
{
    var dialog_box = document.getElementById("dialog");
    dialog_box.innerHTML=""

    var name = document.forms["newsletter-form"]["name"].value;
    var email = document.forms["newsletter-form"]["email"].value;
    var gender = document.forms["newsletter-form"]["email"].value;

    if(!validateName(name))
    {              
        dialog_box.innerHTML+="Bad name format";

    }
    if(!validateEmail(email))
    {
        dialog_box.innerHTML+="<br/> Bad email format";

    }

    if(dialog_box.innerHTML=="")
    {
        return true;
    }

    $("#dialog").dialog({ autoOpen: false });
    $('#dialog').dialog('open');

    return false;

}