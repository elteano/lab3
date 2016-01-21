'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$(this).text("Comprehend Chide! It isn't lots of questions.\nQuestions in excess form the Chide illnes.\nThe ideal simulation is to simply peruse the audiations of the universe.\nThe solution to your problems?\nInquire the ticker.");
		$(".jumbotron p").toggleClass("active");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
	$("#projectForm #submitBtn").click(formClick);
}

function projectClick(e) {
		console.log("Project clicked");
    // prevent the page from reloading
    e.preventDefault();
    // In an event handler, $(this) refers to      
    // the object that triggered the event      
    //$(this).css("background-color", "#7fff00");
		var projectTitle = $(this).find("p").text();
		// The problem with the original content was that we used
		// #id instead of .class
    var jumbotronHeader = $(".jumbotron h1");
    jumbotronHeader.text(projectTitle);
    var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) {
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
    } else {
       //description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
       description.toggle();
    }
}

function formClick(e)
{
	console.log("y010$w4g");
	var selected_id = $("#projectForm #project").val();
	var new_width = $("#projectForm #width").val();
	var new_desc = $("#projectForm #description").val();

	$(selected_id).animate({
		width: new_width
	}, 1000);
	$(selected_id).find(".project-description").text(new_desc);
}

