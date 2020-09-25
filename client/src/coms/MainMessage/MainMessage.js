import React from 'react';
import { MainCardContainer } from '../../AppGlobalCss';
import { Wrapper, ContentDiv, IContainer, MainImage } from './Styles';

const MainMessage = () => {
	return (
		<>
			<MainCardContainer pad='major'>
				<Wrapper>
					<ContentDiv className='w-46'>
						<div className='title'>Simple. Secure. Reliable messaging.</div>
						<div className='p'>
							With WhatsApp, you'll get fast, simple, secure messaging and
							calling for free*, available on phones all over the world.
						</div>
						<div className='minor-p'>
							* Data charges may apply. Contact your provider for details.
						</div>
						<IContainer>
							<i className='fab fa-android fa-fw' />
							<span>Android</span>
						</IContainer>
						<IContainer>
							<i className='fab fa-apple fa-fw'></i>
							<span>iPhone</span>
						</IContainer>
						<IContainer>
						<i className="fas fa-desktop fa-fw"></i>
							<span>Mac or Windows PC</span>
						</IContainer>
					</ContentDiv>
					<div className='w-40'>
						<MainImage />
					</div>
				</Wrapper>
			</MainCardContainer>
		</>
	);
};

export default MainMessage;
