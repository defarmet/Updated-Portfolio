function load_project(name, link, src) {
	var project = $("<div>").addClass("col-md-6");
	project.append($("<img>").addClass("card-img").attr("src", src));
	var project_name = $("<div>").addClass("project_name");
	var a = $("<a>").addClass("text-reset text-decoration-none");
	a.attr("href", link).text(name);
	project_name.append(a);
	project.append(project_name);
	$(".card-body").append(project);
}

load_project("Portfolio", "index.html", "assets/images/Portfolio.png");
