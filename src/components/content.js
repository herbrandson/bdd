import { drum, CENTER, RADIUS, WIDTH } from './drum-background';
import { valueForRange } from '../utils/math';
import triggerRepository from '../repositories/trigger-repository';

function valueToCoord(value) {
	return CENTER + (RADIUS * value);
}

function getColor(value) {
	// const base = (value > 0) ? {r: 0xb7, g: 0xb0, b: 0x53} : {r: 0x89, g: 0xbe, b: 0x29};
	const base = (value > 0) ? {r: 0xFF, g: 0x00, b: 0x00} : {r: 0x00, g: 0x00, b: 0xFF};
	value = Math.abs(value);

	let r = valueForRange(value, 0x4b, base.r);
	r = Math.round(r);

	let g = valueForRange(value, 0x4b, base.g);
	g = Math.round(g);

	let b = valueForRange(value, 0x4b, base.b);
	b = Math.round(b);

	return `rgb(${r}, ${g}, ${b})`;
}

export const render = (triggers) => (
	<div className='content'>
		<svg viewBox={`0 0 ${WIDTH} ${WIDTH}`}>
			{drum}
			<g>
				{triggers.map(x => (
					<circle
						key={x.id}
						cx={valueToCoord(x.x)}
						cy={valueToCoord(x.y)}
						r={2 * x.force}
						style={{fill: getColor(x.offset)}}
						className='content__trigger' />
				))}
			</g>
		</svg>
	</div>
);

export default () => render(triggerRepository.get());
