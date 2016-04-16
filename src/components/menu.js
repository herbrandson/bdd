import Channel from './channel';
import channelRepository from '../repositories/channel-repository';

export default () => (
	<div className='menu'>
		{channelRepository.get().map(x => (
			<Channel key={x.id} channel={x}/>
		))}

		<div className='channel'>
			<button className='button' onClick={channelRepository.add}>Add</button>
		</div>
	</div>
);
