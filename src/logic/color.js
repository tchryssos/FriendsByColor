import * as d3 from 'd3'
import { hsv, interpolateHsvLong } from 'd3-hsv'
import {
	CANVAS_COLOR_WIDTH as CC_WIDTH, CANVAS_COLOR_HEIGHT as CC_HEIGHT,
} from 'constants/canvas'

export const hsvColorScale = d3.scaleLinear()
	.domain([0, 360])
	.range([hsv(0, 1, 1), hsv(360, 1, 1)])
	.interpolate(interpolateHsvLong)


// This function is used to take in hsv 'saturation' or 'value' values
// (between 0 and 1) and return a coordinate value on the color canvas
export const hsvCoordinateMapper = (val, dimension) => (
	d3.scaleLinear(val)
		.domain([0, 1])
		.range(0, dimension)
)

// This function is used to take a coordinate value on the color canvas
// and return the appropriate hsv 'saturation or 'value' value
export const hsvValueMapper = (coordinate, dimension) => (
	d3.scaleLinear(coordinate)
		.domain([0, dimension])
		.range(0, 1)
)

// This function takes in the hsv 'saturation' and 'value' values
// and returns a pair of X, Y coordinates to navigate the canvas.
export const hsvCoordinatesMapper = (saturation, value) => ({
	x: hsvCoordinateMapper(value, CC_WIDTH),
	y: hsvCoordinateMapper(saturation, CC_HEIGHT),
})

// This function takes in a set of XY coordinates from the canvas
// and returns the appropriate hsv 'value' and 'saturation' values
export const hsvValuesMapper = (x, y) => ({
	value: hsvValueMapper(x, CC_WIDTH),
	saturation: hsvValueMapper(y, CC_HEIGHT),
})
