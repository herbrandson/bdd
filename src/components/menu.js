import Channel from './channel';
import channelRepository from '../repositories/channel-repository';

export default () => (
	<div className='menu'>
		{channelRepository.get().map(x => (
			<Channel channel={x}/>
		))}
	</div>
);
