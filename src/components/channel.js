import HandleIcon from '../icons/handel';
import Slider from '../controls/slider';
import channelRepository from '../repositories/channel-repository';

export default ({channel}) => {
	function _update(name, value) {
		channel[name] = value;
		channelRepository.save(channel);
	}

	function _delete(channel) {
		channelRepository.delete(channel);
	}

	return (
		<div className='channel'>
			<div className='channel__handle' onClick={() => _delete(channel)}>
				<HandleIcon />
			</div>
			<input type='text' className='channel__name' value={channel.name} onChange={e => _update('name', e.target.value)} />
			<div className='channel__controls'>
				<Slider value={channel.volume} type='volume' onChange={x => _update('volume', x)} />
				<Slider value={channel.pan} type='pan' min={-1} onChange={x => _update('pan', x)} />
			</div>
		</div>
	);
};
