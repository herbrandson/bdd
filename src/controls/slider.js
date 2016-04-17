import { percentForRange, valueForRange } from '../utils/math';
import drag from '../ui/drag';

export default ({type, value, min, max, onChange}) => {
	const style = {
		width: percentForRange(value, min, max, false) + '%',
	};

	function callback(value) {
		const result = valueForRange(value, min, max);
		onChange(result);
	}

	return (
		<div className={`slider -${type}`} onMouseDown={e => drag(e, callback)}>
			<div className='slider__bar' style={style}>
				<div className='slider__thumb'></div>
			</div>
		</div>
	);
};
