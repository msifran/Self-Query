let firstOperand = "";
let secondOperand = "";
let operator = "";
let isOperator = false;
let isResult = false;
let isbackspaceclicked=false;
let dotcount=0;


function clearDisplay() {
    firstOperand = "";
    secondOperand = "";
    operator = "";
    isOperator = false;
    isResult = false;
    isbackspaceclicked=false;
    document.getElementById("display").value = "";
}

function targetFunction(event) {
    let value = event.currentTarget.innerHTML;

    if (isResult) {
        clearDisplay();
    }

    if (isOperator) {
     
        secondOperand += value;
      
      console.log(secondOperand);
    } else {
  
        firstOperand += value;
    }
    document.getElementById("display").value += value;
}


function backspace(){
  let backValue = document.getElementById("display").value;
  document.getElementById("display").value = backValue.slice(0, -1);

  if(!isOperator){
    firstOperand=firstOperand.slice(0,-1);
  }else {
    secondOperand=secondOperand.slice(0,-1);
  }
}
function dotFunction(event){


  let dotvalue=".";

  if (isOperator) {
    if(secondOperand.includes(dotvalue)){
      return ;
    }else{
      secondOperand +=  dotvalue;
    }
} else {
  if( firstOperand.includes(dotvalue)){
    return ;
  }

  else{
    firstOperand +=  dotvalue;
  }
}
document.getElementById("display").value += dotvalue;
}

function opr(event) {
  console.log(firstOperand);
    let newOperator = event.currentTarget.innerHTML;
    


    if (firstOperand === "") return; 
    

    if (operator !== "" && secondOperand === "") {
      
        operator = newOperator;
        let displayValue = document.getElementById("display").value;
        document.getElementById("display").value = displayValue.slice(0, -1) + newOperator;
        
    }
    else if (operator !== "" && secondOperand !== "") {
        calculate();

        isOperator = true;
    } else {
        operator = newOperator;
        document.getElementById("display").value += newOperator;
        isOperator = true;
       
    }
    isResult = false;
    console.log(firstOperand,typeof(firstOperand));
    console.log(newOperator);
    
}

function calculate() {
    if (firstOperand === "" || secondOperand === "" || operator === "") return;
    
    let num1 = parseFloat(firstOperand);
    let num2 = parseFloat(secondOperand);
    let result = 0;

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "x":
            result = num1 * num2;
            break;
        case "/":
            if(num2 !== 0){
              result=num1/num2;
            }else{
              result="error "
            }
            break;
    }

    document.getElementById("display").value = result;
   let resultHistory = num1 + " "+ operator + " "+num2 +" is  "+ result;
    let list = document.createElement('div');
    list.style.width="100px";
    list.style.height="40px";
    list.style.background="Yellow";
    list.innerHTML=resultHistory;
    list.style.margin='10px 0px';
   list.style.color='#000';
   list.style.padding='10px 5px';

    document.getElementById('for-chek').appendChild(list);
    
    firstOperand = result.toString();
    secondOperand = "";
    operator = "";
    isOperator = false;
    isResult = true;
    isbackspaceclicked=false;
}
