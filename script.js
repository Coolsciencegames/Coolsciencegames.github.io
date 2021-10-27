var score=0;
var x=0;
var z=0;    
function quest(x){

  switch(x){
  case 1:
    document.getElementById('divAffiche').innerHTML = "Quelle est letat de hydrogene"+
    "<form id = 'questUn'>"+" <label for = 'otpion'> </label>"+
   " <input type = 'radio' name = 'questRad' value = 'Gaz'/>Gaz"
   +"<br>"+
   "<input type = 'radio' name = 'questRad' value = 'Liquid'/>Liquid"
   +"<br>" + 
   "<input type = 'radio' name = 'questRad' value = 'Solid'/>Solid"
   + "<br>"+
   "<input type='button' value = 'Soummettre reponse' onclick='sou(1)'>"
    
   +"</form>";
   
    break;

  case 2:
    score = score+ 2;
    document.getElementById('sc').innerHTML = score;
    break;
    
  }
}


function sou(z){
  var rep = document.getElementsById("questUn");
      if(documen.form[i].checked){

      }
      document.getElementById('divAffiche').innerHTML = "la reponce est gaz";
      document.getElementById('sc').innerHTML = score;
          
}
