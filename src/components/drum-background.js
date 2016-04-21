export const LUGS = 10;
export const LUG_SIZE = 2;
export const RADIUS = 40;
export const MARGIN = 5;
export const CENTER = RADIUS + MARGIN;
export const WIDTH = RADIUS * 2 + MARGIN * 2;

export const PATH = `
	M${MARGIN},${CENTER - LUG_SIZE}
	Q${MARGIN - LUG_SIZE},${CENTER}
	${MARGIN},${CENTER + LUG_SIZE}z`;

export const drum = (
	<g className='content__drum'>
		<circle cx={CENTER} cy={CENTER} r={RADIUS} />
		{[...Array(LUGS)].map((x, i) =>
			<path
				key={i}
				d={PATH}
				transform={`rotate(${360 / LUGS * i} ${CENTER} ${CENTER})`} />
		)}
	</g>
);
