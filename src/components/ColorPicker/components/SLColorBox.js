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
		this.fillBox()
	}

	componentWillReceiveProps() {
		this.fillBox()
	}

	fillBox = () => {
		this.canvasContext = this.canvasRef.current.getContext('2d')
		this.canvasContext.fillStyle = this.context.hue
		this.canvasContext.fillRect(0, 0, 300, 300)
	}

	render() {
		return (
			<canvas
				height={300}
				width={300}
				className="sLBox"
				ref={this.canvasRef}
			/>
		)
	}
}

SLColorBox.contextType = HueContext
