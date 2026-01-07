export function BackTop(){
	const handleClick = () => {
		window.scrollTo({
			top: 0,
			behaviour: 'auto'
		});
	}
	const backTopButton = document.getElementById('backTop');
	if (!backTopButton) return;
	backTopButton.addEventListener('click', handleClick);
}


export function BackTopVisibility(){
	const backTopButton = document.getElementById('backTop');
	function checkScroll() {
		const triggerPoint = window.innerHeight;
		// console.log(`${window.scrollY} + ${triggerPoint}`)
		if (window.scrollY >= triggerPoint) {
			backTopButton.classList.add('visible');
			backTopButton.removeAttribute('tabindex', '-1');

		} else {
			backTopButton.classList.remove('visible');
			backTopButton.setAttribute('tabindex', '-1');
		}
	}
	window.addEventListener('scroll', checkScroll);
}