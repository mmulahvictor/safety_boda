
//REGISTRATION SECTIONS
const regCollection = document.getElementsByClassName("input2");
var span = document.getElementById("close");
var modal = document.getElementById("myModal");


var regForm = {};
var x = localStorage.getItem("vehicleDB");
var vehicleRecord = [];
console.log(vehicleRecord);

var reset = document.getElementById("reset");
span.onclick = function () {
  modal.style.display = "none";
}


window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// localStorage.removeItem('vehicleDB')


//VERIFY SECTIONS

function handleVerify(event) {
  var fname = document.getElementById('id_no').value;
  var plate = document.getElementById('plate').value;
 
  var results = [];

  var toSearch = "lo";
  
  for(var i=0; i<vehicleRecord.length; i++) {
    for(key in vehicleRecord[i]) {
      if(vehicleRecord[i][key].indexOf(toSearch)!=-1) {
        results.push(objects[i]);
      }
    }
  }
  alert("dckvfd")
  event.preventDefault();
}