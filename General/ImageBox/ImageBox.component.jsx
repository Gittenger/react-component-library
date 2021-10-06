import React from 'react'

import { ImageBoxContainer } from './ImageBox.styles'

const ImageBox = ({ img, className }) => (
	<ImageBoxContainer className={className}>
		<img src={img} alt="" />
	</ImageBoxContainer>
)

export default ImageBox
