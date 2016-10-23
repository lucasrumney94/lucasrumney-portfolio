var bgs = {
	"game_dev" : [
		"https://img.itch.io/aW1hZ2UvNTE5ODUvMjMyNzA3LmdpZg==/315x250%23c/CakyAO.gif",
		"https://img.itch.io/aW1hZ2UvNDk3MjAvMjE4NDA4LmdpZg==/315x250%23c/p5GVJy.gif",
		"https://img.itch.io/aW1hZ2UvMzYwNDgvMTU2NzI5LnBuZw==/315x250%23c/gd1Ogt.png",
		"https://img.itch.io/aW1hZ2UvMjYxNDMvMTA1NDI3LmdpZg==/315x250%23c/lidcTS.gif",
		"https://img.itch.io/aW1hZ2UvMzI3NzMvMTQwMzI2LnBuZw==/315x250%23c/4Q%2F3Jj.png"
	]
};

//var curImage = 0;


var HTMLImage = "<img id="project" src="%data%">";

display1() = function(){
	bgs.game_dev.forEach(function(game){
	var formattedImage = HTMLImage.replace("%data%", game);
	$(#visual_bg).append(formattedImage);
	});
};

display() = function(){
	$(#visual_bg).append("<img id="project"  src="https://img.itch.io/aW1hZ2UvNTE5ODUvMjMyNzA3LmdpZg==/315x250%23c/CakyAO.gif">");
}


//$(".game_dev").addEventListener("click", display());