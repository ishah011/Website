var aboutBtn = document.getElementById("About");//gives each information element a variable//
var expBtn = document.getElementById("Experience");
var wrkBtn = document.getElementById("Work");
var cntBtn = document.getElementById("Contact");
var copy = document.getElementById("copyright");
$(aboutBtn).hide();//hiding all the elements on load//
$(expBtn).hide();
$(wrkBtn).hide();
$(cntBtn).hide();
function change1(){//hide all the elements except for the About, fade that in at medium speed and change the background image//
	$(aboutBtn).fadeIn("medium");
	$(expBtn).hide();
	$(wrkBtn).hide();
	$(cntBtn).hide();
	$(copy).hide();
	document.body.style.backgroundImage="url('https://raw.githubusercontent.com/ishah011/Website/gh-pages/images/Aboutbg.jpg')";
}
function change2(){//hide all the elements except for the Experience, fade that in at medium speed//
	$(aboutBtn).hide();
	$(expBtn).fadeIn("medium");
	$(wrkBtn).hide();
	$(cntBtn).hide();
	$(copy).hide();
	document.body.style.backgroundImage="url('https://raw.githubusercontent.com/ishah011/Website/gh-pages/images/Experiencebg.jpg')";
}
function change3(){//hide all the elements except for the Work, fade that in at medium speed//
	$(expBtn).hide();
	$(aboutBtn).hide();
	$(wrkBtn).fadeIn("medium");
	$(cntBtn).hide();
	$(copy).hide();
}
function change4(){//hide all the elements except for the Contact, fade that in at medium speed//
	$(expBtn).hide();
	$(aboutBtn).hide();
	$(wrkBtn).hide();
	$(cntBtn).fadeIn("medium");
	$(copy).hide();
}
function change5(){//hide all the elements and change the background image//
	$(expBtn).hide();
	$(aboutBtn).hide();
	$(wrkBtn).hide();
	$(cntBtn).hide();
	$(copy).show();
	document.body.style.backgroundImage="url('https://raw.githubusercontent.com/ishah011/Website/gh-pages/images/homebg.jpg')";
}
var about = document.getElementById("about-click");//create variable that is assigned to the about button on the nav bar//
about.addEventListener('click', function(event) {//attach the change1 function to the about button; excutes it when about is clicked//
		change1();
	}, false);
var experience = document.getElementById("experience-click");
experience.addEventListener('click', function(event){
	change2();
}, false);
var work = document.getElementById("work-click");
work.addEventListener('click', function(event) {
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
