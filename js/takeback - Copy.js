var showstates = "";
var bloomlga = "";
createCaptcha()
var code;
function createCaptcha() {
var ramno = Math.floor(Math.random() * 6) + 5; //random 5-10
    document.getElementById('recen').innerHTML = "";
    var charsArray =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$%^&*+=-";
    var lengthOtp = ramno;
    var captcha = [];
    for (var i = 0; i < lengthOtp; i++) {
    var index = Math.floor(Math.random() * charsArray.length + 1); 
    if (captcha.indexOf(charsArray[index]) == -1)
        captcha.push(charsArray[index]);
    else i--;
    }
    var canv = document.createElement("canvas");
    canv.id = "vimo";
    canv.width = 250;
    canv.height = 50;
    var ctx = canv.getContext("2d");
    ctx.font = "35px Georgia";
    ctx.strokeText(captcha.join(""), 0, 30);
    code = captcha.join("");
    document.getElementById("recen").appendChild(canv); 
}

document.getElementById("dbtt").addEventListener("click", function() { 
    createCaptcha();
});

document.getElementById("geges").addEventListener("click", function() { 
    mrinfm();
});
document.getElementById("stateofresidents").addEventListener("change", function() { 
    var stateofresidents  = document.getElementById("stateofresidents").value;
    molga(stateofresidents);
});
function molga(params) {
    document.getElementById("lgaofresidents").innerHTML = `<option value="">Acquiring.....</option>`;
    let siinv = "ka4902nd2309nd";
    let miranc = params;
    $.ajax({
		type: "POST",
		url: "./tbn/", 
		dataType: "json",
		data: {siinv: siinv, miranc: miranc},
		success: function(lgaresponds){
			bloomlga = lgaresponds;
            optionoflaga();
		},error : function(jqXHR, textStatus, errorThrown) {
            let useronline = seeonline();
            if (useronline == 0) {
                alert("Ooops! It seems your network is slow or disconnected")
            }else{
                alert("Ooops! This is not your fault. Try Again...");
            }
        }	 
	});
}
function optionoflaga(params) {
    let TEXTI = '<option value="">Select LGA of Residence</option>';
    for (let i = 0; i < bloomlga.length; i++) {
        TEXTI += `<option value="${bloomlga[i].ld}"> ${bloomlga[i].lglga}</option>`;
    }
    document.getElementById("lgaofresidents").innerHTML = TEXTI;
}
/*states();
function states() {
    let ofar = "js343jljsn32334";
    $.ajax({
		type: "POST",
		url: "./tbn/", 
		dataType: "json",
		data: {ofar: ofar},
		success: function(statesresponds){
			showstates = statesresponds;
            optionsstates();
		
		},error : function(jqXHR, textStatus, errorThrown) {
            let useronline = seeonline();
            if (useronline == 0) {
                alert("Ooops! It seems your network is slow or disconnected")
            }else{
                alert("Ooops! This is not your fault. Try Again...");
            }
        }	 
	});
}
function optionsstates() {
    let TEXTI = '<option value=""> Select Residential State</option>';
    for (let i = 0; i < showstates.length; i++) {
        TEXTI += `<option value="${showstates[i].sd}"> ${showstates[i].sstate}</option>`;
        //const element = showstates[i];
    }
    document.getElementById("stateofresidents").innerHTML = TEXTI;
}*/

