import React from 'react'

// eslint-disable-next-line import/prefer-default-export
export const ColorContext = React.createContext({
	hue: 'rgb(255, 0, 0)',
	color: 'rgb(255, 0 ,0)',
	colorX: 0,
	colorY: 0,
	hueY: 0,
	setHue: () => {},
	setColor: () => {},
})
