let mybutton = document.querySelector(".header")
const mybuttonAnim = new KeyframeEffect(
	mybutton, 
	[
		{ opacity: 0 },
		{ opacity: 1 }
	], { duration: 2000, fill: 'forwards' }
);

setTimeout(function() {
	const mybuttonAnimation = new Animation(mybuttonAnim, document.timeline);
	mybuttonAnimation.play();
}, "1000");