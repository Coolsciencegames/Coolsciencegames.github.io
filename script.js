score = 0;
 
var element = [
 [0,1,2,
 3,4,5,6,7,8,9,10,
 11,12,13,14,15,16,18,19,
 20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,
 38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,
 56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,
 74,75,76,77,78,79,80,81,82,83,84,85,86,87,88],
 ["0","G","G",
 "S","S","S","S","G","G","G","G",
 "S","S","S","S","S","S","G","G",
 "S","S","S","S","S","S","S","S","S","S","S","S","S","S","S","S","L","G",
 "S","S","S","S","S","S","S","S","S","S","S","S","S","S","S","S","S","G",
 "S","S","S","S","S","S","S","S","S","S","S","S","S","S","S","S","S","G",
 "I","S","S","I","I","I","I","I","I","I","I","I","I","I","I","I","","I"],
 
 ["0","1+","0",
 "1+","2+","3+","4+","3-","2-","1-","0",
 "1+","2+","3+","4+4-","3-","2-","1-","0",
 "1+","2+","3+","4+3+","5+4+","3+2+","4+3+2+","3+2+","3+2+","3+2+","2+1+","2+","3+","4+","3-","2-","1-","0",
 "1+","2+","3+","4+","5+3+","3+2+","7+","4+3+","4+3+","4+2+","1+","2+","3+","4+2+","5+3+","2-","1-","0",
 "1+","2+","3+","4+","5+","6+","7+4+","4+3+","4+3+","4+2+","3+1+","2+1+","3+1+","4+2+","5+3+","4+2+","1-","0",
 "1+","2+","3+","","","","","","","","","","","","",""],
 
 
];
 
function quest(numElement,numQuest){

  numQuest = Math.floor((Math.random() * 2) + 1);

  if (numQuest == 1){
    document.getElementById('divAffiche').innerHTML = 
    "<form>"+" <label for = 'otpion'> Quelle est letat naturel de l'element? </label>"+ "<br>"+
    " <input type = 'radio' name = 'questRad' id = 'etats' value = 'G'/>Gaz"
    +"<br>"+
    "<input type = 'radio' name = 'questRad' id = 'etats' value = 'L'/>Liquid"
    +"<br>" +
    "<input type = 'radio' name = 'questRad' id = 'etats' value = 'S'/>Solid"
    + "<br>"+
    "<input type = 'radio' name = 'questRad' id = 'etats' value = 'I'/>Inconnue"
    +"<br>"+
    "<input type='button' value = 'Soummettre reponse' onclick='verifieRep("+ numElement+","+numQuest +")'" +"</form>";
  }
  if (numQuest == 2){
    document.getElementById('divAffiche').innerHTML = 
    "<form>"+" <label for = 'otpion'> Quelle est la charge de son ion? </label>"
    + "<br>"+
    "<input type='checkbox' id='chkIon' name='Ion' value='9+'>9+"
    + "<br>"+
    "<input type='checkbox' id='chkIon' name='Ion' value='8+'>8+"
    + "<br>"+
    "<input type='checkbox' id='chkIon' name='Ion' value='7+'>7+"
    + "<br>"+
    "<input type='checkbox' id='chkIon' name='Ion' value='6+'>6+"
    + "<br>"+
    "<input type='checkbox' id='chkIon' name='Ion' value='5+'>5+"
    + "<br>"+
    "<input type='checkbox' id='chkIon' name='Ion' value='4+'>4+"
    + "<br>"+
    "<input type='checkbox' id='chkIon' name='Ion' value='3+'>3+"
    + "<br>"+
    "<input type='checkbox' id='chkIon' name='Ion' value='2+'>2+"
    + "<br>"+
    "<input type='checkbox' id='chkIon' name='Ion' value='1+'>1+"
    + "<br>"+
    "<input type='checkbox' id='chkIon' name='Ion' value='0'>0"
    + "<br>"+
    "<input type='checkbox' id='chkIon' name='Ion' value='1-'>1-"
    + "<br>"+
    "<input type='checkbox' id='chkIon' name='Ion' value='2-'>2-"
    + "<br>"+
    "<input type='checkbox' id='chkIon' name='Ion' value='3-'>3-"
    + "<br>"+
    "<input type='checkbox' id='chkIon' name='Ion' value='4-'>4-"
    + "<br>"+

    "<input type='button' value = 'Soummettre reponse' onclick='verifieRep("+ numElement+","+numQuest +")'" +"</form>";
    
    
  }
return numQuest
}
 
function getEtat(){
 
 var rep1 = document.getElementsByName("questRad");
    
      var etat = "";
      for (var i = 0; i < rep1.length; i++) {
          if (rep1[i].checked) {
              etat = rep1[i].value;
          }
      }
 return etat
}

function getIon(){
  var rep2 = document.getElementsByName("Ion");
var ion = "";
for (var i=0; i < rep2.length; i++) {
    if (rep2[i].checked) {
         ion += "" + rep2[i].value;
    }
  }

  return ion
}
 
 
 
function verifieRep(numElement,numQuest){

  etat = getEtat();
  ions = getIon();

  var etatElementSel= element[1][numElement];
  var ionElementSel = element[2][numElement];

  

 
 

    if (numQuest == 1){
      if (etatElementSel===etat){
          document.getElementById('divAffiche').innerHTML = "bonne reponce!!!";
        score= score + 20;
        document.getElementById('sc').innerHTML = score;
      }
    
      if(etatElementSel!==etat){
            document.getElementById('divAffiche').innerHTML = "mauvaise reponce";
        
        document.getElementById('sc').innerHTML = score;
        
      }
    }

    
    if (numQuest == 2){
      
      
      
      if (ionElementSel==ions){
          document.getElementById('divAffiche').innerHTML = "bonne reponce!!!";
        score= score + 20;
        document.getElementById('sc').innerHTML = score;
      }

      
    
      if (ionElementSel!=ions){
            document.getElementById('divAffiche').innerHTML = "mauvaise reponce";
        
        document.getElementById('sc').innerHTML = score;
        
      }

      if (numElement>75){
        document.getElementById('divAffiche').innerHTML = "On ne connais pas la reponse?";
        
        document.getElementById('sc').innerHTML = score;
      }


      
    }
   
   
}
