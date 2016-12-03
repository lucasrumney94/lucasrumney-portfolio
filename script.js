window.onload = function() {
	// basic paging logic to demo the buttons
	var pr = document.querySelector( '.paginate.left' );
	var pl = document.querySelector( '.paginate.right' );
	pr.onclick = slide.bind( this, -1 );
	pl.onclick = slide.bind( this, 1 );
	var index = 0, total = 5;

	//placeHolder Demonstration
	var placeholderText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."+
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
	placeholderText += placeholderText;
	//END

	//TODO: you write html custom content here. REMEMBER to escape html ""
	var bioHTML = "<p>for example, this is a bio p tag html</p><br><br><img alt=\"example image\">";
	var hardwareHTML = "";
	var gameHTML = "";
	var artHTML = "";
	var musicHTML= "";
	//TODO-END

	
	//TODO: change title between strong tag to your title name
	var content = [
	"<div class=\"content\"><img src=\"lucas.png\" alt=\"\" width=\"100%\"></div>",
	"<div class=\"content\"><strong>title</strong><br>"+ bioHTML+ "</div>",
	"<div class=\"content\"><strong>title</strong><br>"+ hardwareHTML+ "</div>",
	"<div class=\"content\"><strong>title</strong><br>"+ gameHTML+ "</div>",
	"<div class=\"content\"><strong>title</strong><br>"+ artHTML+ "</div>",
	"<div class=\"content\"><strong>title</strong><br>"+ musicHTML+ "</div>"
	];

	var title = [
	"L U C A S  -  R U M N E Y",
	"Bio",
	"Hardware",
	"Game Dev",
	"Art",
	"Music",
	"Photography"
	];

	var bgColor = [
	"",
	"black",
	"#0D5054",
	"#4F3A4B",
	"#573037"
	];


		if(index == 0) {
			$(".content").css("color", "none");
		}

	function slide(offset) {
	  index = Math.min( Math.max( index + offset, 0 ), total - 1 );
	  //document.querySelector( '.counter' ).innerHTML = ( index + 1 ) + ' / ' + total;
	  document.querySelector("#name").innerHTML = title[index];
	  $("div.content").replaceWith(content[index]);
	  $("div.content").css("background-color", bgColor[index]);


	  pr.setAttribute( 'data-state', index === 0 ? 'disabled' : '' );
	  pl.setAttribute( 'data-state', index === total - 1 ? 'disabled' : '' );
	}
	slide(0);

}