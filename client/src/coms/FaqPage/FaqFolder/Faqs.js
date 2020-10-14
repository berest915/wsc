import React, { useState } from 'react';

import { FaqContainer } from './Styles';

import FaqItems from './FaqItems';
import Faq from './Faq';

const Faqs = () => {
	const [FaqItemStates, setFaqItemStatas] = useState(FaqItems);

	const toggleOpenClose = onClickIndex => {
		setFaqItemStatas(
			FaqItemStates.map((faq, i) => {
				if (onClickIndex === i) {
					faq.isOpen = !faq.isOpen;
				} else {
					faq.isOpen = false;
				}
				return faq;
			})
		);
	};

	return (
		<>
		<div style={{backgroundColor: 'rgb(248,249,250)'}}>
			<FaqContainer>
				{FaqItemStates.map((faq, i) => (
					<Faq key={i} index={i} faq={faq} toggleOpenClose={toggleOpenClose} />
				))}
			</FaqContainer>
			</div>
		</>
	);
};

export default Faqs;
