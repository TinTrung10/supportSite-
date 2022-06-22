/* Plan */
function edit_row(no)
{
 document.getElementById("edit_button"+no).style.display="none";
 document.getElementById("save_button"+no).style.display="inline-block";
	
 var date=document.getElementById("date_row"+no);
 var info=document.getElementById("info_row"+no);
 
	
 var date_data=date.innerHTML;
 var info_data=info.innerHTML;
	
 date.innerHTML="<input type='text' id='date_text"+no+"' value='"+date_data+"'>";
 info.innerHTML="<input type='text' id='info_text"+no+"' value='"+info_data+"'>";
}

function save_row(no)
{
 var date_val=document.getElementById("date_text"+no).value;
 var info_val=document.getElementById("info_text"+no).value;

 document.getElementById("date_row"+no).innerHTML=date_val;
 document.getElementById("info_row"+no).innerHTML=info_val;

 document.getElementById("edit_button"+no).style.display="inline-block";
 document.getElementById("save_button"+no).style.display="none";
}

function delete_row(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}

function add_row()
{
 var new_date=document.getElementById("new_date").value;
 var new_info=document.getElementById("new_info").value;
	
 var table=document.getElementById("data_table");
 var table_len=(table.rows.length)-1;
 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='date_row"+table_len+"'>"+new_date+"</td><td id='info_row"+table_len+"'>"+new_info+"</td><td><i class='bx bx-edit' type='button' id='edit_button"+table_len+"' class='edit' onclick='edit_row("+table_len+")'></i> <i class='bx bx-save' type='button' id='save_button"+table_len+"' class='save' onclick='save_row("+table_len+")'></i> <i class='bx bx-comment-x' type='button' class='delete' onclick='delete_row("+table_len+")'></i></td></tr>";

 document.getElementById("new_date").value="";
 document.getElementById("new_info").value="";
}

/* hashtags */
function edit_row2(n)
{
 document.getElementById("edit_butto"+n).style.display="none";
 document.getElementById("save_butto"+n).style.display="inline-block";
	
 var name=document.getElementById("name_row"+n);
 
 var name_data=name.innerHTML;
	
 name.innerHTML="<input type='text' id='name_text"+n+"' value='"+name_data+"'>";
}

function save_row2(n)
{
 var name_val2=document.getElementById("name_text"+n).value;

 document.getElementById("name_row"+n).innerHTML=name_val2;

 document.getElementById("edit_butto"+n).style.display="inline-block";
 document.getElementById("save_butto"+n).style.display="none";
}

function delete_row2(n)
{
 document.getElementById("roww"+n+"").outerHTML="";
}

function add_row2()
{
var new_name2=document.getElementById("new_name2").value;

var table2=document.getElementById("data_table2");
var table_len2=(table2.rows.length);
var roww = table2.insertRow(table_len2-1).outerHTML="<tr id='roww"+table_len2+"'><td id='name_row"+table_len2+"'>"+new_name2+"</td><td><i class='bx bx-edit' type='button' id='edit_butto"+table_len2+"' class='edit' onclick='edit_row2("+table_len2+")'></i> <i class='bx bx-save' type='button' id='save_butto"+table_len2+"' class='save' onclick='save_row2("+table_len2+")'></i> <i class='bx bx-comment-x' type='button' class='delete' onclick='delete_row2("+table_len2+")'></i></td></tr>";

document.getElementById("new_name2").value="";
}



/* Plan Facebook */
function edit_row3(o)
{
 document.getElementById("edit_butt"+o).style.display="none";
 document.getElementById("save_butt"+o).style.display="inline-block";
	
 var date2=document.getElementById("date_roww"+o);
 var info2=document.getElementById("info_roww"+o);
 
	
 var date_data2=date2.innerHTML;
 var info_data2=info2.innerHTML;
	
 date2.innerHTML="<input type='text' id='date_text2"+o+"' value='"+date_data2+"'>";
 info2.innerHTML="<input type='text' id='info_text2"+o+"' value='"+info_data2+"'>";
}

function save_row3(o)
{
 var date_val2=document.getElementById("date_text2"+o).value;
 var info_val2=document.getElementById("info_text2"+o).value;

 document.getElementById("date_roww"+o).innerHTML=date_val2;
 document.getElementById("info_roww"+o).innerHTML=info_val2;

 document.getElementById("edit_butt"+o).style.display="inline-block";
 document.getElementById("save_butt"+o).style.display="none";
}

function delete_row3(o)
{
 document.getElementById("rowww"+o+"").outerHTML="";
}

function add_row3()
{
 var new_date2=document.getElementById("new_date2").value;
 var new_info2=document.getElementById("new_info2").value;
	
 var table3=document.getElementById("data_table3");
 var table_len3=(table3.rows.length)-1;
 var rowww = table3.insertRow(table_len3).outerHTML="<tr id='rowww"+table_len3+"'><td id='date_roww"+table_len3+"'>"+new_date2+"</td><td id='info_roww"+table_len3+"'>"+new_info2+"</td><td><i class='bx bx-edit' type='button' id='edit_butt"+table_len3+"' class='edit' onclick='edit_row3("+table_len3+")'></i> <i class='bx bx-save' type='button' id='save_butt"+table_len3+"' class='save' onclick='save_row3("+table_len3+")'></i> <i class='bx bx-comment-x' type='button' class='delete' onclick='delete_row3("+table_len3+")'></i></td></tr>";

 document.getElementById("new_date2").value="";
 document.getElementById("new_info2").value="";
}

