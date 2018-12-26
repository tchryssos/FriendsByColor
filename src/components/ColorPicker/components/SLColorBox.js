import React, { PureComponent } from 'react'
import { HueContext } from '../context'
import './styles.scss'
// import { colorScale } from 'logic/color'

export default class SLColorBox extends PureComponent {
	constructor(props) {
		super(props)
		this.canvasRef = React.createRef()
	}

	componentDidMount() {
		this.canvasContext = this.canvasRef.current.getContext('2d')
		this.fillBox()
	}

	componentDidUpdate() {
		this.fillBox()
	}

	fillBox = () => {
		// Fill the SL box with selected hue
		this.canvasContext.fillStyle = this.context.hue
		this.canvasContext.fillRect(0, 0, 300, 300)

		// Fill the SL box with a gradient to white
		const grdWhite = this.canvasContext.createLinearGradient(0, 0, 300, 0)
		grdWhite.addColorStop(0, 'rgba(255,255,255,1)')
		grdWhite.addColorStop(1, 'rgba(255,255,255,0)')
		this.canvasContext.fillStyle = grdWhite
		this.canvasContext.fillRect(0, 0, 300, 300)

		// Fill the SL box with a gradient to black
		const grdBlack = this.canvasContext.createLinearGradient(0, 0, 0, 300)
		grdBlack.addColorStop(0, 'rgba(0,0,0,0)')
		grdBlack.addColorStop(1, 'rgba(0,0,0,1)')
		this.canvasContext.fillStyle = grdBlack
		this.canvasContext.fillRect(0, 0, 300, 300)
	}

	render() {
		return (
			<HueContext.Consumer>
				{
					({ hue, color, setHue, setColor }) => (
						<canvas
							height={300}
							width={300}
							className="sLBox"
							ref={this.canvasRef}
							onClick={e => setColor(e, this.canvasContext)}
						/>
					)
				}
			</HueContext.Consumer>
		)
	}
}

SLColorBox.contextType = HueContext
