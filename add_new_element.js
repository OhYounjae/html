var p_elem = document.createElement("p");
var content = document.createTextNode("new strings");
p_elem.appendChild(content);

var target = document.getElementById("first-p");
target.appendChild(p_elem);
