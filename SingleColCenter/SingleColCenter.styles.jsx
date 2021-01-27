import styled from 'styled-components'
import { device } from '../../styles/css/utils.styles.js'

export const SingleColCenterContainer = styled.div`
	${({ theme: { css } }) => css.flexCenterCol}
	width: 50%;
	min-width: 360px;

	${device.mobileM} {
		min-width: 340px;
	}

	${device.mobileS} {
		min-width: 290px;
	}
`
