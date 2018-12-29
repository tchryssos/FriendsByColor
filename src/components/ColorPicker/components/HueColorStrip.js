import React, { PureComponent } from 'react'
import { hslColorScale } from 'logic/color'
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
		hueGradient.addColorStop(0, hslColorScale(0))
		hueGradient.addColorStop(0.083, hslColorScale(30))
		hueGradient.addColorStop(0.166, hslColorScale(60))
		hueGradient.addColorStop(0.249, hslColorScale(90))
		hueGradient.addColorStop(0.332, hslColorScale(120))
		hueGradient.addColorStop(0.415, hslColorScale(150))
		hueGradient.addColorStop(0.5, hslColorScale(180))
		hueGradient.addColorStop(0.581, hslColorScale(210))
		hueGradient.addColorStop(0.664, hslColorScale(240))
		hueGradient.addColorStop(0.747, hslColorScale(270))
		hueGradient.addColorStop(0.83, hslColorScale(300))
		hueGradient.addColorStop(0.913, hslColorScale(330))
		hueGradient.addColorStop(1, hslColorScale(360))

		this.canvasContext.fillStyle = hueGradient
		this.canvasContext.fillRect(0, 0, C_WIDTH, C_HEIGHT)
	}

	render() {
		return (
			<ColorContext.Consumer>
				{
					({ color, setHue }) => (
					<>
						<canvas
							height={C_HEIGHT}
							width={C_WIDTH}
							className="hueStrip"
							ref={this.canvasRef}
							onClick={e => setHue(e, this.canvasContext)}
						/>
						<ColorCursor hue className="hueCursor" />
						<p>{color}</p>
					</>
					)
				}
			</ColorContext.Consumer>
		)
	}
}
