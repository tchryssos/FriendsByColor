import React from 'react'
import { ColorContext } from '../context'
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
