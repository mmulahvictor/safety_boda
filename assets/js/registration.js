
//REGISTRATION SECTIONS
const regCollection = document.getElementsByClassName("input2");
var span = document.getElementById("close");
var modal = document.getElementById("myModal");
var verify = document.getElementById("verify");
verify.addEventListener('submit', handleVerify);
var form = document.getElementById("registration");
window.addEventListener("load", function () {
  // code goes below
  document.getElementById("registration").style.display = 'none';
  document.getElementById("login").style.display = 'none';
});
form.addEventListener('submit', handleForm);


var regForm = {};
var x = localStorage.getItem("vehicleDB");
var vehicleRecord = [];
console.log(vehicleRecord);

var reset = document.getElementById("reset");
span.onclick = function () {
  modal.style.display = "none";
}

//FUNCTIONS
function gotoReg(){
  document.getElementById("registration").style.display = 'block';
  document.getElementById("login").style.display = 'none';
  document.getElementById("verify_section").style.display = 'none';

}

function gotoLogin(){
  document.getElementById("registration").style.display = 'none';
  document.getElementById("login").style.display = 'block';
  document.getElementById("verify_section").style.display = 'none';

}
function gotoVerify(){
  document.getElementById("registration").style.display = 'none';
  document.getElementById("login").style.display = 'none';
  document.getElementById("verify_section").style.display = 'block';

}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

if (x != null) {
  vehicleRecord = JSON.parse(localStorage.getItem("vehicleDB"));
  console.log(vehicleRecord);

}
// localStorage.removeItem('vehicleDB')

function handleForm(event) {
  var fname = document.getElementById('fname').value;
  var plate = document.getElementById('plate').value;
  var email = document.getElementById('email').value;
  var chasis = document.getElementById('chasis').value;
  var password = document.getElementById('password').value;
  var model = document.getElementById('model').value;
  var manufacturer = document.getElementById('manufacturer').value;
  var oparation = document.getElementById('oparation').value;
  var idnumber = document.getElementById('phone').value;
  // CHECK IF VEGICLE EXISTS

  // if(vehicleRecord.length==0){

  //     var regForm = {
  //         fname1:fname,
  //         plate1:plate,
  //         email1:email,
  //         chasis1:chasis,
  //         model1:model,
  //         oparation1:oparation,
  //         manufacturer1:manufacturer,
  //         idnumber1:idnumber,
  //         password:password
  //         };
  //         vehicleRecord.push(regForm)
  //         localStorage.setItem("vehicleDB", JSON.stringify(vehicleRecord)); //store colors
  //         var fromDB = JSON.parse(localStorage.getItem("vehicleDB")); //get them back
  //         console.log(fromDB);
  // }
  // else{
  // for(var i=0 ; i< vehicleRecord.length; i++){
  //   if(vehicleRecord[i].plate1==plate){
  //       alert("This vehicle already exists");
  //       modal.style.display = "block";

  //   }
  //   else{

  var regForm = {
    fname1: fname,
    plate1: plate,
    email1: email,
    chasis1: chasis,
    password: password,
    model1: model,
    oparation1: oparation,
    manufacturer1: manufacturer,
    idnumber1: idnumber,
  };
  vehicleRecord.push(regForm)
  localStorage.setItem("vehicleDB", JSON.stringify(vehicleRecord)); //store colors
  var fromDB = JSON.parse(localStorage.getItem("vehicleDB")); //get them back
  console.log(fromDB);
  reset.click();
  document.getElementById('message').innerHTML = "Vehicle registered successfully1"
  modal.style.display = "block";
  event.preventDefault();
}



//VERIFY SECTIONS

function handleVerify(event) {
  var fname = document.getElementById('id_no').value;
  var plate = document.getElementById('plate').value;
 
  // var results = [];

  // var toSearch = "lo";
  
  // for(var i=0; i<vehicleRecord.length; i++) {
  //   for(key in vehicleRecord[i]) {
  //     if(vehicleRecord[i][key].indexOf(toSearch)!=-1) {
  //       results.push(objects[i]);
  //     }
  //   }
  // }
  alert("dckvfd")
  event.preventDefault();
}