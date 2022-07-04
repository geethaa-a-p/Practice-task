var string = "Geethaa";

//If condition

if (string.length == 7) {
  console.log("True");
}

//If else condition
if (string.endsWith("a")) {
  console.log("String ends with 'a'");
} else {
  console.log("Not ends with 'a'");
}

//nested if condition
if (string.includes("e")) {
  console.log("String contains 'e'");
  if (string.includes("e") && string.match("Geethaa")) {
    console.log("True");
  }
} else {
  console.log("false");
}

//Switch condition
var username = "Shobana";

var name1 = "Geeethaa";
var name2 = "Ap";
var output;

switch (username) {
  case "Shobana":
    output = name1 + name2;
    break;
  case "Nivetha":
    output = name1;
    break;
  default:
    output = "Not valid";
}

console.log(output);
