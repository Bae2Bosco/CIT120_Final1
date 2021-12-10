var responseDiv=document.body.querySelector(".response");
var list=[];

document.body.querySelector(".butt").addEventListener("click", function(){
    var textValue = document.body.querySelector(".input").value;
    var textValuePass = document.body.querySelector(".inputPass").value;
    if(textValue==="cool" && textValuePass==="password"){
        responseDiv.innerHTML="You are the right user";
        list.push(textValue);
        window.location.href="";
        renderList();
    }else{
        responseDiv.innerHTML="You didn't type anything valid"
    }
})

function  renderList(){
    var itemsDiv = document.body.querySelector(".items");
    itemsDiv.innerHTML="";
    for (var i=0; i<list.length; i++){
        var ele=document.createElement("div");
        ele.innerHTML=list[i];
        itemsDiv.appendChild(ele);
    }
}
