function calculateBirthday() {
  var form = document.forms["myForm"]
  var dd = form["date"].value;
  var mm = form["month"].value;
  var cc = form["century"].value;
  var yy = form["year"].value;
  alert("You were born on"+dd+"/"+mm+"/"+cc+yy);
  var gender=form["gender"].value;
  dayOfTheWeek(dd,mm,cc,yy);
  var result = dayOfTheWeek(dd,mm,cc,yy);
  alert(result);
}
function dayOfTheWeek(dd,mm,cc,yy) {
  return (((cc/4)-2*cc-1)+(5*yy/4)+(26*(mm+1)/10)+dd)%7;
}
var maleNames=[Kwasi,Kwadwo,Kwabena,Kwaku,Yaw,Kofi,Kwame]
var femaleNames=[Akosua,Adwoa,Abenaa,Akua,Yaa,Afua,Ama]
