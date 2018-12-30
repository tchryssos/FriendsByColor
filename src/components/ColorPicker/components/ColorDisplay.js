import React from 'react'
import { ColorContext } from 'logic/contexts/color'
import './styles.scss'

export default () => (
	<ColorContext.Consumer>
		{
			({ color }) => (
				<div
					style={{ backgroundColor: color }}
					className="colorDisplay"
				/>
			)
		}
	</ColorContext.Consumer>
)
