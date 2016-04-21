import Shell from './components/shell';
import messageBus from './utils/message-bus';

const target = document.getElementById('main');

messageBus.on('stateChanged', () => {
	ReactDOM.render(<Shell />, target);
});

messageBus.trigger('stateChanged');
