function add1()
{
var date=document.sample1.date.value;
var item=document.sample1.item.value;
var cost=document.sample1.cost.value;
var comment=document.sample1.comment.value;

var tr=document.createElement("tr");

var td1= tr.appendChild(document.createElement("td"));
var td2= tr.appendChild(document.createElement("td"));
var td3= tr.appendChild(document.createElement("td"));
var td4= tr.appendChild(document.createElement("td"));
var td5= tr.appendChild(document.createElement("td"));

td1.innerHTML=date;
td2.innerHTML=item;
td3.innerHTML=cost;
td4.innerHTML=comment;
td5.innerHTML='<input type="button" value="remove" onclick="remove(this)" style="   height: 30px; width: 100px; margin: 2px;";>';


document.getElementById("tb1").appendChild(tr);

document.sample1.date.value=" ";
document.sample1.iten.value=" ";
document.sample1.cost.value=" ";
document.sample1.comment2.value=" ";

}  

function add2()
{
var date=document.sample2.date.value;
var item=document.sample2.item.value;
var cost=document.sample2.cost.value;
var comment=document.sample2.comment.value;

var tr=document.createElement("tr");

var td1= tr.appendChild(document.createElement("td"));
var td2= tr.appendChild(document.createElement("td"));
var td3= tr.appendChild(document.createElement("td"));
var td4= tr.appendChild(document.createElement("td"));
var td5= tr.appendChild(document.createElement("td"));

td1.innerHTML=date;
td2.innerHTML=item;
td3.innerHTML=cost;
td4.innerHTML=comment;
td5.innerHTML='<input type="button" value="remove" onclick="remove(this)" style="   height: 30px; width: 100px; margin: 2px;">';


document.getElementById("tb2").appendChild(tr);

document.sample2.date.value=" ";
document.sample2.date.value=" ";
document.sample2.date.value=" ";
document.sample2.date.value=" ";
}  

function add3()
{
var date=document.sample3.date.value;
var item=document.sample3.item.value;
var cost=document.sample3.cost.value;
var comment=document.sample3.comment.value;

var tr=document.createElement("tr");

var td1= tr.appendChild(document.createElement("td"));
var td2= tr.appendChild(document.createElement("td"));
var td3= tr.appendChild(document.createElement("td"));
var td4= tr.appendChild(document.createElement("td"));
var td5= tr.appendChild(document.createElement("td"));

td1.innerHTML=date;
td2.innerHTML=item;
td3.innerHTML=cost;
td4.innerHTML=comment;
td5.innerHTML='<input type="button" value="remove" onclick="remove(this)" style="   height: 30px; width: 100px; margin: 2px;">';


document.getElementById("tb3").appendChild(tr);

document.sample3.date.value=" ";
document.sample3.date.value=" ";
document.sample3.date.value=" ";
document.sample3.date.value=" ";

}  

function remove(Stud)
{
   var s=Stud.parentNode.parentNode;
   s.parentNode.removeChild(s);
   save1();
}

function hide(x)
{
   if(x.style.display==="none")
   {
      x.style.display="block";
   }
   else
   {
      x.style.display="none";
   }

}

function ch1()
{
   x=document.getElementById("ch1")
   hide(x);
}

function ch2()
{
   x=document.getElementById("ch2")
   hide(x);
}

function ch3()
{
   x=document.getElementById("ch3")
   hide(x);
}

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value===''){
        alert("You must write something");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value='';
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();saveData();
    }
},false);
