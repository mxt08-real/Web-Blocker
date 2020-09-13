if(localStorage.getItem("a") == 1) {
 var b = prompt("Type here the password", "password");
 if(b == localStorage.getItem("c")) 
  {}
 else {
  alert("Incorrect password, try again");
  location.assign(window.location.href); } }
else {
 var d = prompt("Type here the password", "password");
 var e = prompt("Confirm the password", "password");
 if(d == e) {
  localStorage.setItem("a", 1);
  localStorage.setItem("c", e); 
  location.assign(window.location.href); }
 else {
  alert("Password does not match"); }

