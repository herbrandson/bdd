import Slider from './slider';
import channelRepository from '../repositories/channel-repository';

function _changeName(e, channel) {
	channel.name = e.target.value;
	channelRepository.save(channel);
}

function _changeVolume(value, channel) {
	channel.volume = value;
	channelRepository.save(channel);
}

function _changePan(value, channel) {
	channel.pan = value;
	channelRepository.save(channel);
}

function _delete(channel) {
	channelRepository.delete(channel);
}

export default ({channel}) => (
	<div className='channel'>
		<div className='channel__handle' onClick={() => _delete(channel)}>x</div>
		<input type='text' className='channel__name' value={channel.name} onChange={e => _changeName(e, channel)} />
		<div className='channel__controls'>
			<Slider value={channel.volume} onChange={x => _changeVolume(x, channel)} />
			<Slider value={channel.pan} onChange={x => _changePan(x, channel)} />
		</div>
	</div>
);
