function should_bind(e) {
	return e.target.nodeName == "DIV" && !!e.target.firstChild;
}

// handle the mousemove event, 
function handle_move(e, preview_images) {
	var show_index = parseInt((e.offsetX / e.target.offsetWidth) * preview_images.length, 10);
	var preview_image = preview_images[show_index];

	// swap the preview image if necessary
	if (e.target.src != preview_image) {
		e.target.src = preview_image;
	}
}

// unbind mousemove listener, and clean up
function handle_exit(e) {
	e.target.removeEventListener('mousemove', handle_move, false);
}

function parse_preview_images(e) {
	var gallery_data = e.target.parentElement.getElementsByClassName('gallery_data')[0].innerText;
	var num_pics = parseInt(gallery_data.split("pics")[0], 10);
	var url = e.target.firstChild.getAttribute("href").trim();
	var gallery_prefix = url.substr(0,url.length-5).substr(6);

	// fix edge case where the gallery prefix ends in "index"
	if (gallery_prefix.substr(gallery_prefix.length-5) == "index") {
		gallery_prefix = gallery_prefix.substr(0,gallery_prefix.length-5) + "image";
	}
	
	var preview_images = [];
	var urlbase = "http://fuskator.com/small/" + gallery_prefix + "-";
	for (var i = 1; i <= num_pics; i++) {
		preview_images.push(urlbase + String(i) + ".jpg");
	};
	return preview_images;
}


// handle the mouse enter event
//   - decide if should ignore
//   - fetch URLs of all images in the gallery
//   - bind mousemove and mouseleave events
function handle_enter(e) {
	if (!should_bind(e)) { return false; }

	var photo_urls = parse_preview_images(e);

	// pass in the newly parsed photo url array
	e.target.addEventListener('mousemove', function(e) {
		handle_move(e, photo_urls)
	}, false);
	e.target.addEventListener('mouseleave', handle_exit, false);
}

// bind mouse enter events
function bind_events () {
	console.log("Binding mouse hover events.");
	var els = document.getElementsByClassName("pic_pad");
	for (var i = 0; i < els.length; i++) {
	    els[i].addEventListener('mouseenter', handle_enter, false);
	}
}

bind_events();