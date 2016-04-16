const _map = {};

function _callbacks(name) {
	// make sure there's an array for this name then return it
	return (_map[name] = _map[name] || []);
}

export default {
	on(name, callback) {
		_callbacks(name).push(callback);
	},

	off(name, callback) {
		const callbacks = _callbacks(name);
		_.remove(callbacks, callback);
	},

	trigger(name, ...args) {
		_callbacks(name).forEach(x => x(...args));
	},
};
