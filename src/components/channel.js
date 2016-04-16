import Slider from './slider';

export default ({channel}) => (
	<div className='channel'>
		<div className='channel__handel'>x</div>
		<div className='channel__name'>{channel.name}</div>
		<div className='channel__controls'>
			<Slider value={channel.volume} />
			<Slider value={channel.pan} />
		</div>
	</div>
);
