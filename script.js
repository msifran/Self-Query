
function addition(  ){

    a = (document.getElementById('number1').value); 
    b = (document.getElementById('number2').value); 
    
    if (a==="") {
            a= NaN;
            console.log(a);       
    } else if (a==="0")  {
            a = Number(a);
            console.log(typeof(a));
            console.log(a);
    }
    
    if (b == "") {
        b = NaN;
    } else if (b==="0"){
        b= Number(b);   
    }

        if(isNaN(a) && isNaN(b)){
            alert("both bosx input ");
            
        }else if (isNaN(a)){
            alert("first box is empty ");
         
            
        }else if ( isNaN(b)){
            alert("second box is empty ");
           
        }else{
            result =Number(a)+Number(b);
            nodes="sum of " + Number(a)+ "+" + Number(b) + " is " + result ;
            document.getElementById("entries").style.listStyleType = "decimal";
                const resultlist = document.createElement("li");
            
            const resultOutput = document.createTextNode(nodes);
            
                resultlist.appendChild(resultOutput);
            
               document.getElementById("entries").appendChild(resultlist);
               document.getElementById('number2').value="check";
               document.getElementById('number1').value="check";
        }
      

}