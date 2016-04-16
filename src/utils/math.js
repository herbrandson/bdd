
export function clip(value, min, max) {
	return Math.max(Math.min(value, max), min);
}

export function percentForRange(value, min = 0, max = 1, asDecimal = true) {
	const result = (value - min) / (max - min);
	return asDecimal ? result : result * 100;
}

export function valueForRange(percent, min = 0, max = 1) {
	return (max - min) * percent + min;
}
