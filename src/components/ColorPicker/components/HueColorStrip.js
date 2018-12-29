import React, { PureComponent } from 'react'
import { hsvColorScale } from 'logic/color'
import {
	CANVAS_HEIGHT as C_HEIGHT,
	CANVAS_HUE_WIDTH as C_WIDTH,
} from 'constants/canvas'
import { ColorContext } from '../context'
import { ColorCursor } from '../components'
import './styles.scss'

export default class HueColorStrip extends PureComponent {
	constructor(props) {
		super(props)
		this.canvasRef = React.createRef()
	}

	componentDidMount() {
		this.canvasContext = this.canvasRef.current.getContext('2d')
		const hueGradient = this.canvasContext.createLinearGradient(0, 0, 0, C_HEIGHT)
		hueGradient.addColorStop(0, hsvColorScale(0))
		hueGradient.addColorStop(0.083, hsvColorScale(30))
		hueGradient.addColorStop(0.166, hsvColorScale(60))
		hueGradient.addColorStop(0.249, hsvColorScale(90))
		hueGradient.addColorStop(0.332, hsvColorScale(120))
		hueGradient.addColorStop(0.415, hsvColorScale(150))
		hueGradient.addColorStop(0.5, hsvColorScale(180))
		hueGradient.addColorStop(0.581, hsvColorScale(210))
		hueGradient.addColorStop(0.664, hsvColorScale(240))
		hueGradient.addColorStop(0.747, hsvColorScale(270))
		hueGradient.addColorStop(0.83, hsvColorScale(300))
		hueGradient.addColorStop(0.913, hsvColorScale(330))
		hueGradient.addColorStop(1, hsvColorScale(360))

		this.canvasContext.fillStyle = hueGradient
		this.canvasContext.fillRect(0, 0, C_WIDTH, C_HEIGHT)
	}

	render() {
		return (
			<ColorContext.Consumer>
				{
					({ setHue }) => (
					<>
						<canvas
							height={C_HEIGHT}
							width={C_WIDTH}
							className="hueStrip"
							ref={this.canvasRef}
							onClick={e => setHue(e, this.canvasContext)}
						/>
						<ColorCursor hue className="hueCursor" />
					</>
					)
				}
			</ColorContext.Consumer>
		)
	}
}
