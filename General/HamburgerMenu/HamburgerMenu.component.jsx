import React, { useState } from 'react'

import { HamburgerMenuContainer } from './HamburgerMenu.styles'

const HamburgerMenu = () => {
	const [active, setActive] = useState(false)

	const toggleActive = () => {
		setActive(!active)
	}

	return (
		<HamburgerMenuContainer
			onClick={toggleActive}
			className={active ? 'active' : ''}
		>
			<div></div>
			<div></div>
			<div></div>
		</HamburgerMenuContainer>
	)
}

export default HamburgerMenu
