score = 0; //variable pour le pointage 
 //tableau por stocker le numeros de quesion et reponce
var element = [
 
 
 [0,1,2,
 3,4,5,6,7,8,9,10,
 11,12,13,14,15,16,18,19,
 20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,
 38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,
 56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,
 74,75,76,77,78,79,80,81,82,83,84,85,86,87],
 
 
 ["0","Gaz","Gaz",
 "Solid","Solid","Solid","Solid","Gaz","Gaz","Gaz","Gaz",
 "Solid","Solid","Solid","Solid","Solid","Solid","Gaz","Gaz",
 "Solid","Solid","Solid","Solid","Solid","Solid","Solid","Solid","Solid","Solid","Solid","Solid","Solid","Solid","Solid","Solid","Liquid","Gaz",
 "Solid","Solid","Solid","Solid","Solid","Solid","Solid","Solid","Solid","Solid","Solid","Solid","Solid","Solid","Solid","Solid","Solid","Gaz",
 "Solid","Solid","Solid","Solid","Solid","Solid","Solid","Solid","Solid","Solid","Solid","Liquid","Solid","Solid","Solid","Solid","Solid","Gaz",
 "Inconnue","Solid","Solid","Inconnue","Inconnue","Inconnue","Inconnue","Inconnue","Inconnue","Inconnue","Inconnue","Inconnue","Inconnue","Inconnue","Inconnue","Inconnue","","Inconnue"],
 
 
 ["0","1+","0",
 "1+","2+","3+","4+","3-","2-","1-","0",
 "1+","2+","3+","4+4-","3-","2-","1-","0",
 "1+","2+","3+","4+3+","5+4+","3+2+","4+3+2+","3+2+","3+2+","3+2+","2+1+","2+","3+","4+","3-","2-","1-","0",
 "1+","2+","3+","4+","5+3+","3+2+","7+","4+3+","4+3+","4+2+","1+","2+","3+","4+2+","5+3+","2-","1-","0",
 "1+","2+","3+","4+","5+","6+","7+4+","4+3+","4+3+","4+2+","3+1+","2+1+","3+1+","4+2+","5+3+","4+2+","1-","0",
 "1+","2+","3+","","","","","","","","","","","","",""],
 
["0","1","1",
"2","2","2","2","2","2","2","2",
"3","3","3","3","3","3","3","3",
"4","4","4","4","4","4","4","4","4","4","4","4","4","4","4","4","4","4",
"5","5","5","5","5","5","5","5","5","5","5","5","5","5","5","5","5","5",
"6","6","6","6","6","6","6","6","6","6","6","6","6","6","6","6","6","6",
"7","7","7","7","7","7","7","7","7","7","7","7","7","7","7","7","7","7"],
 
 ["0","Non-metal","Gaz noble",
 "Alcalin","Alcalin terrereux","Metaloides","Non-metal","Non-metal","Non-metal","Non-metal","Gaz noble",
 "Alcalin","Alcalin terrereux","Metal pauvre","Metaloides","Non-metal","Non-metal","Non-metal","Gaz noble",
 "Alcalin","Alcalin terrereux","Metaux de transition","Metaux de transition","Metaux de transition","Metaux de transition","Metaux de transition","Metaux de transition","Metaux de transition","Metaux de transition","Metaux de transition","Metaux de transition","Metal pauvre","Metaloides","Metaloides","Non-metal","Non-metal","Gaz noble",
 "Alcalin","Alcalin terrereux","Metaux de transition","Metaux de transition","Metaux de transition","Metaux de transition","Metaux de transition","Metaux de transition","Metaux de transition","Metaux de transition","Metaux de transition","Metaux de transition","Metal pauvre","Metal pauvre","Metaloides","Metaloides","Non-metal","Gaz noble",
 "Alcalin","Alcalin terrereux","Metaux de transition","Metaux de transition","Metaux de transition","Metaux de transition","Metaux de transition","Metaux de transition","Metaux de transition","Metaux de transition","Metaux de transition","Metaux de transition","Metal pauvre","Metal pauvre","Metal pauvre","Metal pauvre","Metaloides","Gaz noble",
 "Alcalin","Alcalin terrereux","Metaux de transition","Metaux de transition","Metaux de transition","Metaux de transition","Metaux de transition","Metaux de transition","Inconnue","Inconnue","Inconnue","Inconnue","Inconnue","Inconnue","Inconnue","Inconnue","Inconnue","Inconnue"],
 
];
 /*fonction pour les question*/
