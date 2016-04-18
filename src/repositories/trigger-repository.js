import messageBus from '../utils/message-bus';

let DATA = [];
let id = 0;

// TODO: temp hack for testing
function random(min, max) {
	return Math.random() * (max - min) + min;
}

setInterval(() => {
	DATA.push({
		id: id++,
		x: random(-1, 1),
		y: random(-1, 1),
		force: random(0.1, 1),
		offset: random(-1, 1),
	});

	while (DATA.length > 10) {
		DATA.shift();
	}

	messageBus.trigger('stateChanged');
}, 500);

export default {
	get() {
		return DATA;
	},
};
