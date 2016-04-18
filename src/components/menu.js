import Channel from './channel';
import channelRepository from '../repositories/channel-repository';

export const render = (channels) => (
	<div className='menu'>
		{channels.map(x => (
			<Channel key={x.id} channel={x}/>
		))}

		<div className='channel'>
			<button className='button' onClick={channelRepository.add}>Add</button>
		</div>
	</div>
);

export default () => render(channelRepository.get());
