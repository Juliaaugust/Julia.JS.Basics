window.addEventListener('load', function() {
	const requestButton = document.querySelector('.request');
	const popup = document.querySelector('.popup');
	const closePop = document.querySelector('.closePopup');
	const openMenu = document.querySelector('.openMenu');
	const menu = document.querySelector('.menu');
	const closeMenu = document.querySelector('.closeMenu');


	requestButton.onclick = function() {
		popup.style.display = 'flex';
	}
	closePop.onclick = function() {
		popup.style.display = 'none';
	}
	openMenu.onclick = function() {
		menu.style.left = 0;
	}
	closeMenu.onclick = function() {
		menu.style.left = '-50vw';
	}

})