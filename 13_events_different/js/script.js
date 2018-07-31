// Сначала необходимо дождаться загрузки старницы:
window.addEventListener('load', function(){
	const button = document.querySelector('.button');
	const ball = document.querySelector('.ball');
	let moveBall = 'paused';
	const par = document.querySelector('.show p');

	button.addEventListener('click', () => {
		if (moveBall == 'paused'){
			ball.style.animationPlayState = 'running';
			moveBall = 'running';
		} else {
			ball.style.animationPlayState = 'paused';
			moveBall = 'paused';
		}
		
	})

	window.onscroll = () => {
		console.log('works'); //отображается олько при скролле
		if(window.scrollY >= 1000) {
			par.style.opacity = 1;
		} else {
			par.style.opacity = 0.5;
		}
	}
})