import styled from 'styled-components'

export const HamburgerMenuContainer = styled.div`
	position: fixed;
	top: 1rem;
	right: 1rem;
	width: 4rem;
	cursor: pointer;
	--menuThickness: 6px;
	--menuGap: 0.75rem;

	height: calc(var(--menuThickness) * 3 + var(--menuGap) * 2);

	& > * {
		position: absolute;
		background-color: ${({ theme: { colors } }) => colors.secondary};
		height: var(--menuThickness);
		width: 100%;
		transition: transform 0.4s;
		transform: rotate(0) translateX(0);
	}

	& > *:nth-child(1) {
		top: 0;
		transform-origin: center;
	}
	& > *:nth-child(2) {
		top: calc(var(--menuThickness) + var(--menuGap));
	}
	& > *:nth-child(3) {
		top: calc(var(--menuThickness) * 2 + var(--menuGap) * 2);
		transform-origin: center;
	}

	&.active {
		& > *:nth-child(1) {
			transform: rotate(45deg) translate(8px, 12px) scale(0.7);
		}
		& > *:nth-child(2) {
			transform: translateX(500px);
		}
		& > *:nth-child(3) {
			transform: rotate(-45deg) translate(7px, -12px) scale(0.7);
		}
	}
`
