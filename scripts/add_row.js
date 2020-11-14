document.addEventListener("DOMContentLoaded",  restoreRows);

let row_counter_localstor;
if(row_counter_localstor==null)
{
    row_counter_localstor=0;
}

function addTableRow()
{
    let org_table;
    let new_tr =null; 
    
    let col1 = document.getElementById("col1");
    let col1_link = document.getElementById("col1-link");
    let col2 = document.getElementById("col2");
    let col3 = document.getElementById("col3");
    
    let col2_length = col2.value.length;
    let construct_string = col2.value;
    let counter=0;

    if(col2_length>=50)
    {                
        construct_string="";
        for(let i=0;i<col2_length;i++)
        {
            construct_string+=col2.value.charAt(i);

            if(col2.value.charAt(i)==" " && counter>=40 || counter>=55)
            {
                construct_string+="<br/>";
                counter =0;
            }
            counter++;
        }
    }


    new_tr= document.createElement("tr");
    var whole_string = '<td><a href="'+col1_link.value+'">'+col1.value+'</a></td><td><p>'+construct_string+'</p></td><td>'+col3.value+'</td>';

    new_tr.innerHTML= whole_string;

    var row_with_num='row'+row_counter_localstor.toString();
    console.log(row_with_num);
    localStorage.setItem(row_with_num,whole_string);

    row_counter_localstor++;
    localStorage.setItem('row_counter_localstor', row_counter_localstor);

    org_table = document.getElementById("table1");

    org_table.appendChild(new_tr);

}

function restoreRows()
{
    let row_counter_restore = localStorage.row_counter_localstor;
    let org_table = document.getElementById("table1");

    for(let i=0;i<row_counter_restore;i++)
    {
        let new_tr= document.createElement("tr");
        tempItem = localStorage.getItem('row'+i.toString());
        console.log(tempItem);     
        new_tr.innerHTML= tempItem;
        org_table.appendChild(new_tr);
    }
}
