function calculate(){
    var weight=parseFloat(document.getElementById("weight").value);
    var height=parseFloat(document.getElementById("height").value);
    var heightM= height/100;
    var bmi=(weight/(heightM * heightM)).toFixed(2);
    document.getElementById("BMI").innerHTML="BMI is " +bmi;
}