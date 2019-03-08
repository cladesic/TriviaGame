$(document).ready(function () {
    $("p").hide();
    $("label").hide();
    var questions = [
        "In 2009 Platoon won Best Picture for a war movie",
        "Paul Newman starred in the 1961 movie The Hustler",
        "Bruce Willis played as John McClane, a New York police officer, taking on a gang of criminals in a Los Angeles skyscraper on Christmas Eve?",
        "BoBo Baggins is the name of the hobbit played by Elijah Wood in the Lord of the Rings movies.",
        "Jennifer Lawrence actress plays Katniss Everdeen in the Hunger Games movies",
        "Judy Garland starred as Dorothy Gale in Yellow Brick Road classic movie",
        "In 1984 science fiction movie 'The Terminator' Linda Hamilton play the role of Sarah Connor",
        "Brad Pitt played Jack Dawson in the 1997 epic Titanic"
    ];
    var correct= 0;
    var wrong = 0;
    var noAnswer = 8;
    var reverse_counter = 15
    var downloadTimer;
    

    function myFunction() {

        document.getElementById("question1").innerHTML = questions[0];
        document.getElementById("question2").innerHTML = questions[1];
        document.getElementById("question3").innerHTML = questions[2];
        document.getElementById("question4").innerHTML = questions[3];
        document.getElementById("question5").innerHTML = questions[4];
        document.getElementById("question6").innerHTML = questions[5];
        document.getElementById("question7").innerHTML = questions[6];
        document.getElementById("question8").innerHTML = questions[7];
    }

    myFunction();

    $("input[type='button']").click(function () {
        radioValue1 = $("input[name='radio1']:checked").val();
        if (radioValue1) {
            answer1(radioValue1);
        }
        radioValue2 = $("input[name='radio2']:checked").val();
        if (radioValue2) {
            answer2(radioValue2);
        }
        radioValue3 = $("input[name='radio3']:checked").val();
        if (radioValue3) {
            answer3(radioValue3);
        }
        radioValue4 = $("input[name='radio4']:checked").val();
        if (radioValue4) {
            answer4(radioValue4);
        }
        radioValue5 = $("input[name='radio5']:checked").val();
        if (radioValue5) {
            answer5(radioValue5);
        }
        radioValue6 = $("input[name='radio6']:checked").val();
        if (radioValue6) {
            answer6(radioValue6);
        }
        radioValue7 = $("input[name='radio7']:checked").val();
        if (radioValue7) {
            answer7(radioValue7);
        }
        radioValue8 = $("input[name='radio8']:checked").val();
        if (radioValue8) {
            answer8(radioValue8);
        }
        else
        clearInterval(downloadTimer);
        
    });

   function answer1() {
       if (radioValue1 === "false") {
       correct++;
       noAnswer---correct;
       $(".badge-success").text(correct);
       $(".badge-info").text(noAnswer);
    } else
      wrong++;
      noAnswer---wrong;
      $(".badge-error").text(wrong);
      $(".badge-info").text(noAnswer);
    };     
   function answer2() {
       if (radioValue2 === "true") {
        correct++;
        noAnswer---correct;
        $(".badge-success").text(correct);
        $(".badge-info").text(noAnswer);
       } else
       wrong++;
       noAnswer---wrong;
       $(".badge-error").text(wrong);
       $(".badge-info").text(noAnswer);
    };
   function answer3() {
      if (radioValue3 === "true") {
       correct++;
       noAnswer---correct;
       $(".badge-success").text(correct);
       $(".badge-info").text(noAnswer);
    } else
        wrong++;
        noAnswer---wrong;
        $(".badge-error").text(wrong);
        $(".badge-info").text(noAnswer);
    };  

    function answer4() {
        if (radioValue4 === "false") {
        correct++;
        noAnswer---correct;
        $(".badge-success").text(correct);
        $(".badge-info").text(noAnswer);
       } else
        wrong++;
        noAnswer---wrong;
        $(".badge-error").text(wrong);
        $(".badge-info").text(noAnswer);
    };
    
   function answer5() {
      if (radioValue5 === "true") {
        correct++;
        noAnswer---correct;
        $(".badge-success").text(correct);
        $(".badge-info").text(noAnswer);
      } else
        wrong++; 
        noAnswer---wrong;
        $(".badge-error").text(wrong);
        $(".badge-info").text(noAnswer);
    };
   function answer6() {
        if (radioValue6 === "false") {
           correct++;
           noAnswer---correct;
           $(".badge-success").text(correct);
           $(".badge-info").text(noAnswer);
       } else
       wrong++;
       noAnswer---wrong;
       $(".badge-error").text(wrong);
       $(".badge-info").text(noAnswer);           
    };
    function answer7() {
       if (radioValue7=== "true") {
        correct++;
        noAnswer---correct;
        $(".badge-success").text(correct);
        $(".badge-info").text(noAnswer);
       } else
       wrong++;
       noAnswer---wrong;
       $(".badge-error").text(wrong);
       $(".badge-info").text(noAnswer);
    } ;       
    
    function answer8() {
        if (radioValue8 === "false") {
        correct++ 
        noAnswer---correct;
        $(".badge-success").text(correct);
        $(".badge-info").text(noAnswer);
        } else    
        wrong++;
        noAnswer---wrong;
        $(".badge-error").text(wrong);
        $(".badge-info").text(noAnswer);
    };
    
    $("#start").click(function start_countdown() {
        $("p").show();
        $("label").show();
       
        downloadTimer = setInterval(function () {
            document.getElementById("sbar").value = 15 - --reverse_counter;
            if (reverse_counter <= 0)
                clearInterval(downloadTimer);
            document.getElementById("counting").innerHTML = reverse_counter;
            if (reverse_counter === 0){
                alert("times up");
                $("p").hide();
                $("label").hide();
            }
        }, 1500);
    });
    
      });
