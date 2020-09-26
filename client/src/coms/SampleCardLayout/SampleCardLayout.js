import React from 'react';
import {
	Wrapper
} from './Styles';
import {CardContents} from './CardContents'
import CardContent from './CardContent';
const SampleCardLayout = () => {
	return (
		<>
			<Wrapper>
			{CardContents.map(content => (
				<CardContent key={content.cardIndex} content={content} />
			))}
			</Wrapper>
		</>
	);
};

export default SampleCardLayout;
