import React, { PureComponent } from 'react'
import { ColorContext } from './context'
import { HueColorStrip, SLColorBox } from './components'
import './styles.scss'

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
			})
		}

		const setColor = (e, ctx) => {
			e.preventDefault()
			const x = e.nativeEvent.offsetX
			const y = e.nativeEvent.offsetY
			const canvasData = ctx.getImageData(x, y, 1, 1).data
			this.setState({
				color: `
					rgb(${canvasData[0]},
						${canvasData[1]},
						${canvasData[2]})
				`,
			})
		}

		this.state = {
			hue: 'rgb(255, 0, 0)',
			color: '',
			setHue,
			setColor,
		}
	}

	render() {
		return (
			<ColorContext.Provider value={this.state}>
				<SLColorBox />
				<HueColorStrip />
			</ColorContext.Provider>
		)
	}
}
