  var inputLabel = document.getElementById('inputLabel');
     
    function pushBtn(obj) {
         
        var pushed = obj.innerHTML;
         
        if (pushed == '=') {
            // Calcularea
            inputLabel.innerHTML = eval(inputLabel.innerHTML);
             
        } else if (pushed == 'STERGE') {
            // Stergerea
            inputLabel.innerHTML = '0';
             
        } else {
            if (inputLabel.innerHTML == '0') {
                inputLabel.innerHTML = pushed;
                 
            } else {
                inputLabel.innerHTML += pushed;   
            }
        }
    }
