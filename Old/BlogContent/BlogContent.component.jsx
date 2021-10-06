import React from 'react'

import CIndex from '../components.index.js'

import {
	BlogContentContainer,
	Heading1,
	LeadHeading,
} from './BlogContent.styles'

const BlogContent = ({ data }) => {
	const {
		ImageBox,
		TComp: { AuthorText, P },
	} = CIndex
	const { title, author, intro, sections } = data
	return (
		<BlogContentContainer>
			<LeadHeading>{title}</LeadHeading>
			<AuthorText>by {author}</AuthorText>
			<P>{intro}</P>
			{sections.map(({ heading, text, image }, i) => (
				<section key={i}>
					<Heading1>{heading}</Heading1>
					{text
						.split('\n')
						.map((par, i) => (par === '' ? '' : <P key={i}>{par}</P>))}
					{image ? <ImageBox img={image} /> : ''}
				</section>
			))}
		</BlogContentContainer>
	)
}

export default BlogContent
