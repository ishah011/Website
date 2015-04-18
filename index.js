var aboutBtn = document.getElementById("About");//gives each information element a variable//
var edBtn = document.getElementById("Education");
var expBtn = document.getElementById("Experience");
var cntBtn = document.getElementById("Contact");
var copy = document.getElementById("copyright");
$(aboutBtn).hide();//hiding all the elements on load//
$(edBtn).hide();
$(expBtn).hide();
$(cntBtn).hide();
function change1(){//hide all the elements except for the About, fade that in at medium speed and change the background image//
	$(aboutBtn).fadeIn("medium");
	$(edBtn).hide();
	$(expBtn).hide();
	$(cntBtn).hide();
	$(copy).hide();
	document.body.style.backgroundImage="url('images/Aboutbg.jpg')";
}
function change2(){//hide all the elements except for the Experience, fade that in at medium speed//
	$(aboutBtn).hide();
	$(edBtn).fadeIn("medium");
	$(expBtn).hide();
	$(cntBtn).hide();
	$(copy).hide();
	document.body.style.backgroundImage="url('images/Experiencebg.jpg')";
}
function change3(){//hide all the elements except for the Work, fade that in at medium speed//
	$(edBtn).hide();
	$(aboutBtn).hide();
	$(expBtn).fadeIn("medium");
	$(cntBtn).hide();
	$(copy).hide();
	document.body.style.backgroundImage="url('images/Workbg.jpg')";
}
function change4(){//hide all the elements except for the Contact, fade that in at medium speed//
	$(edBtn).hide();
	$(aboutBtn).hide();
	$(expBtn).hide();
	$(cntBtn).fadeIn("medium");
	$(copy).hide();
	document.body.style.backgroundImage="url('images/contactbg.jpg')";
}
function change5(){//hide all the elements and change the background image//
	$(edBtn).hide();
	$(aboutBtn).hide();
	$(expBtn).hide();
	$(cntBtn).hide();
	$(copy).show();
	document.body.style.backgroundImage="url('images/homebg.jpg')";
}
var about = document.getElementById("about-click");//create variable that is assigned to the about button on the nav bar//
about.addEventListener('click', function(event) {//attach the change1 function to the about button; excutes it when about is clicked//
		change1();
	}, false);
var education = document.getElementById("education-click");
education.addEventListener('click', function(event){
	change2();
}, false);
var experience = document.getElementById("experience-click");
experience.addEventListener('click', function(event) {
		change3();
	}, false);
var contact = document.getElementById("contact-click");
contact.addEventListener('click', function(event) {
		change4();
	}, false);
var home = document.getElementById("home-click");
home.addEventListener('click', function(event) {
		change5();
	}, false);