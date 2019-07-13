function calculateBirthday() {
  var form = document.forms["myForm"]
  var dd = form["date"].value;

  var mm = form["month"].value;

  var cc = form["century"].value;

  var yy = form["year"].value;
  alert(dd,mm,cc,yy)
  alert("You were born on"+dd+"/"+mm+"/"+cc+yy);
  var gender=form["gender"].value;
  alert(gender);
}

function getAkanName(month, century) {

}
