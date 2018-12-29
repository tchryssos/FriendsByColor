import * as d3 from 'd3'
import { hsv, interpolateHsvLong } from 'd3-hsv'
import {
	CANVAS_COLOR_WIDTH as CC_WIDTH, CANVAS_HEIGHT as C_HEIGHT,
} from 'constants/canvas'

export const hsvColorScale = d3.scaleLinear()
	.domain([0, 360])
	.range([hsv(0, 1, 1), hsv(360, 1, 1)])
	.interpolate(interpolateHsvLong)

export const hsvCoordinateXScale = d3.scaleLinear()
	.domain([0, 1])
	.range([0, CC_WIDTH])

export const hsvCoordinateYScale = d3.scaleLinear()
	.domain([0, 1])
	.range([0, C_HEIGHT])

export const hsvSaturationXScale = d3.scaleLinear()
	.domain([0, CC_WIDTH])
	.range([0, 1])

// Note that the domain is "inverted"
export const hsvValueYScale = d3.scaleLinear()
	.domain([C_HEIGHT, 0])
	.range([0, 1])

// This function takes in the hsv 'saturation' and 'value' values
// and returns a pair of X, Y coordinates to navigate the canvas.
export const hsvCoordinatesMapper = (saturation, value) => ({
	x: hsvCoordinateXScale(value),
	y: hsvCoordinateYScale(saturation),
})

// This function takes in a set of XY coordinates from the canvas
// and returns the appropriate hsv 'value' and 'saturation' values
export const hsvValuesMapper = (x, y) => ({
	saturation: hsvSaturationXScale(x),
	value: hsvValueYScale(y),
})
