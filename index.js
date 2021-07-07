
var tblBody =  document.getElementById("table-body");
for (let i = 0; i < 11; i++) {
      var row = document.createElement("tr");
       row.id="rows";
   for (let j = 0; j < 10; j++) {
     var cell = document.createElement("td");
     cell.id="cells";
     cell.id="tableData"
     var myInput = document.createElement('input');
     myInput.id="inputs";
     cell.appendChild(myInput);
     row.appendChild(cell);
   }
  tblBody.appendChild(row);

}

 function showAlert() {
    alert ("This Page Is Non-Responsive  Mean: its Functionnally Good When Its Load in Laptops And Big Screen' If You Are Using Any Mobile Devices Please Turn To landscape Mode! For Bettter Experience ");
  }

let LC = 0.001;
var valueOfMSR = document.querySelector(" tr:first-child td:nth-child(3) input");

var valueOfVSC = document.querySelector("tr:first-child td:nth-child(4) input");

var valueOfTR = document.querySelector("tr:first-child td:nth-child(5) input");


var valueOfMSR01 = document.querySelector("tr:first-child td:nth-child(6) input");

var valueOfVSC01 = document.querySelector("tr:first-child td:nth-child(7) input");

var valueOfTR01 = document.querySelector("tr:first-child td:nth-child(8) input");

// Row 02
var valueOfMSR02 = document.querySelector(" tr:nth-child(2) td:nth-child(3) input");

var valueOfVSC02 = document.querySelector("tr:nth-child(2) td:nth-child(4) input");

var valueOfTR02 = document.querySelector("tr:nth-child(2) td:nth-child(5) input");


var valueOfMSR03 = document.querySelector("tr:nth-child(2) td:nth-child(6) input");

var valueOfVSC03 = document.querySelector("tr:nth-child(2) td:nth-child(7) input");

var valueOfTR03 = document.querySelector("tr:nth-child(2) td:nth-child(8) input");

// Row 03

var valueOfMSR04 = document.querySelector(" tr:nth-child(3) td:nth-child(3) input");

var valueOfVSC04 = document.querySelector("tr:nth-child(3) td:nth-child(4) input");

var valueOfTR04 = document.querySelector("tr:nth-child(3) td:nth-child(5) input");


var valueOfMSR05 = document.querySelector("tr:nth-child(3) td:nth-child(6) input");

var valueOfVSC05 = document.querySelector("tr:nth-child(3) td:nth-child(7) input");

var valueOfTR05 = document.querySelector("tr:nth-child(3) td:nth-child(8) input");

// Row 04

var valueOfMSR06 = document.querySelector(" tr:nth-child(4) td:nth-child(3) input");

var valueOfVSC06 = document.querySelector("tr:nth-child(4) td:nth-child(4) input");

var valueOfTR06 = document.querySelector("tr:nth-child(4) td:nth-child(5) input");


var valueOfMSR07 = document.querySelector("tr:nth-child(4) td:nth-child(6) input");

var valueOfVSC07 = document.querySelector("tr:nth-child(4) td:nth-child(7) input");

var valueOfTR07 = document.querySelector("tr:nth-child(4) td:nth-child(8) input");

// Row 05

var valueOfMSR08 = document.querySelector(" tr:nth-child(5) td:nth-child(3) input");

var valueOfVSC08 = document.querySelector("tr:nth-child(5) td:nth-child(4) input");

var valueOfTR08 = document.querySelector("tr:nth-child(5) td:nth-child(5) input");


var valueOfMSR09 = document.querySelector("tr:nth-child(5) td:nth-child(6) input");

var valueOfVSC09 = document.querySelector("tr:nth-child(5) td:nth-child(7) input");

var valueOfTR09 = document.querySelector("tr:nth-child(5) td:nth-child(8) input");

// Row 06

var valueOfMSR10 = document.querySelector(" tr:nth-child(6) td:nth-child(3) input");

var valueOfVSC10 = document.querySelector("tr:nth-child(6) td:nth-child(4) input");

