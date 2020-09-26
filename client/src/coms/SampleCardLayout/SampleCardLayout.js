import React from 'react';
import {
	Wrapper,
	FlexItem,
	MarginDiv,
	ContentDiv,
	ImageRelativeContainer,
	FirstImage,
	SecondImage,
} from './Styles';

const SampleCardLayout = () => {
	return (
		<>
			<Wrapper>
				<FlexItem bgColor='1'>
					<ContentDiv pad nFlexItem='1'>
						<div className='title'>WhatsApp Business App</div>
						<div className='p1'>
							<a
								href='https://www.google.com'
								rel='noopener noreferrer'
								target='_blank'
								alt=''
							>
								WhatsApp Business{' '}
							</a>
							is a free to download app that was built with the small business
							owner in mind. Create a catalog to showcase your products and
							services. Connect with your customers easily by using tools to
							automate, sort and quickly respond to messages.
						</div>
						<div className='p1' style={{ marginBottom: '3rem' }}>
							WhatsApp can also help medium and large businesses provide
							customer support and deliver important notifications to customers.
							Learn more about <span className='prevent-space-ignorant'></span>
							<a
								href='https://www.google.com'
								rel='noopener noreferrer'
								target='_blank'
								alt=''
							>
								WhatsApp Business API.
							</a>
						</div>
					</ContentDiv>
					<ImageRelativeContainer>
						<FirstImage />
					</ImageRelativeContainer>
				</FlexItem>

				<MarginDiv></MarginDiv>

				<FlexItem pad bgColor='2'>
					<SecondImage />
					<ContentDiv nFlexItem='2'>
						<div className='caption'>END-TO-END ENCRYPTION</div>
						<div className='title'>Security by Default</div>
						<div className='p1'>
							Some of your most personal moments are shared on WhatsApp, which
							is why we built end-to-end encryption into the latest versions of
							our app. When end-to-end encrypted, your messages and calls are
							secured so only you and the person you're communicating with can
							read or listen to them, and nobody in between, not even WhatsApp.
						</div>
					</ContentDiv>
				</FlexItem>
			</Wrapper>
		</>
	);
};

export default SampleCardLayout;
