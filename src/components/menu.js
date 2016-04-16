import Channel from './channel';
import channelRepository from '../repositories/channel-repository';

function _addChannel() {
	channelRepository.add({
		name: 'New Channel',
		volume: .8,
		pan: -1,
	});
}

export default () => (
	<div className='menu'>
		{channelRepository.get().map(x => (
			<Channel channel={x}/>
		))}
		<div className='channel'>
			<button className='button' onClick={_addChannel}>Add</button>
		</div>
	</div>
);
