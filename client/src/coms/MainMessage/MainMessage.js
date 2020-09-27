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
							<a
								href='https://play.google.com/store/apps/details?id=com.whatsapp'
								rel='noopener noreferrer'
								target='_blank'
							>
								<i className='fab fa-android fa-fw' />
								<span>Android</span>
							</a>
						</IContainer>
						<IContainer>	<a
								href='http://itunes.apple.com/us/app/whatsapp-messenger/id310633997?mt=8'
								rel='noopener noreferrer'
								target='_blank'
							>
							<i className='fab fa-apple fa-fw'></i>
							<span>iPhone</span></a>
						</IContainer>
						<IContainer>	<a
								href='https://www.whatsapp.com/download'
								rel='noopener noreferrer'
								target='_blank'
							>
							<i className='fas fa-desktop fa-fw'></i>
							<span>Mac or Windows PC</span></a>
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
