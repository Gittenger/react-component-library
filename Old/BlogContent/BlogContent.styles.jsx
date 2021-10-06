import styled from 'styled-components'

import TComp from '../typography/typography.components.js'

import { device } from '../../styles/css/utils.styles.js'

const { H1 } = TComp

export const BlogContentContainer = styled.div`
	& > .image-box {
		margin-top: 1.5rem;
	}
`

export const Heading1 = styled(H1)`
	margin-top: 1.2rem;
`

export const LeadHeading = styled(H1)`
	--scale: 1.25;

	margin-bottom: 0;

	${device.tabletS} {
		--scale: 1;
	}
`
