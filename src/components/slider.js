
export default ({value, min = 0, max = 1, onChange}) => {
	const percent = ((value - min) / (max - min) * 100) + '%';

	return (
		<div className='slider' onClick={() => onChange(value + 0.1)}>
			<div className='slider__value' style={{width: percent}}></div>
		</div>
	);
};
