import * as d3 from 'd3'
import { hsv, interpolateHsvLong } from 'd3-hsv'

export const hsvColorScale = d3.scaleLinear()
	.domain([0, 360])
	.range([hsv(0, 1, 1), hsv(360, 1, 1)])
	.interpolate(interpolateHsvLong)


export const hsvDimensionMapper = dimension => (
	d3.scaleLinear()
		.domain([0, 1])
		.range(0, dimension)
)

export const hsvCoordinateMapper = (height, width) => {
	const mappedHeight = hsvDimensionMapper(height)
	const mappedWidth = hsvDimensionMapper(width)
	return ({
		x: mappedWidth,
		y: mappedHeight,
	})
}
