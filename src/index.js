import Shell from './components/shell';
import messageBus from './utils/message-bus';
import log from './utils/log';

messageBus.on('stateChanged', () => {
	log('rendering');

	ReactDOM.render(
		<Shell />,
		document.getElementById('main')
	);
});

messageBus.trigger('stateChanged');