function quest(numElement){

/*Cherche un numero aleatoire qui determine quel question vas etre afficher*/
  numQuest = Math.floor((Math.random() * 4) + 1);

/*La premiere question*/
  if (numQuest == 1){
    document.getElementById('divAffiche').innerHTML = 
    "<form>"+" <label for = 'otpion'> Quelle est letat naturel de l'element? </label>"+ "<br>"+
    " <input type = 'radio' name = 'questEtat' id = 'etats' value = 'Gaz'/>Gaz"
    +"<br>"+
    "<input type = 'radio' name = 'questEtat' id = 'etats' value = 'Liquid'/>Liquid"
    +"<br>" +
    "<input type = 'radio' name = 'questEtat' id = 'etats' value = 'Solid'/>Solid"
    + "<br>"+
    "<input type = 'radio' name = 'questEtat' id = 'etats' value = 'Inconnue'/>Inconnue"
    +"<br>"+
    /*Bouton pour verifier et soummettre la reponse*/
    "<input type='button' value = 'Soummettre reponse' onclick='verifieRep("+ numElement+","+numQuest +")'" +"</form>";
  }


  /*La deuxieme question*/
  if (numQuest == 2){
    document.getElementById('divAffiche').innerHTML = 
    "<form>"+" <label for = 'otpion'> Quelle sont les charges possible de sont ions? </label>"
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
    /*Bouton pour verifier et soummettre la reponse*/
    "<input type='button' value = 'Soummettre reponse' onclick='verifieRep("+ numElement+","+numQuest +")'" +"</form>";
  }

/*La troisieme question*/
  if (numQuest == 3){
    document.getElementById('divAffiche').innerHTML = 
    "<form>"+" <label for = 'otpion'> Combien de couche de valence? </label>"+ "<br>"+
    " <input type = 'radio' name = 'questVal' id = 'Couche' value = '1'/>1"
    +"<br>"+
    "<input type = 'radio' name = 'questVal' id = 'Couche' value = '2'/>2"
    +"<br>" +
    "<input type = 'radio' name = 'questVal' id = 'Couche' value = '3'/>3"
    + "<br>"+
    "<input type = 'radio' name = 'questVal' id = 'Couche' value = '4'/>4"
    +"<br>"+
    "<input type = 'radio' name = 'questVal' id = 'Couche' value = '5'/>5"
    +"<br>"+
    "<input type = 'radio' name = 'questVal' id = 'Couche' value = '6'/>6"
    +"<br>"+
    "<input type = 'radio' name = 'questVal' id = 'Couche' value = '7'/>7"
    +"<br>"+
    /*Bouton pour verifier et soummettre la reponse*/
    "<input type='button' value = 'Soummettre reponse' onclick='verifieRep("+ numElement+","+numQuest +")'" +"</form>";
  }
  /*La quatrieme question*/
  if (numQuest == 4){
    document.getElementById('divAffiche').innerHTML = 
    "<form>"+" <label for = 'otpion'> Quel est la famille de cette element? </label>"+ "<br>"+
    " <input type = 'radio' name = 'questFam' id = 'Couche' value = 'Alcalin'/>Alcalin"
    +"<br>"+
    "<input type = 'radio' name = 'questFam' id = 'Couche' value = 'Alcalin terrereux'/>Alcalin terrereux"
    +"<br>" +
    "<input type = 'radio' name = 'questFam' id = 'Fam' value = 'Metaux de transition'/>Metaux de transition"
    + "<br>"+
    "<input type = 'radio' name = 'questFam' id = 'Fam' value = 'Metal pauvre'/>Metal pauvre"
    +"<br>"+
    "<input type = 'radio' name = 'questFam' id = 'Fam' value = 'Metaloides'/>Metaloides"
    +"<br>"+
    "<input type = 'radio' name = 'questFam' id = 'Fam' value = 'Non-metal'/>Non-metal"
    +"<br>"+
    "<input type = 'radio' name = 'questFam' id = 'Fam' value = 'Gaz noble'/>Gaz noble"
    +"<br>"+
    "<input type = 'radio' name = 'questFam' id = 'Fam' value = 'Inconnue'/>Inconnue"
    +"<br>"+
    /*Bouton pour verifier et soummettre la reponse*/
    "<input type='button' value = 'Soummettre reponse' onclick='verifieRep("+ numElement+","+numQuest +")'" +"</form>";
  }
  

}
 /*fonction qui cherche ce que la reponse de l'utilisateur pour la question 1*/
