import React from 'react';
import { MainCardContainer } from '../../AppGlobalCss';
import { Wrapper, TopContainer, BottomContainer } from './Styles';
import { FooterContents } from './FooterContents'
import ColumnContent from './ColumnContent'

const Footer = () => {
	return (
		<>
			<Wrapper>
				<MainCardContainer pad='major' darker='no'>
					<TopContainer>
						{FooterContents.map(content => (
							<ColumnContent key={content.colIndex} content={content} />
						))}
					</TopContainer>
				</MainCardContainer>
				<MainCardContainer darker='yes' >
					<BottomContainer>
						<div className='w-25'>
							<div className='title'>2020 © WhatsApp Inc.</div>
						</div>
						<div className='w-25'>
							<div>
								<a href='https://www.google.com' alt=''>
									Privacy & Terms
								</a>
							</div>
						</div>
					</BottomContainer>
				</MainCardContainer>
			</Wrapper>
		</>
	);
};

export default Footer;
