function myFunction() {
    document.getElementById("myForm").reset();
}

function myFunction2() {
    var x = document.getElementById("message").innerHTML;
    document.getElementById("myForm").innerHTML = x;
	}
function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        
    alert('Please input numbers only');
	return false;
    }
	else{
	return true;
	
	}
}

function ValidateAlpha(evt)
    {
		evt = (evt) ? evt : window.event;
        var keyCode = (evt.which) ? evt.which : evt.keyCode;
        if ((keyCode < 65 || keyCode > 90) && (keyCode < 97 || keyCode > 123) && keyCode != 32){
         alert('Please enter alphabets only');
        return false;
		}
            return true;
    }