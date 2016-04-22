import messageBus from '../utils/message-bus';

const self = {
	_show: false,
	_isClosing: false,
	_content: null,

	isShowing() {
		return self._show;
	},

	isClosing() {
		return self._isClosing;
	},

	content() {
		return self._content;
	},

	close() {
		self._isClosing = true;
		messageBus.trigger('stateChanged');

		setTimeout(() => {
			self._show = false;
			messageBus.trigger('stateChanged');
		}, 500); // TODO: lame hack. what's a better way to know when the animation is completed?
	},

	show(content) {
		self._show = true;
		self._isClosing = false;
		self._content = content;
	},
};

export default self;
