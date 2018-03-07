$.afui.autoLaunch = false; //By default, it is set to true and you're app will run right away.  We set it to false to show a splashscreen
/* This function runs when the content is loaded.*/
$.afui.useOSThemes=false;
 $(document).ready(function(){
    setTimeout(function(){
        $.afui.launch();
    },1500);
});




function check() {
var pass1 = document.getElementById("pass1").value;
var pass2 = document.getElementById("pass2").value;
var det = document.getElementById("details");

if(pass1 !=pass2){

    det.innerHTML="<b style='color:red;'>Password Mismatch...</b>"
}
else{

  det.innerHTML="<b style='color:green;'>passwords correct</b>"
}
}


function strongpass() {
var pass1 = document.getElementById("pass1").value;

var stronger = document.getElementById("str");

if(pass1.length<4){

    stronger.innerHTML="<b style='color:red;'>weak</b>"
}
else if(pass1.length<6){

     stronger.innerHTML="<b style='color:orange;'>medium</b>"
}
else{

     stronger.innerHTML="<b style='color:green;'>Strong</b>"
}
}
function home(){

$.afui.loadContent("#landing",false,false,"fade");
}

function rs(show_title) {

    var event_title=show_title;

 var rsvp_title=alert("RSVP to "+ show_title +"? ");
 $.afui.loadContent("#formdata",false,false,"fade");


        var contactform = document.getElementById("contactform");
        contactform.innerHTML=
       ' First Name:<br><input id="fusername" type="text"/><br>Last Name:<br><input id="lusername" type="text"/><br>Mobile No:<br><input id="userphone" type="text"/><center><button id="reserve" name=" '+ event_title +'" onclick="rsvp_user(this.name)">RSVP NOW</button></center>';
/*
 var rsvp_title=show_title;
var updiv = document.getElementById("upcomingev");

var event = document.getElementById("event").value;   */

}
/* getting details from contactform to RSVP */
function rsvp_user(event_title2){
     var evt_title=event_title2;
     var fusername = document.getElementById("fusername").value;
     var lusername= document.getElementById("lusername").value;
     var userphone = document.getElementById("userphone").value;
     if(fusername=='' || lusername=='' || userphone==''){

        var error={ message:"All fieled are required",
            position:"tc",
            delay:2000,
            autoClose:true,
            type:"error",
          };
         $.afui.toast(error);
     }


    else {

     var rsvp='&firstname='+fusername  + '&lastname='+ lusername + '&phonenumber='+ userphone +  '&eventname='+ evt_title;
           // AJAX code to submit form.
            $.ajax({
                    type: "POST",
                    url: "http://192.168.1.123:3000/rsvp",
                    data: rsvp,
                    cache: false,
                    success: function(rsvp_details) {
                           swal("Good job!", "You have RSVP successfuly!", "success")

                       }

            });

   }


}
function eventListener(show_id) {
          var id=show_id;
           var display;
          var index, len;
            $.ajax({
            dataType: "json",
            data:display,
            url: "http://192.168.1.123:3000/events",
            cache: false,
            method: 'GET',
            success: function(rsp) {
                 var i;
       for(var i = 0 ; i < rsp.length; ++i) {
            if( rsp[i].title == id) {
         var venue;
         var desc;
         var evt_time;
         var evt_date;
         var event_id;
         var title= rsp[i].title;
         var datedata=rsp[i].date;
        var date = new Date(datedata);
        var dateformt=(date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear();
        venue= rsp[i].venue;
        desc = rsp[i].desc;
        evt_time = rsp[i].time;
        $.afui.loadContent("#rsvpy",false,false,"fade");
        var evdisp = document.getElementById("evdisp");
        evdisp.innerHTML=
       '<div style=" box-shadow: 0px 0px 3px black" ><b style="font-size:18px;font-family:times new romans;margin-top:60px;padding-top:30px;">'+ show_id + '</b><hr>'+ desc +'<br><b>venue:</b>'+ venue +'<br><b>Date:</b>'+ dateformt +'<em>&nbsp;'+ evt_time +'</em></div><center><button id="reserve" name=" '+ title +'" onclick="rs(this.name)">RSVP THE EVENT</button></center>';
            }

        }
    }

        });

}
/* getting upcoming events from the server and displaying them in the landing page in a div called upcomingevents */
function upcoming() {

var updiv = document.getElementById("upcomingevents");

var display;
var index, len;

$.ajax({
    dataType: "json",
    data: display,
    url: "http://192.168.1.123:3000/events",
    cache: false,
    method: 'GET',
    success: function(rsp) {

                var text = "";
                var i;
                for (i = 0; i < rsp.length; i++) {
                         var title=rsp[i].title;
                         var desc=rsp[i].desc;
                         var datedata=rsp[i].date;
                         var date = new Date(datedata);
                         var dateformt=(date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear();
                          text +='<div style="width:100%;height:auto;background:#FFFFFF;border-radius:3px; box-shadow: 0px 0px 4px black" id="'+ title + '" onclick="eventListener(this.id)">' + ' <b style="font-family:times new romans;font-size:18px;">' +rsp[i].title + '</b> <br>' + rsp[i].venue + '<br><b style="color:blue;">' + dateformt+'&nbsp;'  + rsp[i].time +'</b></div><hr> &nbsp;';

                updiv.innerHTML=text;
                }

            }

 });

 $.afui.loadContent("#upcoming",false,false,"fade");

}

function login() {

$.afui.loadContent("#login",false,false,"fade");
}

function signup() {

$.afui.loadContent("#signup",false,false,"fade");
}
function main() {

$.afui.loadContent("#mainpage",false,false,"fade");
}
/* checking authentication details to login */
function loginauth() {

var email = document.getElementById("email").value;
var pass1= document.getElementById("password").value;
var auth = document.getElementById("data");
if(email=='' && pass1==''){

    var error={ message:"Email and password are empty",
        position:"tc",
        delay:2000,
        autoClose:true,
        type:"error",
      };
     $.afui.toast(error);
}

if(pass1=='' && email !=''){

   var passerror={ message:"Enter password",
                    position:"tc",
                    delay:2000,
                    autoClose:true,
                    type:"error",
                };
      $.afui.toast(passerror);
}
if(email=='' && pass1 !=''){

      var emailerror={ message:"Enter Email",
                            position:"tc",
                            delay:2000,
                            autoClose:true,
                            type:"error",
                  };
       $.afui.toast(emailerror);
 }

  else if(email !='' && pass1 !=='') {
   var progress = document.getElementById("loaderlogin");
    progress.innerHTML='<center><img src="images/loading.gif" style="height:120px;width:120px;border-radius:50%;"></center>';
     var details='&username='+ email + '&password='+ pass1;

              $.ajax({
                    type: "POST",
                    url: "http://192.168.1.138:3000/login",
                    data: details,
                    cache: false,
                    success: function(data) {
                                var num=data;
                                alert(data);
                                if(num ==1){

                                     $.afui.toast("Invalid username or password!");
                                } else{

                                    $.afui.loadContent("#landing",false,false,"fade");
                                     progress.innerHTML='';
                                    upcoming ();

                                }

                       }

            });

         return false;


   }

}

/* registration details */

function regdet(){
var emails = document.getElementById("semail").value;
var pass1 = document.getElementById("pass1").value;
var pass2 = document.getElementById("pass2").value;
var username = document.getElementById("username").value;
var firstname = document.getElementById("firstname").value;
var surname = document.getElementById("surname").value;
if(pass1.length<4 && pass1 !=''){

   $.afui.popup("Your password is too weak!");
    return false;
 }
 else if(pass1 !=pass2)  {

      var error1={ message:"Your passwords do not match",
                    position:"tc",
                    delay:2000,
                    autoClose:true,
                    type:"error",
      };
      $.afui.toast(error1);
 }

else {

    if(emails==''||pass1==''||pass2==''||username==''||firstname==''||surname==''){

          var error={ message:"All fields are required",
                        position:"tc",
                        delay:2000,
                        autoClose:true,
                        type:"error",
                     };

           $.afui.toast(error);
     }


    else{
        var  atpos = emails.indexOf("@");
       var dotpos = emails.lastIndexOf(".");
        if(atpos < 1 || ( dotpos - atpos < 2 )){
               var error2={ message:"Please enter correct email ID",
                    position:"tc",
                    delay:2000,
                    autoClose:true,
                    type:"error",
               };
               $.afui.toast(error2);
        }
        else{
         var details='firstname='+ firstname + '&surname='+ surname + '&username='+ username + '&email='+emails+'&password='+pass1+'&password2='+pass2;

        // AJAX code to submit form.
        $.ajax({
                type: "POST",
                url: "http://192.168.1.123:3000/register",
                data: details,
                cache: false,
                success: function(html) {
                     var num=html;

                        if( num !=="1"){
                            $.afui.loadContent("#landing",false,false,"fade");
                             upcoming ();
                            $.afui.toast("You have sign up Successfully");

                        } else{

                             $.afui.toast("Such username already exist! Please choose another name or sign in.");
                        }

                }
        });

         return false;
      }
    }

}
}
/*
opening sidebamenu
*/

function openNav() {
  document.getElementById("mySidenav").style.width = "60%";
}

function closeNav() {

 document.getElementById("mySidenav").style.width = "0";
}

    /*
    opening swahilibox box webpage function
    */
function openweb() {
"use strict";

try {

window.open('http://swahilibox.co.ke', '_blank', 'location=yes');

} catch (e) {

 $.afui.toast("failed to open webpage");
}


}
/*
opening facebook
*/
function browsefacebook() {
"use strict";

try {

   window.open('http://facebook.com/swahilibox/', '_blank', 'location=yes');

} catch (e) {

     $.afui.toast("Failed to open facebook");
  }


}
/*
opening twitter with a browser
*/
function browsetwitter() {
"use strict";

try {

   window.open('http://twitter.com/swahilibox', '_blank', 'location=yes');

} catch (e) {

     $.afui.toast("Failed to open twitter");
  }


}
/* opening email app of the device*/
function email_share(){

window.plugins.socialsharing.canShareViaEmail(function(){
    alert("Email client is configured");
}, function(){
    alert("Email client is not configured");
});

//Parameters:
//Body, Subject, Array of to address, Array of CC, Array of BCC, Array of attachments url(relative, File URL or file://), success callback, error callback
window.plugins.socialsharing.shareViaEmail('Email Body','Subject',['', ''],[''],null,['https://www.google.nl/images/srpr/logo4w.png'],function(result){
    alert('result: ' + result);
},function(result){
    alert('result: ' + result);
});
}

/* facebook authentication */
function facebook() {
var progress = document.getElementById("loader");
progress.innerHTML='<center><img src="images/loading.gif" style="height:120px;width:120px;border-radius:50%;"></center>';

$.ajax({
    dataType: "json",
    data: display,
    url: "http://192.168.1.138:3000/auth/facebook",
    cache: false,
    method: 'GET',
    success: function(rsp) {
               $.afui.loadContent("#landing",false,false,"fade");
                    progress.innerHTML='';
                    upcoming ();


                }

 });

}
function google(){
var auth = document.getElementById("data");
var progress = document.getElementById("loader");
progress.innerHTML='<center><img src="images/loading.gif" style="height:120px;width:120px;border-radius:50%;"></center>';

var display;
var index, len;

$.ajax({
    dataType: "json",
    data: display,
    url: "http://192.168.1.123:3000/auth/google",
    cache: false,
    method: 'GET',
    success: function(rsp) {
                $.afui.loadContent("#landing",false,false,"fade");
                    progress.innerHTML='';
                    upcoming ();

            }

 });
}
function social_share() {

//Parameters:
//Message, Subject, File Path(relative, File URL or file://), URL, success callback, fail callback
window.plugins.socialsharing.share("Swahilibox","Download Swahilibox app",null,"http:/om",function(result){
alert('result: ' + result);
}, function(result){
alert('error: ' + result);
});
}
/* exit from the app */
function exitFromApp(){
var exit=confirm("Are you sure you want to exit from this app?");
if (exit==true){
  navigator.app.exitApp();
}
else{
  $.afui.loadContent("#landing",false,false,"fade");
}

}
function onLoad() {

document.addEventListener("deviceready", onDeviceReady, false);
alert("Welcome francis");
$.afui.toast("Welcome francis");
}
function onDeviceReady(){
$.afui.toast("Welcome francis");
}
function forgetpassword(){
$.afui.loadContent("#forgetpass",false,false,"fade");
}
function forgetpass(){
var email=document.getElementById("forgotemail").value;
if(email ==''){
var passerror={ message:"Enter Email",
                    position:"tc",
                    delay:2000,
                    autoClose:true,
                    type:"error",
                };
      $.afui.toast(passerror);

}
}
