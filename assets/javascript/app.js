
   
    var position=0;// position of questions within quetions array.
    var question;
    var A, B, C, D;
    var correct=0;
    var incorrect=0;
    var second=60;
    var minute=1;
    // var hour=0;

    // call HTML elelements using js
    var startStopCounter=0;
    var eletest=document.getElementById("test");
    var eletestStatus=document.getElementById("testStatus");
    var elebtnStartStop=document.getElementById('btnStartStop');
    var choices=document.getElementsByName('choices');
    var eleresult=document.getElementById('result');
    var elecorrect=document.getElementById('correct');
    var eleincorrect=document.getElementById('incorrect');
    var eleunanswered=document.getElementById('unanswered');

    var elecountDownTimer=document.getElementById("countDownTimer");
    var setIntervalVar=setInterval(mytimerFn,1000);


    
// $(document).ready(function(e){


elebtnStartStop.addEventListener('click',startStopFn, false);

    function startStopFn(){
            elebtnStartStop.style.display='none';
            startStopCounter++;
            questionsListFn();
        }

    //count down from the predefined variable values.
    function mytimerFn(){
        if(startStopCounter>0){
        second--; 
        if(second<10){
        // show two digit for seconds
        elecountDownTimer.innerHTML="<p> Time Remaining 0"+minute+":0 "+second+" </p>";
        }else{
            elecountDownTimer.innerHTML="<p> Time Remaining 0"+minute+":"+second+" </p>";
        }
        // when second reaches 59 countdown minute by 1, recount seconds from 60;
        if(second===0&&minute!=0){
        second=60;
        minute--;
        }      
        
        if(second===0){
        // clearInterval(setIntervalVar);
        startStopCounter=0;
        testCompletedFn();

            }
        }
    }
  
    var questionsArray=[
["This person, considered the father of computers?","Charles Babbage","Alan Turring","Steve Wozniak","Bill Gates",'A'],
["One of the first electronic computers, located in Philadelphia, occupied 167 square metres, and weighed 27 tons. What was it called?","MANIAC","ENIAC","EDVAC","ILLIAC","B"],
["Google may be your preferred search engine, it got its name from?","Mathematical Term","google CEO","Latin word","Greek word","A"],
["This man designed and built the first Apple computer","Steve Jobs","Steve Wozniak","Bill Gates","Mark Zuckerberg","B"],
["The first web browser, called WorldWideWeb, was invented in 1990 by?","Tim Berners-Lee","Charles Babbage","Marc Andreessen","Ted Nelson","A"]
    ];

    // function _(x){
    //     return document.getElementById(x);
    // }




    function questionsListFn(){   
       if(position<questionsArray.length){
        eletestStatus.innerHTML= "Question   " + (position+1) + "   of  " + questionsArray.length;
        question= questionsArray[position][0];
        A=questionsArray[position][1];// choice A
        B=questionsArray[position][2];// choice B
        C=questionsArray[position][3];// choice C
        D=questionsArray[position][4];// choice D
        eletest.innerHTML= "<h5>"+ question + "</h5>";
        eletest.innerHTML += "<input type='radio' name='choices' value='A'/>"+ "  " +A;
        eletest.innerHTML += "<input type='radio' name='choices' value='B'/>"+ "  " +B;
        eletest.innerHTML += "<input type='radio' name='choices' value='C'/>"+ "  " +C;
        eletest.innerHTML += "<input type='radio' name='choices' value='D'/>"+ "  " +D + "</br>";
        eletest.innerHTML += "<button onclick='checkAnswerFn()'> Submit </button>"; 
    }
    }


    
    function checkAnswerFn(){
        var choice='';
        for(i=0;i<choices.length;i++){
            if(choices[i].checked){
                choice=choices[i].value;
                //alert(choice)
            }
        
        }
                
        if(choice===questionsArray[position][5]){
           
            // alert('that is correct');
            correct++;
        }
        else 
        {   
            if(choice!=''){
            incorrect++;
            }
        }

        position++;
        
        if(position==questionsArray.length){
            //alert("end");
        testCompletedFn();
       
        }

        questionsListFn();
        
    }

    function testCompletedFn(){
        elecountDownTimer.innerHTML="";
        eletest.innerHTML="";
        eletestStatus.innerHTML="";
        eleresult.innerHTML="Test Completed! ";
        elecorrect.innerHTML="Correct answer: "+correct+"";
        eleincorrect.innerHTML="Incorrect answer: "+incorrect+"";
        eleunanswered.innerHTML="Unanswered: "+(questionsArray.length-correct-incorrect)+""+"<br>";
     // Create a text node
        var btn = document.createElement("BUTTON");
        var t = document.createTextNode("Restart"); 
        btn.appendChild(t);
        eleunanswered.appendChild(btn);
        btn.addEventListener('click',restartFn,false)
        // //reset question position to zero 

        startStopCounter=0;
        second=60;
        minute=1;
        correct=0;
        incorrect=0;
        clearInterval(setIntervalVar);
      
        }

        function restartFn(){
            var user=confirm('do you want to play again?');
            if(user){

                eleresult.innerHTML="";
                elecorrect.innerHTML="";
                eleincorrect.innerHTML="";
                eleunanswered.innerHTML="";
                position=0;
                startStopCounter++;
                setIntervalVar=setInterval(mytimerFn,1000);
                questionsListFn();

            
            }
            
        } 






    // });






