import React from 'react';

import Accordion from './Accordion';
import { AccordionPropsChildren } from './Styles';

const Faq = ({ faq, index, toggleOpenClose }) => {
	return (
		<>
			<Accordion
				title={faq.title}
				isOpen={faq.isOpen}
				onClickIndex={index}
				toggleOpenClose={toggleOpenClose}
			>
				<AccordionPropsChildren>{faq.content}</AccordionPropsChildren>
			</Accordion>
		</>
	);
};

export default Faq;
