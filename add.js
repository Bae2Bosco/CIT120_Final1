var responseDiv=document.body.querySelector(".response2");
var list=[];

document.body.querySelector(".butt2").addEventListener("click", function() {
    var textValue = document.body.querySelector(".input2").value;
    var textValuePass = document.body.querySelector(".inputPass2").value;
    if (textValue === ""+list[i].name && textValuePass === ""+list[i].grade) {
        list.push(textValuePass);
        renderList();
    }

})

function save(){
    var a1=document.getElementById('textValue').value;
    var a2=document.getElementById('textValuePass').value;
    document.write("student name-"+a1+"<br>");
    document.write("student grades-"+a2+"<br>");

}