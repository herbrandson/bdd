import Button from '../controls/button';
import PlayIcon from '../icons/play';
import RecordIcon from '../icons/record';

export default () => (
	<div className='footer'>
		<Button><PlayIcon /></Button>
		<Button><RecordIcon /></Button>
	</div>
);
