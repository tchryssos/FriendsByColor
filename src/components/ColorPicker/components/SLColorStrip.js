import React, { PureComponent } from 'react'
import { colorScale } from 'logic/color'

export default class SLColorStrip extends PureComponent {
	constructor(props) {
		super(props)
		this.canvasRef = React.createRef()
	}

	componentDidMount() {
		this.context = this.canvasRef.current.getContext('2d')
		const sLGradient = this.context.createLinearGradient(0, 0, 0, 300)
		sLGradient.addColorStop(0, colorScale(0))
		sLGradient.addColorStop(0.083, colorScale(30))
		sLGradient.addColorStop(0.166, colorScale(60))
		sLGradient.addColorStop(0.249, colorScale(90))
		sLGradient.addColorStop(0.332, colorScale(120))
		sLGradient.addColorStop(0.415, colorScale(150))
		sLGradient.addColorStop(0.5, colorScale(180))
		sLGradient.addColorStop(0.581, colorScale(210))
		sLGradient.addColorStop(0.664, colorScale(240))
		sLGradient.addColorStop(0.747, colorScale(270))
		sLGradient.addColorStop(0.83, colorScale(300))
		sLGradient.addColorStop(0.913, colorScale(330))
		sLGradient.addColorStop(1, colorScale(360))

		this.context.fillStyle = sLGradient
		this.context.fillRect(0, 0, 300, 300)
	}

	render() {
		return (
			<canvas
				height={300}
				width={300}
				className="sLStrip"
				ref={this.canvasRef}
			/>
		)
	}
}
