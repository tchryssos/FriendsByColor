import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { colorScale } from 'logic/color'
import './styles.scss'

export default class HueColorStrip extends PureComponent {
	constructor(props) {
		super(props)
		this.canvasRef = React.createRef()
	}

	componentDidMount() {
		this.context = this.canvasRef.current.getContext('2d')
		const hueGradient = this.context.createLinearGradient(0, 0, 0, 150)
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

		this.context.fillStyle = hueGradient
		this.context.fillRect(0, 0, 100, 300)
	}

	render() {
		return (
			<>
				<canvas
					className="hueStrip"
					ref={this.canvasRef}
				/>
				<p>{this.props.hue}</p>
			</>
		)
	}
}

HueColorStrip.propTypes = {
	hue: PropTypes.string.isRequired,
}
