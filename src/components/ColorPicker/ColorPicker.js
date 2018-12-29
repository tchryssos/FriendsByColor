import React, { PureComponent } from 'react'
import { rgb } from 'd3'
import { hsv } from 'd3-hsv'
import { hsvColorScale, hsvValuesMapper } from 'logic/color'
import { ColorContext } from './context'
import { HueColorStrip, SLColorBox, ColorDisplay } from './components'

export default class ColorPicker extends PureComponent { // eslint-disable-line
	constructor(props) {
		super(props)

		const setHue = (e, ctx) => {
			const x = e.nativeEvent.offsetX
			const y = e.nativeEvent.offsetY
			const canvasData = ctx.getImageData(x, y, 1, 1).data
			this.setState({
				hue: `
					rgb(${canvasData[0]},
						${canvasData[1]},
						${canvasData[2]})
				`,
				hueY: e.clientY,
			})
		}

		const setColor = (e) => {
			const xOffset = e.nativeEvent.offsetX
			const yOffset = e.nativeEvent.offsetY
			const { saturation, value } = hsvValuesMapper(xOffset, yOffset)
			const rgbColor = rgb(hsv(0, saturation, value))
			const rgbString = `rgb(
				${Math.round(rgbColor.r)},
				${Math.round(rgbColor.g)},
				${Math.round(rgbColor.b)})`

			this.setState({
				color: rgbString,
				colorX: e.clientX,
				colorY: e.clientY,
			})
		}

		this.state = {
			hue: `${hsvColorScale(0)}`,
			color: `${hsvColorScale(0)}`,
			colorX: undefined,
			colorY: undefined,
			hueY: undefined,
			setHue,
			setColor,
		}
	}

	render() {
		return (
			<ColorContext.Provider value={this.state}>
				<ColorDisplay />
				<SLColorBox />
				<HueColorStrip />
			</ColorContext.Provider>
		)
	}
}
