
export default ({value, onChange}) => (
	<div className='slider' onClick={() => onChange(value + 0.1)}>{value}</div>
);
