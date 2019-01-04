import * as d3 from 'd3'
import { hsv, interpolateHsvLong } from 'd3-hsv'
import {
	CANVAS_COLOR_WIDTH as CC_WIDTH, CANVAS_HEIGHT as C_HEIGHT,
} from 'constants/canvas'

// SCALES
export const hsvColorScale = d3.scaleLinear()
	.domain([0, 360])
	.range([hsv(0, 1, 1), hsv(360, 1, 1)])
	.interpolate(interpolateHsvLong)

// This scale takes a Y coordinate value and returns an hsv 'hue' value
// Note that the domain is 'inverted'
export const hsvYToHueScale = d3.scaleLinear()
	.domain([0, C_HEIGHT])
	.range([0, 360])

// This scale takes an hsv 'saturation' value and returns an X coordinate
export const hsvSaturationToXScale = d3.scaleLinear()
	.domain([0, 1])
	.range([0, CC_WIDTH])

// This scale takes an hsv 'value' value and returns a Y coordinate
export const hsvValueToYScale = d3.scaleLinear()
	.domain([0, 1])
	.range([0, C_HEIGHT])

// This scale takes an X coordinate and returns an hsv 'saturation' value
export const hsvXToSaturationScale = d3.scaleLinear()
	.domain([0, CC_WIDTH])
	.range([0, 1])

// This scale takes a Y coordinate and returns an hsv 'value value
// Note that the domain is 'inverted'
export const hsvYToValueScale = d3.scaleLinear()
	.domain([C_HEIGHT, 0])
	.range([0, 1])


// FUNCTIONS
// This function takes in the hsv 'saturation' and 'value' values
// and returns a pair of X, Y coordinates to navigate the canvas.
export const hsvCoordinatesMapper = (saturation, value) => ({
	x: hsvSaturationToXScale(saturation),
	y: hsvValueToYScale(value),
})

// This function takes in a set of XY coordinates from the canvas
// and returns the appropriate hsv 'value' and 'saturation' values
export const hsvValuesMapper = (x, y) => ({
	saturation: hsvXToSaturationScale(x),
	value: hsvYToValueScale(y),
})

export const coordinatesToColor = (hue, x, y) => {
	const { saturation, value } = hsvValuesMapper(x, y)
	const rgbColor = d3.rgb(hsv(hue, saturation, value))
	// eslint-disable-next-line max-len
	return `rgb(${Math.round(rgbColor.r)},${Math.round(rgbColor.g)},${Math.round(rgbColor.b)})`
}

export const coordinatesToHue = y => Math.round(hsvYToHueScale(y))
