var num1=10;
var num2=20;

// Arithmetic Operators - +, -, *, **, /, %, ++, --

var result=num1+num2
var result1=num1-num2
var result2=num1*num2
var result3=num1/num2
var result4=num1%num2
var result5 =num1++
var result6=num2--

console.log(result)//10+20=30
console.log(result1)//10-20=-10
console.log(result2)//10*20=200
console.log(result3)//10/20=0.5
console.log(result4)//10%20=10
console.log(result5)//10
console.log(result6)//20

// Assignment Operators - =, +=, -=, *=, /=, %=, **=

result += 10
result1-=20
result2*=10
result4/=10
result5%=20
result6**=10


console.log(result)//result =result+10=40
console.log(result1)//result1=result1-20=-30
console.log(result2)//result2=result2*10=2000
console.log(result4)//result4=result4/10=1
console.log(result5)//result5=result5%20=10
console.log(result6)

// String Operators - +, +=

var a="Geethaa"
var b="Parameswaran"

var c=a+b;
a +="AP"
console.log(c)//c=Geethaa + Parameswaaran= GeethaaParaneswaran
console.log(a)//a=a+"AP" ===>Geethaa +"AP"=GeethaaAP

// Comparison Operators - ==, ===, !=, !==, >, <, >=, <=, ?

var val1=   50;
var val2=25;

var val3= val1>45 ? 'value is greater':'value is less'
var val4= val1<45 ? 'value is less than':'value is not less than 45'
var val5= val1==50 ? 'value is not equal':'value is equal'
var val6= val1>=45 ? 'value is greater':'value is less'
var val7= val2<=50 ? 'value is greater':'value is less'
var val8= val2==="25" ? 'value is equal':'value is not equal'

console.log(val3)
console.log(val4)
console.log(val5)
console.log(val6)
console.log(val7)
console.log(val8)

        // Logical Operators - &&, ||, !
        var number1=10;
        var number2=20;
        var myoutput=number1=10 && number2!=20
        var myoutput1=number1==10 || number2==20
        console.log(myoutput)
        console.log(myoutput1)




