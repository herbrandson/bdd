import { valueForRange } from '../utils/math';
import triggerRepository from '../repositories/trigger-repository';

const LUGS = 10;
const RADIUS = 40;

function valueToCoord(value) {
	return RADIUS + (RADIUS * value);
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

export const Trigger = ({x}) => (
	<circle key={x.id} cx={valueToCoord(x.x)} cy={valueToCoord(x.y)} r={2 * x.force} style={{fill: getColor(x.offset)}} className='content__trigger'/>
);

export const render = (triggers) => (
	<div className='content'>
		<svg xmlns='http://www.w3.org/2000/svg' viewBox='-10 -10 120 120'>
			<g className='content__drum'>
				<circle cx='50' cy='50' r={RADIUS} />

				{[...Array(LUGS)].map((x, i) =>
					<path d='M10,47 Q6,50 10,53z' transform={`rotate(${360 / LUGS * i} 50 50)`} />
				)}
			</g>

			<g>
				{triggers.map(x => <Trigger key={x.id} x={x} />)}
			</g>
		</svg>
	</div>
);

export default () => render(triggerRepository.get());
