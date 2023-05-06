$(document).ready(function() {
	let text = "./berna.sh";
	let i = 0;

	$(".container").hide();
	$(".term").text("$ ");

	let interval = setInterval(function () {
		if (i == text.length) {
			clearInterval(interval);
			let fadeOutDuration = Math.min(Math.max(text.length * 50, 500), 3000);
			let fadeInDuration = Math.min(Math.max(text.length * 100, 1200), 5000);
			$(".term").fadeOut(fadeOutDuration, function() {
				$(".container").fadeIn(fadeInDuration);
			});
			return;
		}
		$(".term").text($(".term").text() + text.charAt(i));
		i++;
	}, 300);
});
