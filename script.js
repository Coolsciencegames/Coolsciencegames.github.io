score = 0;
 
var element = [
 [0,1,2,3,4],
 ["","H","He","Li","Be"],
 ["","G","G","S","S"],
];
 
function quest(numElement){
 document.getElementById('divAffiche').innerHTML = "Quelle est letat naturel de l'element"+
   "<form id = 'questUn'>"+" <label for = 'otpion'> </label>"+
  " <input type = 'radio' name = 'questRad' id = 'etat' value = 'G'/>Gaz"
  +"<br>"+
  "<input type = 'radio' name = 'questRad' id = 'etat' value = 'L'/>Liquid"
  +"<br>" +
  "<input type = 'radio' name = 'questRad' id = 'etat' value = 'S'/>Solid"
  + "<br>"+
  "<input type='button' value = 'Soummettre reponse' onclick='verifieEtat("+numElement +")'" +"</form>";
}
 
function getEtat(){
 
 var rep = document.getElementsByName("questRad");
    
      var etat = "";
      for (var i = 0; i < rep.length; i++) {
          if (rep[i].checked) {
              etat = rep[i].value;
          }
      }
 return etat
}
 
 
 
function verifieEtat(numElement){
 
  var etat = getEtat();
 
 
   if (etat==etat){
      document.getElementById('divAffiche').innerHTML = "bonne reponce!!!";
     score= score + 20
     document.getElementById('sc').innerHTML = score;
   }
 
   if(etat!=etat){
        document.getElementById('divAffiche').innerHTML = "mauvaise reponce";
    
     document.getElementById('sc').innerHTML = score;
    
   }
   
}
