import React from 'react';

import Accordion from './Accordion';
import { AccordionPropsChildren } from './Styles';

import ItemLinks from './ItemLinks';

const Faq = ({ faq, index, toggleOpenClose }) => {
	return (
		<>
			<Accordion
				title={faq.title}
				isOpen={faq.isOpen}
				onClickIndex={index}
				toggleOpenClose={toggleOpenClose}
			>
				{!Array.isArray(faq.content) ? (
					<AccordionPropsChildren>{faq.content}</AccordionPropsChildren>
				) : (
					<div>
						{faq.content.map((item, index) => (
							<ItemLinks key={index} item={item} />
						))}
					</div>
				)}
			</Accordion>
		</>
	);
};

export default Faq;
