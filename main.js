function loadJson(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status=="200"){
       callback(xhr.responseText);
    }
  }
  xhr.send(null);
}
loadJson("data.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  fun_career(data.career);
  fun_education(data.education);
  fun_achievements(data.achievements);
  fun_skills(data.skills);
});

var div2=document.getElementById("child2");
function fun_career(car){
  var h2=document.createElement("h2");
  h2.textContent="Career Objective:";
  div2.appendChild(h2);
  var c1=document.createElement("hr");
  div2.appendChild(c1);
  var c1=document.createElement("ul");
  div2.appendChild(c1);
  var jj=document.createElement("li");
  jj.textContent=car.info;
 div2.appendChild(jj);
}
function fun_education(edu){
  var h1=document.createElement("h1");
  h1.textContent="Education Qualification:";
  div2.appendChild(h1);
  var list1=document.createElement("hr");
  div2.appendChild(list1);
  var list=document.createElement("ul");
  div2.appendChild(list);
  for (var i=0;i<edu.length;i++){
      var listitem=document.createElement("li");
      listitem.textContent=edu[i].degree;
      list.appendChild(listitem);
      var listitem1=document.createElement("p");
      listitem1.textContent=edu[i].institute;
      list.appendChild(listitem1);
      var listitem2=document.createElement("p");
      listitem2.textContent=edu[i].data;
      list.appendChild(listitem2);
  }
}
function fun_achievements(ach){
  var h1=document.createElement("h1");
  h1.textContent="Achievements:";
  div2.appendChild(h1);
  var list1=document.createElement("hr");
  div2.appendChild(list1);
  var list=document.createElement("ul");
  div2.appendChild(list);
  for (var i=0;i<ach.length;i++){
      var listitem=document.createElement("li");
      listitem.innerHTML=ach[i].name;
      list.appendChild(listitem);

  }
}
function fun_skills(tech){
  var heading=document.createElement("h1");
  heading.textContent="Technical Skills:";
  div2.appendChild(heading);
  var hr=document.createElement("hr");
  heading.appendChild(hr);
  var tr="";
  var table=document.createElement("table");
  div2.appendChild(table);
  for(var i=0;i<tech.length;i++){
    tr+="<tr><td>"+tech[i].name+"</td><td>"+tech[i].data+"</td></tr>";
  }
  table.innerHTML=tr;
}
