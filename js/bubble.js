var currentBackground = 1;
function fadeBackground() {
	if (backgrounds.length > 1) {
		var actualBackground = backgrounds[currentBackground];
		
		function loadBackground() {
			if (currentBackground > backgrounds.length) {
				currentBackground = 1;
			}
			$("body").css("backgroundImage", "url(backgrounds/" + backgrounds[currentBackground - 1] + ")");
			$("#background").fadeOut(2000, function() {
				$("#background").css("backgroundImage", "url(backgrounds/" + actualBackground + ")");
				$("#background").fadeIn(2000);
				currentBackground++;
			});
		}
	}
	loadBackground();
}

function centerText(text) {
	var width = $(text).width();
	$(text).css("marginLeft", -(width / 2));
}

function centerMiddle(text) {
	var width = $(text).width();
	var height = $(text).height();
	$(text).css("marginLeft", -(width / 2));
	$(text).css("marginTop", -(height / 2));
}

function centerTop(text) {
	var height = $(text).height();
	$(text).css("marginTop", -(height / 2));
}

function setServerRules() {
	$("#rule1").html(serverRules[0]);
	$("#rule2").html(serverRules[1]);
	$("#rule3").html(serverRules[2]);
	$("#rule4").html(serverRules[3]);
	$("#rule5").html(serverRules[4]);
}

function dimensionRules() {
	var ruleHeight = $("#ruleList").height();
	$("#rules").css("height", ruleHeight + 50);
}

function setServerName(servername) {
	$("#title").html(servername);
}

$(this).ready(function() {
	if(useMusic && musicPlaylist.length > 0) {
		currentSong = -1;
		function loadSong() {
			currentSong += 1;
			if (currentSong > musicPlaylist.length) {
				currentSong = 0;
			}
			song = musicPlaylist[currentSong];
			$("#trackName").html(song.name);
			$("#artist").html(song.author);
			$("body").append('<audio src="audio/' + song.file + '" autoplay>');
			$("audio").prop('volume', 50/100);
			$("audio").bind("ended", function() {
				$(this).remove();
				loadSong();
			})
		}
		loadSong();
	}
	else
		$("#music").html("");
	
	if(displayName && serverName != "") {
		setServerName(serverName);
	}
	
	centerText("#title");
	centerText("#subtitle");
	centerMiddle("#avatar");
	centerMiddle("#plyavatar");
	centerMiddle("#plyname");
	centerMiddle("#rules");
	centerMiddle("#rulesTitle");
	centerTop("#ruleList");
	setInterval(fadeBackground, 20000);
})