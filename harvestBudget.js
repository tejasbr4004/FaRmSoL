function add()
{
var num=document.sample1.num.value;
var crop=document.sample1.crop.value;
var item=document.sample1.item.value;
var budget=document.sample1.budget.value;
var sell=document.sample1.sell.value;
var comment=document.sample1.comment.value;

var tr=document.createElement("tr");

var td1= tr.appendChild(document.createElement("td"));
var td2= tr.appendChild(document.createElement("td"));
var td3= tr.appendChild(document.createElement("td"));
var td4= tr.appendChild(document.createElement("td"));
var td5= tr.appendChild(document.createElement("td"));
var td6= tr.appendChild(document.createElement("td"));
var td7=tr.appendChild(document.createElement("td"));
td1.innerHTML=num;
td2.innerHTML=crop;
td3.innerHTML=item;
td4.innerHTML=budget;
td5.innerHTML=sell;
td6.innerHTML=comment;
td7.innerHTML='<input type="button" value="remove" onclick="remove(this)" style="height: 30px; width: 100px; margin: 2px;">';


document.getElementById("tb1").appendChild(tr);

document.sample1.date.value=" ";
document.sample1.iten.value=" ";
document.sample1.cost.value=" ";
document.sample1.comment2.value=" ";
saveData();
}  


function remove(Stud)
{
   var s=Stud.parentNode.parentNode;
   s.parentNode.removeChild(s);
   saveData();
}

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable(a);

  var options = {
    title: 'Company Performance',
    curveType: 'function',
    legend: { position: 'bottom' }
  };

  var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

  chart.draw(data, options);
}
