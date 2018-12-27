import React, { PureComponent } from 'react'
import { colorScale } from 'logic/color'
import { HueContext } from '../context'
import './styles.scss'

export default class HueColorStrip extends PureComponent {
	constructor(props) {
		super(props)
		this.canvasRef = React.createRef()
	}

	componentDidMount() {
		this.canvasContext = this.canvasRef.current.getContext('2d')
		const hueGradient = this.canvasContext.createLinearGradient(0, 0, 0, 300)
		hueGradient.addColorStop(0, colorScale(0))
		hueGradient.addColorStop(0.083, colorScale(30))
		hueGradient.addColorStop(0.166, colorScale(60))
		hueGradient.addColorStop(0.249, colorScale(90))
		hueGradient.addColorStop(0.332, colorScale(120))
		hueGradient.addColorStop(0.415, colorScale(150))
		hueGradient.addColorStop(0.5, colorScale(180))
		hueGradient.addColorStop(0.581, colorScale(210))
		hueGradient.addColorStop(0.664, colorScale(240))
		hueGradient.addColorStop(0.747, colorScale(270))
		hueGradient.addColorStop(0.83, colorScale(300))
		hueGradient.addColorStop(0.913, colorScale(330))
		hueGradient.addColorStop(1, colorScale(360))

		this.canvasContext.fillStyle = hueGradient
		this.canvasContext.fillRect(0, 0, 100, 300)
	}

	render() {
		return (
			<HueContext.Consumer>
				{
					({ color, setHue }) => (
					<>
						<canvas
							height={300}
							width={50}
							className="hueStrip"
							ref={this.canvasRef}
							onClick={e => setHue(e, this.canvasContext)}
						/>
						<p>{color}</p>
					</>
					)
				}
			</HueContext.Consumer>
		)
	}
}
