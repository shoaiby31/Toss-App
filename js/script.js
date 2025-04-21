  jQuery(document).ready(function($){

  $('#coin').on('click', function(){
    var flipResult = Math.random();
    $('#coin').removeClass();
    setTimeout(function(){
      if(flipResult <= 0.5){
        $('#coin').addClass('heads');
        console.log('it is head');
      }
      else{
        $('#coin').addClass('tails');
        console.log('it is tails');

      }
    }, 100);
  });
});


function SideNavbar(){
  var navbar = document.getElementById("navbar");
  if(navbar.style.display=="none")
  {
    navbar.style.display="block";
  }
  else if(navbar.style.display=="block")
  {
    navbar.style.display="none";
  }
  else{

  }
}
function HideNavbar(){
  var navbar = document.getElementById("navbar");
  if(navbar.style.display=="none")
  {
    navbar.style.display="none";
  }
  else if(navbar.style.display=="block")
  {
    navbar.style.display="none";
  }
  else{

  }
}


function MakeTeams(){
                  var total_teams=document.getElementById("total-teams").value;
                  if(total_teams>2 && typeof total_teams !== 'undefined')
                  {
                    if(total_teams<=50)
                    {
                      count =0;
                      document.getElementById("count").innerHTML=count;
                      var err=document.getElementById("err");
                      err.style.display="none";
                      var teams=document.getElementById("vvv");
                      var btn=document.getElementById("decision-btn");
                      var result=document.getElementById("result");
                      result.style.display="none";
                      teams.style.display="block";
                      btn.style.display="block";
                      var a=0;
                      var b=1;
                      var str="";
                      while(a<total_teams)
                      {
                        str +="</br><div class='form-group id='teams'> <input type='text' class='form-control' value='Player "+b+"' id='"+a+"' name='"+a+"' maxlength='15' required> </div>";
                        document.getElementById("vvv").innerHTML=str;
                        a++;
                        b++;
                        window.value=total_teams;
                      }
                    }
                    else
                    {
                      var err=document.getElementById("err");
                      err.style.display="block";
                      var err="More then 50 teams are not allowed*";
                      document.getElementById("err").innerHTML=err;
                    }
                  }
                  else{
                    var err=document.getElementById("err");
                    err.style.display="block";
                    var err="Must enter a number greater then 2*";
                    document.getElementById("err").innerHTML=err;
                    var teams=document.getElementById("vvv");
                    var teams_btn=document.getElementById("decision-btn");
                    teams.style.display="none";
                    teams_btn.style.display="none";
                  }
                }


                var count =0;
              function TeamsDecision()
                {
                  count++;
                  document.getElementById("count").innerHTML=count;
                  var result=document.getElementById("result");
                  result.style.display="block";

                  var teamName=[];
                  for(var j=0;j<window.value;j++)
                  {
                    teamName[j]=document.getElementById(j).value;
                  }
                  var x=document.getElementById("vvv");
                    x.style.display="none";
                  shuffle(teamName);
                  var t=1;
                  var result="";
                  for(var i=0;i<window.value;i++)
                  {
                    switch(i)
                    {
                    case 0: result +="<br><div class='animation1'><div class='result-box1 rotate'><span class='result'>"+t+". "+teamName[i]+"</span><img src='images/img1.gif' class='emoji'></div></div><br>";
                    break;
                    case 1: result +="<div class='animation2'><div class='result-box2 rotate'><span class='result'>"+t+". "+teamName[i]+"</span><img src='images/img2.gif' class='emoji' style='width: 15%;'></div></div><br>";
                    break;
                    case 2: result +="<div class='animation3'><div class='result-box3 rotate'><span class='result'>"+t+". "+teamName[i]+"</span><img src='images/img3.gif' class='emoji' style='width: 11%;'></div></div><br>";
                    break;
                    case 3: result +="<div class='animation4'><div class='result-box4'><span class='result'>"+t+". "+teamName[i]+"</span><img src='images/img4.gif' class='emoji' style='width: 10%;'></div></div><br>";
                    break;
                    default: result +="<div class='animation4'><div class='result-box4'><span class='result'>"+t+". "+teamName[i]+"</span><img src='images/img5.gif' class='emoji' style='width: 12%;'></div></div><br>";
                    }
                    // document.write(i);
                    document.getElementById("result").innerHTML=result;
                    t++;
                  }
                }
                function shuffle(array)
                  { 
                          for (var i = array.length - 1; i > 0; i--) { 
                              var j = Math.floor(Math.random() * (i + 1)); 
                              var temp = array[i]; 
                              array[i] = array[j]; 
                              array[j] = temp; 
                          } 
                          return array; 
                      } 