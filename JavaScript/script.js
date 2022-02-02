function calculate(){
    var weight=parseFloat(document.getElementById("weight").value);
    var height=parseFloat(document.getElementById("height").value);
    var heightM= height/100;
    var bmi=(weight/(heightM * heightM)).toFixed(2);
    
    if(bmi < 18.5){
        document.getElementById("BMI").innerHTML="BMI is "+bmi+ "<br/><h4>(Underweight)</h4>";
    }
    else if(bmi >= 18.5 && bmi <= 24.9){
        document.getElementById("BMI").innerHTML="BMI is "+bmi+ "<br/><h4>(Normal)</h4>";
    }
    else if(bmi >= 25 && bmi <= 29.9){
        document.getElementById("BMI").innerHTML="BMI is "+bmi+ "<br/><h4>(Overweight)</h4>";
    }
    else if(bmi >= 30){
        document.getElementById("BMI").innerHTML="BMI is "+bmi+ "<br/><h4>(Obese)</h4>";
    }
}