window.onload = function() {
	// basic paging logic to demo the buttons
	var pr = document.querySelector( '.paginate.left' );
	var pl = document.querySelector( '.paginate.right' );
	pr.onclick = slide.bind( this, -1 );
	pl.onclick = slide.bind( this, 1 );
	var index = 0, total = 5;

	//temp
	var placeholderText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."+
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
	
	placeholderText += placeholderText;
	var title = [
	"L U C A S  -  R U M N E Y",
	"Bio",
	"Hardware",
	"Game Dev",
	"Art",
	"Music",
	"Photography"
	];

	var content = [
	"<div class=\"content\"><img src=\"lucas.png\" alt=\"\" width=\"100%\"></div>",
	"<div class=\"content\"><p>bio</p>"+ placeholderText+ "</div>",
	"<div class=\"content\"><p>Hardware</p>"+ placeholderText+ "</div>",
	"<div class=\"content\"><p>game dev</p>"+ placeholderText+ "</div>",
	"<div class=\"content\"><p>arty</p>"+ placeholderText+ "</div>",
	"<div class=\"content\"><p>music</p>"+ placeholderText+ "</div>"
	];

	var bgColor = [
	"",
	"black",
	"#178E96",
	"#4F3A4B",
	"#CE7182"
	];


		if(index == 0) {
			$(".content").css("color", "none");
		}

	function slide(offset) {
	  index = Math.min( Math.max( index + offset, 0 ), total - 1 );
	  document.querySelector( '.counter' ).innerHTML = ( index + 1 ) + ' / ' + total;
	  document.querySelector("#name").innerHTML = title[index];
	  $("div.content").replaceWith(content[index]);
	  $("div.content").css("background-color", bgColor[index]);


	  pr.setAttribute( 'data-state', index === 0 ? 'disabled' : '' );
	  pl.setAttribute( 'data-state', index === total - 1 ? 'disabled' : '' );
	}
	slide(0);

}