function calculateBirthday() {
  var valid=true;
  var form = document.forms["myForm"];
  var dd = form["date"].value;
  var mm = form["month"].value;
  var cc = form["century"].value;
  var yy = form["year"].value;
  var gender=form["gender"].value;

  if (dd<=0 || dd>31){
    alert ("Invalid date. Enter valid date.");
    valid=false;
  }
  if (mm<=0 || mm>12){
    alert("Invalid month. Enter valid month");
    valid=false;
  }

  if (valid) {
    var result = dayOfTheWeek(dd,mm,cc,yy);
    result = result.toFixed(0);
    if (gender==='male') {
      alert (maleNames[result]);
    }
    else{
      alert(femaleNames[result]);
    }
  }


}
function dayOfTheWeek(dd,mm,cc,yy) {
  return (((cc/4)-2*cc-1)+(5*yy/4)+(26*(mm+1)/10)+dd)%7;
}
var maleNames=[
  'Kwasi',
  'Kwadwo',
  'Kwabena',
  'Kwaku',
  'Yaw',
  'Kofi',
  'Kwame',
]
var femaleNames=[
  'Akosua',
  'Adwoa',
  'Abenaa',
  'Akua',
  'Yaa',
  'Afua',
  'Ama',
]