var valueOfTR10 = document.querySelector("tr:nth-child(6) td:nth-child(5) input");


var valueOfMSR11 = document.querySelector("tr:nth-child(6) td:nth-child(6) input");

var valueOfVSC11 = document.querySelector("tr:nth-child(6) td:nth-child(7) input");

var valueOfTR11 = document.querySelector("tr:nth-child(6) td:nth-child(8) input");

// Row 07

var valueOfMSR12 = document.querySelector(" tr:nth-child(7) td:nth-child(3) input");

var valueOfVSC12 = document.querySelector("tr:nth-child(7) td:nth-child(4) input");

var valueOfTR12 = document.querySelector("tr:nth-child(7) td:nth-child(5) input");


var valueOfMSR13 = document.querySelector("tr:nth-child(7) td:nth-child(6) input");

var valueOfVSC13 = document.querySelector("tr:nth-child(7) td:nth-child(7) input");

var valueOfTR13 = document.querySelector("tr:nth-child(7) td:nth-child(8) input");


// Row 08

var valueOfMSR14 = document.querySelector(" tr:nth-child(8) td:nth-child(3) input");

var valueOfVSC14 = document.querySelector("tr:nth-child(8) td:nth-child(4) input");

var valueOfTR14 = document.querySelector("tr:nth-child(8) td:nth-child(5) input");


var valueOfMSR15 = document.querySelector("tr:nth-child(8) td:nth-child(6) input");

var valueOfVSC15 = document.querySelector("tr:nth-child(8) td:nth-child(7) input");

var valueOfTR15 = document.querySelector("tr:nth-child(8) td:nth-child(8) input");


// Row 09

var valueOfMSR16 = document.querySelector(" tr:nth-child(9) td:nth-child(3) input");

var valueOfVSC16 = document.querySelector("tr:nth-child(9) td:nth-child(4) input");

var valueOfTR16 = document.querySelector("tr:nth-child(9) td:nth-child(5) input");


var valueOfMSR17 = document.querySelector("tr:nth-child(9) td:nth-child(6) input");

var valueOfVSC17 = document.querySelector("tr:nth-child(9) td:nth-child(7) input");

var valueOfTR17 = document.querySelector("tr:nth-child(9) td:nth-child(8) input");


// Row 10

var valueOfMSR18 = document.querySelector(" tr:nth-child(10) td:nth-child(3) input");

var valueOfVSC18 = document.querySelector("tr:nth-child(10) td:nth-child(4) input");

var valueOfTR18 = document.querySelector("tr:nth-child(10) td:nth-child(5) input");


var valueOfMSR19 = document.querySelector("tr:nth-child(10) td:nth-child(6) input");

var valueOfVSC19 = document.querySelector("tr:nth-child(10) td:nth-child(7) input");

var valueOfTR19 = document.querySelector("tr:nth-child(10) td:nth-child(8) input");

