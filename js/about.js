function fourSeconds() {
	document.body.innerHTML = document.body.innerHTML
		.replace(/The/g, "Replaced")
		.replace(/the/g, "replaced");
}

setTimeout(fourSeconds, 4000);