function mrinfm() {
    var fullname  = document.getElementById("fullname").value;	
    var stateofresidents  = document.getElementById("stateofresidents").value;	
    var lgaofresidents  = document.getElementById("lgaofresidents").value;	
    var residentialaddress  = document.getElementById("residentialaddress").value;	
    var mobilenumber  = document.getElementById("mobilenumber").value;	
    var email  = document.getElementById("email").value;	
    var availability  = document.getElementById("availability").value;	
    var skillexperience  = document.getElementById("skillexperience").value;	
    var caca  = document.getElementById("caca").value;
  var fullname_err = stateofresidents_err = lgaofresidents_err = residentialaddress_err = mobilenumber_err = email_err = availability_err = skillexperience_err = caca_err = true; 
  
    var erMesg = '';
  
      // Validate fullname
      if(myTrim(fullname) == "") {
       erMesg += `<i class="bi bi-asterisk"></i> Enter Your Full Name <br>`;
  } else {
      // Check if its lesser than 0
      if(myTrim(fullname).length < 0) {
          erMesg += `<i class="bi bi-asterisk"></i> Enter Your Full Name <br>`;
      } else{
          fullname_err = false;
      }
  }
      // Validate stateofresidents
      if(myTrim(stateofresidents) == "") {
      erMesg += `<i class="bi bi-asterisk"></i> Select Your State Of Residence <br>`;
  } else {
      // Check if its lesser than 0
      if(myTrim(stateofresidents).length < 0) {
          erMesg += `<i class="bi bi-asterisk"></i> Select Your State Of Residence <br>`;
      } else{
          stateofresidents_err = false;
      }
  }
      // Validate lgaofresidents
      if(myTrim(lgaofresidents) == "") {
      erMesg += `<i class="bi bi-asterisk"></i> Select Your Local Government Of Residence <br>`;
  } else {
      // Check if its lesser than 0
      if(myTrim(lgaofresidents).length < 0) {
          erMesg += `<i class="bi bi-asterisk"></i> Select Your Local Government Of Residence <br>`;
      } else{
          lgaofresidents_err = false;
      }
  }
      // Validate residentialaddress
      if(myTrim(residentialaddress) == "") {
      erMesg += `<i class="bi bi-asterisk"></i> Enter Your Residential Address <br>`;
  } else {
      // Check if its lesser than 0
      if(myTrim(residentialaddress).length < 0) {
          erMesg += `<i class="bi bi-asterisk"></i> Enter Your Residential Address <br>`;
      } else{
          residentialaddress_err = false;
      }
  }
      // Validate mobilenumber
  if(myTrim(mobilenumber) == "") {
      erMesg += `<i class="bi bi-asterisk"></i> Enter Your Mobile Number <br>`;
  } else {
      if(myTrim(mobilenumber).length !== 11){
          erMesg += `<i class="bi bi-asterisk"></i> Enter a Valid Mobile Number <br>`;
      } else{
          mobilenumber_err = false;
      }
  }
      // Validate email
      if(myTrim(email) == "") {
      erMesg += `<i class="bi bi-asterisk"></i> Enter a Valid Your Email Address <br>`;
  } else {
      // Check if its lesser than 0
      if(myTrim(email).length < 0) {
          erMesg += `<i class="bi bi-asterisk"></i> Enter a Valid Email Address <br>`;
      } else{
          email_err = false;
      }
  }
      // Validate availability
      if(myTrim(availability) == "") {
      erMesg += `<i class="bi bi-asterisk"></i> Enter When You Are Always Available <br>`;
  } else {
      // Check if its lesser than 0
      if(myTrim(availability).length < 0) {
          erMesg += `<i class="bi bi-asterisk"></i> Enter When You Are Always Available <br>`;
      } else{
          availability_err = false;
      }
  }
      // Validate skillexperience
      if(myTrim(skillexperience) == "") {
      erMesg += `<i class="bi bi-asterisk"></i> Enter Your Skill Experience <br>`;
  } else {
      // Check if its lesser than 0
      if(myTrim(skillexperience).length < 0) {
          erMesg += `<i class="bi bi-asterisk"></i> Enter Your Skill Experience <br>`;
      } else{
          skillexperience_err = false;
      }
  }
      // Validate caca
      if(myTrim(caca) == "") {
      erMesg += `<i class="bi bi-asterisk"></i> You Entered the Wrong Captcha Characters <br>`;
  } else {
      // Check if its lesser than 0
      if(myTrim(caca).length < 0) {
          erMesg += `<i class="bi bi-asterisk"></i> You Entered the Wrong Captcha Characters <br>`;
      } else{
        if (myTrim(caca) == code) {
          caca_err = false;
        }else{
            createCaptcha();
            erMesg += `<i class="bi bi-asterisk"></i> You Entered the Wrong Captcha Characters <br>`;
        }
      }
  } 
      // Prevent the form from being submitted if there are any errors
  if ((fullname_err || stateofresidents_err || lgaofresidents_err || residentialaddress_err || mobilenumber_err || email_err || availability_err || skillexperience_err || caca_err) == true) {
     //console.log(code)
     mrinfmer(erMesg);
     return false; 
  } else {
    mrinfmsol();
  }  
  }

