function load_project(name, link) {
	var project = $("<div>").addClass("col-md-6");
	var src = "assets/images/" + name + ".png";
	var img = $("<img>").addClass("card-img").attr("src", src);
	var project_name = $("<div>").text(name);
	project_name.addClass("w-100 text-center position-relative project");
	var a = $("<a>").addClass("text-decoration-none");
	a.attr("href", link).append(img, project_name);
	project.append(a);
	$(".card-body").append(project);
}

load_project("Portfolio", "index.html");
load_project("Giftastic", "https://defarmet.github.io/Giftastic/");
load_project("RPS-Multiplayer", "https://defarmet.github.io/RPS-Multiplayer/");