//  Fixing VAlues FOr Load 
var siNoRow01  = document.querySelector("tr:first-child td:nth-child(1) input");
var loadRow01  = document.querySelector("tr:first-child td:nth-child(2) input");
loadRow01.value = "W";
siNoRow01.value = "1";
siNoRow01.disabled ="true";
loadRow01.disabled ="true";
var siNoRow02  = document.querySelector("tr:nth-child(2) td:nth-child(1) input");
var loadRow02  = document.querySelector("tr:nth-child(2) td:nth-child(2) input");
loadRow02.value = "W + 50";
siNoRow02.value = "2";
siNoRow02.disabled ="true";
loadRow02.disabled ="true";
var siNoRow03  = document.querySelector("tr:nth-child(3) td:nth-child(1) input");
var loadRow03  = document.querySelector("tr:nth-child(3) td:nth-child(2) input");
loadRow03.value = "W + 100";
siNoRow03.value = "3";
siNoRow03.disabled ="true";
loadRow03.disabled ="true";
var siNoRow04  = document.querySelector("tr:nth-child(4) td:nth-child(1) input");
var loadRow04  = document.querySelector("tr:nth-child(4) td:nth-child(2) input");
loadRow04.value = "W + 150";
siNoRow04.value = "4";
siNoRow04.disabled ="true";
loadRow04.disabled ="true";
var siNoRow05  = document.querySelector("tr:nth-child(5) td:nth-child(1) input");
var loadRow05  = document.querySelector("tr:nth-child(5) td:nth-child(2) input");
loadRow05.value = "W + 200";
siNoRow05.value = "5";
siNoRow05.disabled ="true";
loadRow05.disabled ="true";
var siNoRow06  = document.querySelector("tr:nth-child(6) td:nth-child(1) input");
var loadRow06  = document.querySelector("tr:nth-child(6) td:nth-child(2) input");
loadRow06.value = "W + 250";
siNoRow06.value = "6";
siNoRow06.disabled ="true";
loadRow06.disabled ="true";
var siNoRow07  = document.querySelector("tr:nth-child(7) td:nth-child(1) input");
var loadRow07  = document.querySelector("tr:nth-child(7) td:nth-child(2) input");
loadRow07.value = "W + 300";
siNoRow07.value = "7";
siNoRow07.disabled ="true";
loadRow07.disabled ="true";
var siNoRow08  = document.querySelector("tr:nth-child(8) td:nth-child(1) input");
var loadRow08  = document.querySelector("tr:nth-child(8) td:nth-child(2) input");
loadRow08.value = "W + 350";
siNoRow08.value = "8";
siNoRow08.disabled ="true";
loadRow08.disabled ="true";
var siNoRow09  = document.querySelector("tr:nth-child(9) td:nth-child(1) input");
var loadRow09  = document.querySelector("tr:nth-child(9) td:nth-child(2) input");
loadRow09.value = "W + 400";
siNoRow09.value = "9";
siNoRow09.disabled ="true";
loadRow09.disabled ="true";
var siNoRow10  = document.querySelector("tr:nth-child(10) td:nth-child(1) input");
var loadRow10  = document.querySelector("tr:nth-child(10) td:nth-child(2) input");
loadRow10.value = "W + 450";
siNoRow10.value = "10";
siNoRow10.disabled ="true";
loadRow10.disabled ="true";
function compare(){
  // Calculating TR 
  // Row 01
    var variable1 = Number(valueOfMSR.value);
    var variable2 = Number(valueOfVSC.value);
  var result = valueOfTR.value;
    if (valueOfMSR.value && valueOfVSC.value) {
     result = variable1 + (variable2 * LC);
     valueOfTR.value = result;

  
    } else {
      alert("Please Enter Values of MSR and VSC");
    }  
  
  
       var variable3 = Number(valueOfMSR01.value);
    var variable4 = Number(valueOfVSC01.value);
  var result1 = valueOfTR01.value;

  
    if (valueOfMSR01.value && valueOfVSC01.value) {
     result1 = variable3 + (variable4 * LC);
     valueOfTR01.value = result1;

  
    } else {
      alert("Please Enter Values of MSR and VSC");
    }  
  
  //Row 2
  
    var variable5 = Number(valueOfMSR02.value);
    var variable6 = Number(valueOfVSC02.value);
  var result2= valueOfTR02.value;
    if (valueOfMSR02.value && valueOfVSC02.value) {
     result2 = variable5 + (variable6 * LC);
     valueOfTR02.value = result2;

    } 
  
       var variable7 = Number(valueOfMSR03.value);
    var variable8 = Number(valueOfVSC03.value);
  var result3 = valueOfTR03.value;
    if (valueOfMSR03.value && valueOfVSC03.value) {
     result1 = variable7 + (variable8 * LC);
     valueOfTR03.value = result1;

  
    } 
  
  // Row 03
   
    var variable8 = Number(valueOfMSR04.value);
    var variable9 = Number(valueOfVSC04.value);
  var result4= valueOfTR04.value;
    if (valueOfMSR04.value && valueOfVSC04.value) {
     result4 = variable8 + (variable9 * LC);
     valueOfTR04.value = result4;

    } 
  
       var variable10= Number(valueOfMSR05.value);
    var variable11 = Number(valueOfVSC05.value);
  var result5 = valueOfTR05.value;

  
    if (valueOfMSR05.value && valueOfVSC05.value) {
     result5 = variable10 + (variable11 * LC);
     valueOfTR05.value = result5;

    } 
  
    // Row 04
   
    var variable12 = Number(valueOfMSR06.value);
    var variable13 = Number(valueOfVSC06.value);
  var result6= valueOfTR06.value;
    if (valueOfMSR06.value && valueOfVSC06.value) {
     result6 = variable12 + (variable13 * LC);
     valueOfTR06.value = result6;

    } 
  
       var variable14= Number(valueOfMSR07.value);
    var variable15 = Number(valueOfVSC07.value);
  var result7 = valueOfTR07.value;

  
    if (valueOfMSR07.value && valueOfVSC07.value) {
     result7 = variable14 + (variable15 * LC);
     valueOfTR07.value = result7;

    } 
  
      // Row 05
   
    var variable16 = Number(valueOfMSR08.value);
    var variable17 = Number(valueOfVSC08.value);
  var result8= valueOfTR08.value;
    if (valueOfMSR08.value && valueOfVSC08.value) {
     result8 = variable16 + (variable17 * LC);
     valueOfTR08.value = result8;

    } 
  
       var variable18= Number(valueOfMSR09.value);
    var variable19 = Number(valueOfVSC09.value);
  var result9 = valueOfTR09.value;

  
    if (valueOfMSR09.value && valueOfVSC09.value) {
     result9 = variable18 + (variable19 * LC);
     valueOfTR09.value = result9;

    } 
  
        // Row 06
   
    var variable20 = Number(valueOfMSR10.value);
    var variable121 = Number(valueOfVSC10.value);
  var result10= valueOfTR10.value;
    if (valueOfMSR10.value && valueOfVSC10.value) {
     result10 = variable20 + (variable21 * LC);
     valueOfTR10.value = result10;

    } 
  
       var variable22= Number(valueOfMSR11.value);
    var variable23 = Number(valueOfVSC11.value);
  var result11 = valueOfTR11.value;

  
    if (valueOfMSR11.value && valueOfVSC11.value) {
     result11 = variable22 + (variable23 * LC);
     valueOfTR11.value = result11;

    } 
  
     // Row 07
   
    var variable24 = Number(valueOfMSR12.value);
    var variable25 = Number(valueOfVSC12.value);
  var result12= valueOfTR12.value;
    if (valueOfMSR12.value && valueOfVSC12.value) {
     result12 = variable24 + (variable25 * LC);
     valueOfTR12.value = result12;

    } 
  
       var variable26= Number(valueOfMSR13.value);
    var variable27 = Number(valueOfVSC13.value);
  var result11 = valueOfTR13.value;
    if (valueOfMSR13.value && valueOfVSC13.value) {
     result11 = variable26 + (variable27 * LC);
     valueOfTR13.value = result11;

    } 
  
       // Row 08
   
    var variable28 = Number(valueOfMSR14.value);
    var variable29 = Number(valueOfVSC14.value);
  var result12= valueOfTR14.value;
    if (valueOfMSR14.value && valueOfVSC14.value) {
     result12 = variable28 + (variable29 * LC);
     valueOfTR14.value = result12;

    } 
  
       var variable30= Number(valueOfMSR15.value);
    var variable31 = Number(valueOfVSC15.value);
  var result13 = valueOfTR15.value;

    if (valueOfMSR15.value && valueOfVSC15.value) {
     result13 = variable30 + (variable31 * LC);
     valueOfTR15.value = result13;

    }
  
         // Row 09
   
    var variable32 = Number(valueOfMSR16.value);
    var variable33 = Number(valueOfVSC16.value);
  var result14= valueOfTR16.value;
    if (valueOfMSR16.value && valueOfVSC16.value) {
     result14 = variable32 + (variable33 * LC);
     valueOfTR16.value = result14;

    } 
  
       var variable34= Number(valueOfMSR17.value);
    var variable35 = Number(valueOfVSC17.value);
  var result15 = valueOfTR17.value;
    if (valueOfMSR17.value && valueOfVSC17.value) {
     result15 = variable34 + (variable35 * LC);
     valueOfTR17.value = result15;

    }
   
         // Row 10
   
    var variable36 = Number(valueOfMSR18.value);
    var variable37 = Number(valueOfVSC18.value);
  var result16= valueOfTR18.value;
    if (valueOfMSR18.value && valueOfVSC18.value) {
     result16 = variable36 + (variable37 * LC);
     valueOfTR18.value = result16;

    } 
  
       var variable38= Number(valueOfMSR19.value);
    var variable39 = Number(valueOfVSC19.value);
  var result17 = valueOfTR19.value;
    if (valueOfMSR19.value && valueOfVSC19.value) {
     result17 = variable38 + (variable39 * LC);
     valueOfTR19.value = result17;

    }
  
  
  //calculating Mean 
  
  //  Row  1
var row01_TR01 = document.querySelector("tr:first-child td:nth-child(5) input");
var row01_TR02 = document.querySelector("tr:first-child td:nth-child(8) input");
var row01TR01 = Number(row01_TR01.value);
  
var row01TR02 = Number(row01_TR02.value);
var meanref01 = document.querySelector("tr:first-child td:nth-child(9) input");
meanref01.value = (row01TR01 + row01TR02 )/ 2 ;

  //Row 2
  
var row02_TR01 = document.querySelector("tr:nth-child(2) td:nth-child(5) input");
var row02_TR02 = document.querySelector("tr:nth-child(2) td:nth-child(8) input");
var row02TR01 = Number(row02_TR01.value);
var row02TR02 = Number(row02_TR02.value);
var meanref02 = document.querySelector("tr:nth-child(2) td:nth-child(9) input");
meanref02.value =(row02TR01 + row02TR02 ) / 2 ;
  
  //Row 3
  
  var row03_TR01 = document.querySelector("tr:nth-child(3) td:nth-child(5) input");
var row03_TR02 = document.querySelector("tr:nth-child(3) td:nth-child(8) input");
var row03TR01 = Number(row03_TR01.value);
var row03TR02 = Number(row03_TR02.value);
var meanref03 = document.querySelector("tr:nth-child(3) td:nth-child(9) input");
meanref03.value =(row03TR01 + row03TR02 ) / 2 ;
  
  //Row 4
  
    var row04_TR01 = document.querySelector("tr:nth-child(4) td:nth-child(5) input");
var row04_TR02 = document.querySelector("tr:nth-child(4) td:nth-child(8) input");
var row04TR01 = Number(row04_TR01.value);
var row04TR02 = Number(row04_TR02.value);
var meanref04 = document.querySelector("tr:nth-child(4) td:nth-child(9) input");
meanref04.value =(row04TR01 + row04TR02 ) / 2 ;
  
  //Row 5
  
    var row05_TR01 = document.querySelector("tr:nth-child(5) td:nth-child(5) input");
var row05_TR02 = document.querySelector("tr:nth-child(5) td:nth-child(8) input");
var row05TR01 = Number(row05_TR01.value);
var row05TR02 = Number(row05_TR02.value);
var meanref05 = document.querySelector("tr:nth-child(5) td:nth-child(9) input");
meanref05.value =(row05TR01 + row05TR02 ) / 2 ;

    //Row 5
  
    var row06_TR01 = document.querySelector("tr:nth-child(6) td:nth-child(5) input");
var row06_TR02 = document.querySelector("tr:nth-child(6) td:nth-child(8) input");
var row06TR01 = Number(row06_TR01.value);
var row06TR02 = Number(row06_TR02.value);
var meanref06 = document.querySelector("tr:nth-child(6) td:nth-child(9) input");
meanref06.value =(row06TR01 + row06TR02 ) / 2 ;
  
  //Row 7
  
      var row07_TR01 = document.querySelector("tr:nth-child(7) td:nth-child(5) input");
var row07_TR02 = document.querySelector("tr:nth-child(7) td:nth-child(8) input");
var row07TR01 = Number(row07_TR01.value);
var row07TR02 = Number(row07_TR02.value);
var meanref07 = document.querySelector("tr:nth-child(7) td:nth-child(9) input");
meanref07.value =(row07TR01 + row07TR02 ) / 2 ;

  
  //Row 8
  
      var row08_TR01 = document.querySelector("tr:nth-child(8) td:nth-child(5) input");
var row08_TR02 = document.querySelector("tr:nth-child(8) td:nth-child(8) input");
var row08TR01 = Number(row08_TR01.value);
var row08TR02 = Number(row08_TR02.value);
var meanref08 = document.querySelector("tr:nth-child(8) td:nth-child(9) input");
meanref08.value =(row08TR01 + row08TR02 ) / 2 ;
  
    //Row 9
  
      var row09_TR01 = document.querySelector("tr:nth-child(9) td:nth-child(5) input");
var row09_TR02 = document.querySelector("tr:nth-child(9) td:nth-child(8) input");
var row09TR01 = Number(row09_TR01.value);
var row09TR02 = Number(row09_TR02.value);
var meanref09 = document.querySelector("tr:nth-child(9) td:nth-child(9) input");
meanref09.value =(row09TR01 + row09TR02 ) / 2 ;
  
    //Row 10
  
      var row010_TR01 = document.querySelector("tr:nth-child(10) td:nth-child(5) input");
var row010_TR02 = document.querySelector("tr:nth-child(10) td:nth-child(8) input");
var row010TR01 = Number(row010_TR01.value);
var row010TR02 = Number(row010_TR02.value);
var meanref10 = document.querySelector("tr:nth-child(10) td:nth-child(9) input");
meanref10.value =(row010TR01 + row010TR02 ) / 2 ;
  
//   Calculating Depression(y)
  
var dep01 = document.querySelector("tr:nth-child(2) td:nth-child(10) input");
  var y01 = meanref02.value - meanref01.value;
  dep01.value = y01;
  
var dep02 = document.querySelector("tr:nth-child(3) td:nth-child(10) input");
var y02 = meanref03.value - meanref02.value;
  dep02.value = y02;
  var dep03 = document.querySelector("tr:nth-child(4) td:nth-child(10) input");
var y03 = meanref04.value - meanref03.value;
  dep03.value =  y03;
  var dep04 = document.querySelector("tr:nth-child(5) td:nth-child(10) input");
var y04 = meanref05.value - meanref04.value;
  dep04.value = y04;
  var dep05 = document.querySelector("tr:nth-child(6) td:nth-child(10) input");
var y05 = meanref06.value - meanref05.value; 
  dep05.value = y05;
  var dep06 = document.querySelector("tr:nth-child(7) td:nth-child(10) input");
var y06 = meanref07.value - meanref06.value;
  dep06.value = y06;
  var dep07 = document.querySelector("tr:nth-child(8) td:nth-child(10) input");
var y07 = meanref08.value - meanref07.value;
  dep07.value = y07;
  var dep08 = document.querySelector("tr:nth-child(9) td:nth-child(10) input");
var y08 = meanref09.value - meanref08.value;
  dep08.value = y08;
  var dep09 = document.querySelector("tr:nth-child(10) td:nth-child(10) input");
var y09 = meanref10.value - meanref09.value;
  dep09.value = y09;
  
  
  
};


var disabled = document.querySelector("tr:first-child td:last-child input");
disabled.disabled = true;
disabled.readOnly = true;








