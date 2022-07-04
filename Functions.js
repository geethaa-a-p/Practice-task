//Function Keywords
function names(data) {
  for (var i = 0; i < data.length; i++) {
    console.log(data[i]);
  }
}
names(["Geethaa", "Shobana", "Nivetha", "Rahul"]);

//Anonymous Fuction
var val = function (data) {
  for (var j = 0; j < data.length; j++) {
    console.log(j);
  }
};
val("Geethaa"); // val("1","2","3","4")  onl 0 is printing

//Arrow Function
var num = (data) => {
  for (var k = 0; k < data.length; k++) {
    console.log(data[k]);
  }
};
num(["1", "2", "3", "4", "5"])(
  //why we haven't setup the varr or something?

  //IIFE Funnction
  //1st Method of IIFEE function

  ((data) => {
    for (var l = 0; l < data.length; l++) {
      console.log(data[l]);
    }
  }
)(["Father", "mother", "son", "Grandfather"])

  //2nd Method of IIFE function
 (function (data) { 
    for (var l = 0; l < data.length; l++) {
      console.log(data[l]);
    }
  }
)(["Father", "mother", "son", "Grandfather"])//Run the IIEF funnction after commenting the other.