function getEtat(){
 
 var rep1 = document.getElementsByName("questEtat");
    /*Variable pour mettre ce que l'utilisateur a choisi*/
      var etat = "";
        for (var i = 0; i < rep1.length; i++) {
            if (rep1[i].checked) {
                etat = rep1[i].value;
            }
        }
 return etat
}

/*fonction qui cherche ce que la reponse de l'utilisateur pour la question 2*/
function getIon(){
  
  var rep2 = document.getElementsByName("Ion");
    /*Variable pour mettre ce que l'utilisateur a choisi*/
    var ion = "";
    for (var i=0; i < rep2.length; i++) {
        if (rep2[i].checked) {
            ion += "" + rep2[i].value;
        }
      }

  return ion
}

/*fonction qui cherche ce que la reponse de l'utilisateur pour la question 3*/
function getCoucheVal(){
  var rep3 = document.getElementsByName("questVal");
        /*Variable pour mettre ce que l'utilisateur a choisi*/
        var valence = "";
        for (var i = 0; i < rep3.length; i++) {
            if (rep3[i].checked) {
                valence = rep3[i].value;
            }
        }
 return valence
}

/*fonction qui cherche ce que la reponse de l'utilisateur pour la question 4*/
function getFamille(){
  var rep4 = document.getElementsByName("questFam");

        /*Variable pour mettre ce que l'utilisateur a choisi*/
        var famille = "";
        for (var i = 0; i < rep4.length; i++) {
            if (rep4[i].checked) {
                famille = rep4[i].value;
            }
        }
 return famille
}

 
/*Fonction qui verifie si la reponse que l'utilisateur a mis est correct*/
function verifieRep(numElement,numQuest){


/*Mettre les de les fonction dans une variable*/
  etat = getEtat();
  ion = getIon();
  valence = getCoucheVal();
  fammille = getFamille();
  

/*Cherche la valeur de la reponse de la question*/
  var etatElementSel = element[1][numElement];//element(x,y)
  var ionElementSel = element[2][numElement];//element(x,y)
  var valElementSel  = element[3][numElement];//element(x,y)
  var famElementSel = element[4][numElement];//element(x,y)

  

 
 
/*Le message pour la premiere question */
    if (numQuest == 1){
      /* si bonne reponse*/
      if (etatElementSel===etat){
          document.getElementById('divAffiche').innerHTML = "Bonne reponse!!!";
        score= score + 20;
        document.getElementById('sc').innerHTML = score;
      }
      /* si mauvaise reponse */
      if(etatElementSel!==etat){
            document.getElementById('divAffiche').innerHTML = "Mauvaise reponse, la reponse est: " + etatElementSel;
        
        document.getElementById('sc').innerHTML = score;
        
      }
    }

    /*Le message pour la deuxieme question */
    if (numQuest == 2){
      
      
      /* si bonne reponse*/
      if (ionElementSel==ion){
          document.getElementById('divAffiche').innerHTML = "Bonne reponse!!!";
        score= score + 30;
        document.getElementById('sc').innerHTML = score;
      }

      
      /* si mauvaise reponse*/
      if (ionElementSel!=ion){
            document.getElementById('divAffiche').innerHTML = "Mauvaise reponse, la reponse est: " + ionElementSel;
        
        document.getElementById('sc').innerHTML = score;
        
      }
      }

    /*Le message pour la troisieme question */
    if (numQuest == 3){
      
      
      
      /* si bonne reponse*/
      if (valElementSel===valence){
          document.getElementById('divAffiche').innerHTML = "Bonne reponse!!!";
        score= score + 10;
        document.getElementById('sc').innerHTML = score;
      }

      
      /* si mauvaise reponse*/
      if (valElementSel!==valence){
            document.getElementById('divAffiche').innerHTML = "Mauvaise reponse, la reponse est: " + valElementSel;
        
        document.getElementById('sc').innerHTML = score;
        
      } 
    }
    /*Le message pour la quatrieme question */
    if (numQuest == 4){
      
      
      
      /* si bonne reponse*/
      if (famElementSel===fammille){
          document.getElementById('divAffiche').innerHTML = "Bonne reponse!!!";
        score= score + 20;
        document.getElementById('sc').innerHTML = score;
      }

      
      /* si mauvaise reponse*/
      if (famElementSel!==fammille){
            document.getElementById('divAffiche').innerHTML = "Mauvaise reponse, la reponse est: " + famElementSel;
        
        document.getElementById('sc').innerHTML = score;
        
      } 
    }
}