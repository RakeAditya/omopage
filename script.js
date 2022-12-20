console.log('hello');
let count = 0;
let right = document.getElementById('rightslide');
right.addEventListener('click', () => {
	agesliderf();
});
let left = document.getElementById('leftslide');
left.addEventListener('click', () => {
	agesliderb();
});

let start = ['13 TO 14 YEARS', '21 TO 22 YEARS', '5 TO 7 YEARS'];

let mid = ['15 TO 16 YEARS', '23 TO 24 YEARS', '8 TO 10 YEARS'];

let end = ['17 TO 18 YEAS', '25 TO 26 YEARS', '11 TO 12 YEARS'];

function agesliderf() {
	document.querySelector('#age1').innerHTML = start[count];
	document.querySelector('#age2').innerHTML = mid[count];
	document.querySelector('#age3').innerHTML = end[count];

	if (count < start.length - 1) {
		count++;
	} else {
		count = 0;
	}
}
function agesliderb() {
	if (count > 0) {
		count--;
		document.querySelector('#age1').innerHTML = start[count];
		document.querySelector('#age2').innerHTML = mid[count];
		document.querySelector('#age3').innerHTML = end[count];
	} else {
		count = start.length - 1;
		document.querySelector('#age1').innerHTML = start[count];
		document.querySelector('#age2').innerHTML = mid[count];
		document.querySelector('#age3').innerHTML = end[count];
	}
}
