import messageBus from '../utils/message-bus';

const DATA = [{
	id: 1,
	name: 'Channel 1',
	volume: 0.1,
	pan: -0.1,
},{
	id: 2,
	name: 'Channel 2',
	volume: 0.2,
	pan: -0.2,
},{
	id: 3,
	name: 'Channel 3',
	volume: 0.3,
	pan: -0.3,
},{
	id: 4,
	name: 'Channel 4',
	volume: 0.4,
	pan: -0.4,
},{
	id: 5,
	name: 'Channel 5',
	volume: 0.5,
	pan: -0.5,
},{
	id: 6,
	name: 'Channel 6',
	volume: 0.6,
	pan: -0.6,
},{
	id: 7,
	name: 'Channel 7',
	volume: 0.7,
	pan: -0.7,
}];

export default {
	get() {
		return DATA;
	},

	add() {
		// TODO: do some actual saving here
		DATA.push({
			id: Date.now(),
			name: 'New Channel',
			volume: .8,
			pan: -1,
		});

		messageBus.trigger('stateChanged');
	},

	save(/*model*/) {
		// TODO: do some actual saving here
		messageBus.trigger('stateChanged');
	},

	delete(model) {
		// TODO: do some actual saving here
		_.remove(DATA, model);
		messageBus.trigger('stateChanged');
	},
};