/* hashtags */
function edit_row4(p)
{
 document.getElementById("edit_but"+p).style.display="none";
 document.getElementById("save_but"+p).style.display="inline-block";
	
 var name2=document.getElementById("name_roww"+p);
 
 var name_data2=name2.innerHTML;
	
 name2.innerHTML="<input type='text' id='name_text2"+p+"' value='"+name_data2+"'>";
}

function save_row4(p)
{
 var name_val3=document.getElementById("name_text2"+p).value;

 document.getElementById("name_roww"+p).innerHTML=name_val3;

 document.getElementById("edit_but"+p).style.display="inline-block";
 document.getElementById("save_but"+p).style.display="none";
}

function delete_row4(p)
{
 document.getElementById("rowwww"+p+"").outerHTML="";
}

function add_row4()
{
var new_name3=document.getElementById("new_name3").value;

var table4=document.getElementById("data_table4");
var table_len4=(table4.rows.length);
var rowwww = table4.insertRow(table_len4-1).outerHTML="<tr id='rowwww"+table_len4+"'><td id='name_roww"+table_len4+"'>"+new_name3+"</td><td><i class='bx bx-edit' type='button' id='edit_but"+table_len4+"' class='edit' onclick='edit_row4("+table_len4+")'></i> <i class='bx bx-save' type='button' id='save_but"+table_len4+"' class='save' onclick='save_row4("+table_len4+")'></i> <i class='bx bx-comment-x' type='button' class='delete' onclick='delete_row4("+table_len4+")'></i></td></tr>";

document.getElementById("new_name3").value="";
}

/* Plan LinkedIn */
function edit_row5(x)
{
 document.getElementById("edit_bu"+x).style.display="none";
 document.getElementById("save_bu"+x).style.display="inline-block";
	
 var date3=document.getElementById("date_rowww"+x);
 var info3=document.getElementById("info_rowww"+x);
 
	
 var date_data3=date3.innerHTML;
 var info_data3=info3.innerHTML;
	
 date3.innerHTML="<input type='text' id='date_text3"+x+"' value='"+date_data3+"'>";
 info3.innerHTML="<input type='text' id='info_text3"+x+"' value='"+info_data3+"'>";
}

function save_row5(x)
{
 var date_val3=document.getElementById("date_text3"+x).value;
 var info_val3=document.getElementById("info_text3"+x).value;

 document.getElementById("date_rowww"+x).innerHTML=date_val3;
 document.getElementById("info_rowww"+x).innerHTML=info_val3;

 document.getElementById("edit_bu"+x).style.display="inline-block";
 document.getElementById("save_bu"+x).style.display="none";
}

function delete_row5(x)
{
 document.getElementById("rowwwww"+x+"").outerHTML="";
}

function add_row5()
{
 var new_date3=document.getElementById("new_date3").value;
 var new_info3=document.getElementById("new_info3").value;
	
 var table5=document.getElementById("data_table5");
 var table_len5=(table5.rows.length)-1;
 var rowwwww = table5.insertRow(table_len5).outerHTML="<tr id='rowwwww"+table_len5+"'><td id='date_rowww"+table_len5+"'>"+new_date3+"</td><td id='info_rowww"+table_len5+"'>"+new_info3+"</td><td><i class='bx bx-edit' type='button' id='edit_bu"+table_len5+"' class='edit' onclick='edit_row5("+table_len5+")'></i> <i class='bx bx-save' type='button' id='save_bu"+table_len5+"' class='save' onclick='save_row5("+table_len5+")'></i> <i class='bx bx-comment-x' type='button' class='delete' onclick='delete_row5("+table_len5+")'></i></td></tr>";

 document.getElementById("new_date3").value="";
 document.getElementById("new_info3").value="";
}

/* hashtags */
function edit_row6(y)
{
 document.getElementById("edit_b"+y).style.display="none";
 document.getElementById("save_b"+y).style.display="inline-block";
	
 var name3=document.getElementById("name_rowww"+y);
 
 var name_data3=name3.innerHTML;
	
 name3.innerHTML="<input type='text' id='name_text3"+y+"' value='"+name_data3+"'>";
}

function save_row6(y)
{
 var name_val4=document.getElementById("name_text3"+y).value;

 document.getElementById("name_rowww"+y).innerHTML=name_val4;

 document.getElementById("edit_b"+y).style.display="inline-block";
 document.getElementById("save_b"+y).style.display="none";
}

function delete_row6(y)
{
 document.getElementById("rowwwwww"+y+"").outerHTML="";
}

function add_row6()
{
var new_name4=document.getElementById("new_name4").value;

var table6=document.getElementById("data_table6");
var table_len6=(table6.rows.length);
var rowwwwww = table6.insertRow(table_len6-1).outerHTML="<tr id='rowwwwww"+table_len6+"'><td id='name_rowww"+table_len6+"'>"+new_name4+"</td><td><i class='bx bx-edit' type='button' id='edit_b"+table_len6+"' class='edit' onclick='edit_row6("+table_len6+")'></i> <i class='bx bx-save' type='button' id='save_b"+table_len6+"' class='save' onclick='save_row6("+table_len6+")'></i> <i class='bx bx-comment-x' type='button' class='delete' onclick='delete_row6("+table_len6+")'></i></td></tr>";

document.getElementById("new_name4").value="";
}