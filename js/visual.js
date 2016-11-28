var bgs = {
	"game_dev" : [
		"https://img.itch.io/aW1hZ2UvNTE5ODUvMjMyNzA3LmdpZg==/315x250%23c/CakyAO.gif",
		"https://img.itch.io/aW1hZ2UvNDk3MjAvMjE4NDA4LmdpZg==/315x250%23c/p5GVJy.gif",
		"https://img.itch.io/aW1hZ2UvMzYwNDgvMTU2NzI5LnBuZw==/315x250%23c/gd1Ogt.png",
		"https://img.itch.io/aW1hZ2UvMjYxNDMvMTA1NDI3LmdpZg==/315x250%23c/lidcTS.gif",
		"https://img.itch.io/aW1hZ2UvMzI3NzMvMTQwMzI2LnBuZw==/315x250%23c/4Q%2F3Jj.png"
	]
};


// Below is Xueer's solution:
var data = "%data%"

var HTMLImage = '<img id="project" src="%data%">';
var curImages = bgs["game_dev"];
var curImage = 1;



$("#visual_bg").append(HTMLImage.replace(data, curImages[0]));

function display_game(i) {
	var formattedImage = HTMLImage.replace(data, curImages[i]);
	$("#visual_bg").append(formattedImage);
}

function remove_game(i) {
  $("#project").remove();
}



$(document).ready(function() {
  $("#game_dev").click(function() {
    remove_game(curImage-1);
    display_game(curImage);
    curImage++;
    console.log(curImage);
  });
});

//$("#game_dev").click(function(loc) { alert("clicked!");});



/*
// Below is a solution borrowed from Kevinmlee Github
var curImages = bgs["game_dev"];
var curImage = 0;
var intervalID;
var TRANSTIME = 1200 + 100;
var state = 'still';
// false for no key pressed during trans, 1 for next, -1 for prev
var keyWasPressed = false;
var changeWasRequested = false;



function stateChange(action, dist) {
  if (state === 'still') {
    if (action === 'key' || action === 'change') {
      // reset fade timing
      clearInterval(intervalID);
      intervalID = setInterval(timeNext, 6000);
    }
    state = 'trans';
    setTimeout(_=>{ stateChange('time') }, TRANSTIME);
    changeBG(mod(curImage + (dist || 1), curImages.length));
  } else if (state === 'trans') {
    if (action === 'time') {
      if (keyWasPressed) {
        clearInterval(intervalID);
        intervalID = setInterval(timeNext, 6000);
        state = 'trans';
        setTimeout(_=>{ stateChange('time') }, TRANSTIME);
        changeBG(mod(curImage + keyWasPressed, curImages.length));
        keyWasPressed = false;
      } else if (changeWasRequested) {
        clearInterval(intervalID);
        intervalID = setInterval(timeNext, 6000);
        state = 'trans';
        setTimeout(_=>{ stateChange('time') }, TRANSTIME);
        changeBG(mod(curImage + 1, curImages.length));
        changeWasRequested = false;
      } else {
        state = 'still';
      }
    } else if (action === 'key') {
      keyWasPressed = dist || 1;
    } else if (action === 'change') {
      changeWasRequested = true;
    }
  }
}

function changeBG(i) {
  $('#visual_bg').css('background-image', `url(${curImages[i]})`);
  curImage = i;
}

function mod(n,m) {
  return ((n%m)+m)%m;
}

function timeNext() {
  stateChange('time');
}
function keyNext() {
  stateChange('key');
}
function keyPrev() {
  // jank, i should encapsulate in action obj
  stateChange('key', -1);
}
function clickNext() {
  keyNext();
}
function clickPrev() {
  keyPrev();
}

function activate() {
  // sigh. just in case you mash the visual link
  clearInterval(intervalID);
  intervalID = setInterval(timeNext, 6000);
  $(document).keydown(keyHandler);
}
function deactivate() {
  clearInterval(intervalID);
  $(document).unbind('keydown', keyHandler);
}

function keyHandler(e) {
  switch(e.which) {
    case 37: // left
      keyPrev();
      break;
    case 39: // right
      keyNext();
      break;
    default: return;
  }
  e.preventDefault();
}

function preloadImage(url)
{
  (new Image()).src = url;
}

$(document).ready(_ => {
  $('#visual_content a').click(function() {
    if (bgs[$(this).text()] == curImages) {
      clickNext();
      return;
    }
    curImages = bgs[$(this).text()] || bgs['photography'];
    curImage = -1;
    $('#visual_content a').removeClass('active');
    $(this).addClass('active');
    stateChange('change');
  });

  $('#visual_content a.active::before').click(_ => {
    // this doesn't work I think
    clickPrev();
  });

  for (var key in bgs) {
    for (var url of bgs[key]) {
      preloadImage(url);
    }
  }
});

module.exports('visual', {
  activate,
  deactivate,
});
*/


