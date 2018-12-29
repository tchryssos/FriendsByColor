import * as d3 from 'd3'

// eslint-disable-next-line import/prefer-default-export
export const hslColorScale = d3.scaleLinear()
	.domain([0, 360])
	.range([d3.hsl(0, 1, 0.5), d3.hsl(360, 1, 0.5)])
	.interpolate(d3.interpolateHslLong)
