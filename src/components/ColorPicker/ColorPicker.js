import React, { PureComponent } from 'react'
import { hslColorScale } from 'logic/color'
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

			// this function also needs to change color to match
			// contextual changes in color after changes in hue

		}

		const setColor = (e, ctx) => {
			const xOffset = e.nativeEvent.offsetX
			const yOffset = e.nativeEvent.offsetY
			const canvasData = ctx.getImageData(xOffset, yOffset, 1, 1).data
			this.setState({
				color: `
					rgb(${canvasData[0]},
						${canvasData[1]},
						${canvasData[2]})
				`,
				colorX: e.clientX,
				colorY: e.clientY,
			})
		}

		this.state = {
			hue: `${hslColorScale(0)}`,
			color: `${hslColorScale(0)}`,
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
