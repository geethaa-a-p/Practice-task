var num = 20;

console.log("=======Using the For Loop========");
for (var i = 0; i <= num; i++) {
  console.log(i);
}

console.log("=========Using the While Loop=====");
var i = 0;
var username = ["Geethaa", "Shobana", "Nivetha", "Rahul"];
while (i < username.length) {
  console.log(username[i]);
  i++;
}

console.log("===========Using Do While Loop=========");
var i = 0;
do {
  console.log(username[i]);
  i++;
} while (i <= username.length);

console.log("=======Usinng For in loop==========");
for (var i in username) {
  console.log(username[i]);
}

console.log("=======Using For of Loop======");
for (var names of username) {
  console.log(names);
}
