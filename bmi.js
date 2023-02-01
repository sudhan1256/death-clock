var heightInput = document.querySelector(".height-input-field");
var weightInput = document.querySelector(".weight-input-field");
var calculateButton = document.querySelector(".calculate");
var result = document.querySelector(".result");
var statement = document.querySelector(".result-statement");
var BMI, height, weight;

calculateButton.addEventListener("click", ()=>{

    height = heightInput.value;
    weight = weightInput.value;
    BMI = (weight / (height*height))*10000;
    result.innerText = BMI;

    if(BMI < 19){
        statement.innerText = "Your BMI falls within the underweight range";    
    }else if((BMI > 20) && (BMI < 26)){
        statement.innerText = "Your BMI falls within the normal ";
    }else if((BMI > 26) && (BMI < 31)){
        statement.innerText = "Your BMI falls within the overweight range";
    }else{
        statement.innerText = "Your BMI falls within the obese range";
    }
    document.getElementById("bmiform").style.display="none";
});
