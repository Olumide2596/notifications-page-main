'use strict';

const notifications = document.querySelectorAll('.notification');
const mark = document.querySelector('.mark');
const count = document.querySelector('.count');

const alert = function () {
	notifications.forEach(n => {
		if (n.classList.contains('read')) {
			n.querySelector('.alert').classList.add('hide');
		}
	});
};

const counter = function () {
	const c = notifications.length - document.querySelectorAll('.read').length;
	console.log(c);
	count.textContent = c;
};
counter();
notifications.forEach(n =>
	n.addEventListener('click', function () {
		if (!n.classList.contains('read')) {
			n.classList.add('read');
		}
		counter();
		alert();
	})
);

mark.addEventListener('click', function () {
	notifications.forEach(n => n.classList.add('read'));
	counter();
	alert();
});