function mrinfmer(params) {  
    document.getElementById("flomscs").style.display = "none";
    var fullname  = document.getElementById("fullname").value;	
    var stateofresidents  = document.getElementById("stateofresidents").value;	
    var lgaofresidents  = document.getElementById("lgaofresidents").value;	
    var residentialaddress  = document.getElementById("residentialaddress").value;	
    var mobilenumber  = document.getElementById("mobilenumber").value;	
    var email  = document.getElementById("email").value;	
    var availability  = document.getElementById("availability").value;	
    var skillexperience  = document.getElementById("skillexperience").value;	
    var caca  = document.getElementById("caca").value;

    if(myTrim(fullname).length > 0 && myTrim(stateofresidents).length > 0 && myTrim(residentialaddress).length > 0 && myTrim(mobilenumber).length > 0 && myTrim(email).length > 1 && myTrim(availability).length > 0 && myTrim(skillexperience).length > 0 && myTrim(caca).length > 0){
        document.getElementById("flomsvs").style.display = "block";
        document.getElementById("flomsvs").innerHTML = params;
    }
}

function mrinfmsol() {
    document.getElementById("flomsvs").style.display = "none";
    document.getElementById("gegel").style.display = "block";
    

    // setTimeout(() => {
    //     document.getElementById("gegel").style.display = "none";
    //     document.getElementById("flomscs").style.display = "block";
    // }, 5000); 

    
    var fullname  = document.getElementById("fullname").value;	
    var stateofresidents  = document.getElementById("stateofresidents").value;	
    var lgaofresidents  = document.getElementById("lgaofresidents").value;	
    var residentialaddress  = document.getElementById("residentialaddress").value;	
    var mobilenumber  = document.getElementById("mobilenumber").value;	
    var email  = document.getElementById("email").value;	
    var availability  = document.getElementById("availability").value;	
    var skillexperience  = document.getElementById("skillexperience").value;
    $.ajax({
		type: "POST",
		url: "./tbn/", 
		dataType: "json",
		data: {fullname: fullname, stateofresidents: stateofresidents, lgaofresidents: lgaofresidents, residentialaddress: residentialaddress, mobilenumber: mobilenumber, email: email, availability: availability, skillexperience: skillexperience },
		success: function(data){
			$("#rufusLohn").html(data);
			
		var slf = data;
		if(slf.effor == "none"){
			document.getElementById("gegel").style.display = "none";
            document.getElementById("flomscs").style.display = "block"; 
            
            setTimeout(() => {
                location.reload();
            }, 15000); 

            location.reload();
        }else{
			document.getElementById("gegel").style.display = "none";
            document.getElementById("flomscs").style.display = "none";
            document.getElementById("flomsvs").style.display = "block";
            document.getElementById("flomsvs").innerHTML = slf.sto;
        }
		
		},error : function(jqXHR, textStatus, errorThrown) {
            let useronline = seeonline();
            if (useronline == 0) {
                alert("Ooops! It seems your network is slow or disconnected")
            }else{
                alert("Ooops! This is not your fault. Try Again...");
            }
        }
		 
	});
    
}

function myTrim(x) {
return x.replace(/^\s+|\s+$/gm,'');
}
String.prototype.nl2br = function(){
    return this.replace(/\n/g, "<br />");
}
function seeonline() {
	if (navigator.onLine) {
		return 1;
	}else{
		return 0;
	}
}