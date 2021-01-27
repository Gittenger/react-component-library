import styled from 'styled-components'

export const ImageBoxContainer = styled.div`
	${({ theme: { css } }) => css.flexCenterCol}

	img {
		width: 93%;
		min-width: 250px;
	}
`
